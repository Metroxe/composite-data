import {DataLeaf} from "../../index";

class BenefitIdentificationNumber extends DataLeaf<string> {
    protected validityArray: Array<(value: string) => boolean> = [
        DataLeaf.isAlphaNumeric,
        DataLeaf.notEmpty,
        BenefitIdentificationNumber.properLength,
    ];

    private static properLength(value: string): boolean {
        return (value.length >= 4 && value.length <= 6);
    }
}

export {BenefitIdentificationNumber};
