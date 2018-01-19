import {DataLeaf} from "../../index";

class InsuranceIdentification extends DataLeaf<string> {
    protected validityArray: Array<(value: string) => boolean> = [
        DataLeaf.isAlphaNumeric,
        DataLeaf.notEmpty,
        InsuranceIdentification.minimumLength,
    ];

    private static minimumLength(value: string): boolean {
        return (value.length >= 2);
    }
}

export {InsuranceIdentification};
