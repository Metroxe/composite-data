import {DataLeaf, IValidationResult, ValidationResult} from "../model";

class GenericDate extends DataLeaf<Date> {

    protected validityArray: Array<(value: Date) => IValidationResult> = [
        GenericDate.isDate,
    ];

    private static isDate(value: Date): IValidationResult {
        return new ValidationResult(Object.prototype.toString.call(value) === "[object Date]" || value instanceof Date);
    }

}

export {GenericDate};
