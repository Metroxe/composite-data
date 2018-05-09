import {DataLeaf, IValidationResult, ValidationResult} from "../model";

class GenericBoolean extends DataLeaf<boolean> {

    protected validityArray: Array<(value: boolean) => IValidationResult> = [
        GenericBoolean.isBoolean,
    ];

    private static isBoolean(value: boolean): IValidationResult {
        return new ValidationResult(typeof value === "boolean");
    }

}

export {GenericBoolean};
