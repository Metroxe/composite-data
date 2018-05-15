import {DataLeaf} from "../model";
import {IValidationResult, IValidationResultItem} from "../model/IValidationResult";
import {ValidationResult} from "../model/ValidationResult";

class GenericPromiseValidationTest extends DataLeaf<number> {
    protected validityArray: Array<(value: number) => IValidationResult> = [
        GenericPromiseValidationTest.testValidation,
    ];

    public static testValidation(value: number): IValidationResult {
        const asyncValidRes: IValidationResult = new ValidationResult();
        asyncValidRes.createAsync((f: (res: IValidationResultItem) => void, r: (res: IValidationResultItem) => void): void => {
            if (value === 1) {
                f(new ValidationResult(true).getResult());
            } else {
                r(new ValidationResult(false).getResult());
            }
        });
        return asyncValidRes;
    }
}

export {GenericPromiseValidationTest}