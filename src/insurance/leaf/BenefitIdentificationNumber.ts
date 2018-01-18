import {DataLeaf} from "../../index";

class BenefitIdentificationNumber extends DataLeaf<string> {
    protected validityArray: Array<(value: string) => boolean> = [
        DataLeaf.isAlphaNumeric,
        DataLeaf.notEmpty,
    ];
}

export {BenefitIdentificationNumber};
