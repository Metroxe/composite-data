import {DataLeaf, IData, IValidationResult, ValidationResult} from "../model";

class DataArray extends DataLeaf<IData[]> {

	protected validityArray: Array<(value: IData[]) => IValidationResult> = [
		DataArray.isArray,
		DataArray.checkValidityOfItemsInArray,
	];

	private static isArray(value: IData[]): IValidationResult {
		return new ValidationResult(value.constructor === Array);
	}

	private static checkValidityOfItemsInArray(value: IData[]): IValidationResult {
		let data: IData;
		for (data of value) {
			const validRes: IValidationResult = data.isValid();
			if (!validRes.valid) {
				return validRes;
			}
		}
		return new ValidationResult(true);
	}

}

export {DataArray};
