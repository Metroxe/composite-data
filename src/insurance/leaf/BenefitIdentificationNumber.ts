import {GenericString} from "../../";

class BenefitIdentificationNumber extends GenericString {
    protected validityArray: Array<(value: string) => boolean> = [
        GenericString.notEmpty,
        BenefitIdentificationNumber.properLength,
    ].concat(super.getParentValidityArray());

    private static binRegex: RegExp = /^[0-9]{4,6}$/;

    private static properLength(value: string): boolean {
        // return (value.length >= 4 && value.length <= 6);
        return BenefitIdentificationNumber.binRegex.test(value);
    }
}

export {BenefitIdentificationNumber};
