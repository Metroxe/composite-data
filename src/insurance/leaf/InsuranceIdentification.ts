import {GenericString} from "../../";

class InsuranceIdentification extends GenericString {
    protected validityArray: Array<(value: string) => boolean> = [
        GenericString.isAlphaNumeric,
        GenericString.notEmpty,
        InsuranceIdentification.minimumLength,
    ].concat(this.getParentValidityArray());

    private static minimumLength(value: string): boolean {
        return (value.length >= 2);
    }
}

export {InsuranceIdentification};
