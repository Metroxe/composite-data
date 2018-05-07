import {IValidationResult} from "./IValidationResult";

class ValidationResult implements IValidationResult {
    public valid: boolean;
    public errorMsg?: string;

    constructor(valid: boolean, errorMsg?: string) {
        this.valid = valid;
        this.errorMsg = errorMsg ? errorMsg : null;
    }
}

export {ValidationResult};