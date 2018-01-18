import {DataLeaf} from "../../index";

class InsuranceIdentifcation extends DataLeaf<string> {
    protected validityArray: Array<(value: string) => boolean> = [
        DataLeaf.isAlphaNumeric,
        DataLeaf.notEmpty,
    ];
}

export {InsuranceIdentifcation};
