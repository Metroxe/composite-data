import {DataLeaf, IData, IValidationResult, ValidationResult} from "../model";
import {IValidationResultItem} from "../model/IValidationResult";

class DataArray extends DataLeaf<IData[]> {

	protected validityArray: Array<(value: IData[]) => IValidationResult> = [
		DataArray.isArray,
		DataArray.checkValidityOfItemsInArray,
	];

	private static isArray(value: IData[]): IValidationResult {
		return new ValidationResult(value.constructor === Array);
	}

	// run isValid() for each data leaf, which returns a promise from each
	// wrap all promises into an overall async ValidationResult to be run later. the return value of the overall promise
	// will represent the validation result for this array data leaf
	private static checkValidityOfItemsInArray(value: IData[]): IValidationResult {
        const asyncValidRes: IValidationResult = new ValidationResult();
        asyncValidRes.createAsync((f: (res: IValidationResultItem) => void, r: (res: IValidationResultItem) => void): void => {
            try {
				const asyncValidFuncs: Array<Promise<IValidationResultItem>> = [];
				let data: IData;
				for (data of value) {
					asyncValidFuncs.push(data.isValid());
				}
				Promise.all(asyncValidFuncs).then((res: IValidationResultItem[]): void => {
					f(new ValidationResult(true).getResult());
				}, (err: IValidationResultItem): void => {
					r(err);
				});
            } catch (err) {
                r(new ValidationResult(false, err.toString()).getResult());
            }
        });
        return asyncValidRes;
	}

}

export {DataArray};
