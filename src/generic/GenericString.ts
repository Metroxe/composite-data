import {DataLeaf, IValidationResult, ValidationResult} from "../model";

class GenericString extends DataLeaf<string> {

    protected validityArray: Array<(value: string) => IValidationResult> = [
        GenericString.isString,
    ];

    private static spaceCharCode: number = " ".charCodeAt(0);

    protected static notEmpty(value: string): IValidationResult {
        return new ValidationResult(value.length > 0, "This field cannot be empty.");
    }

    protected static noWhiteSpace(value: string): IValidationResult {
        return new ValidationResult(!(value.indexOf(" ") > 0), "This field cannot contain spaces.");
    }

    protected static isAlphaNumericWithSpaces(value: string): IValidationResult {
        let code: number;
        let i: number;
        let len: number;

        for (i = 0, len = value.length; i < len; i++) {
            code = value.charCodeAt(i);
            if (!(code > 47 && code < 58) && // numeric (0-9)
                !(code > 64 && code < 91) && // upper alpha (A-Z)
                !(code > 96 && code < 123) && // lower alpha (a-z)
                !(code === GenericString.spaceCharCode)) {
                return new ValidationResult(false, "This field cannot contain special characters.");
            }
        }
        return new ValidationResult(true);
    }

    private static isString(value: string): IValidationResult {
        return new ValidationResult(typeof value === "string");
    }

}

export {GenericString};
