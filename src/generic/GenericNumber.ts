import {DataLeaf, IValidationResult, ValidationResult} from "../model";

class GenericNumber extends DataLeaf<number> {

    protected validityArray: Array<(value: number) => IValidationResult> = [
        GenericNumber.isNumber,
    ];

    private static isNumber(value: number): IValidationResult {
        return new ValidationResult(typeof value === "number");
    }

}

export {GenericNumber};
