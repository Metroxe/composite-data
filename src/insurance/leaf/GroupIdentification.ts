import {DataLeaf} from "../../index";

class GroupIdentification extends DataLeaf<string> {
    protected validityArray: Array<(value: string) => boolean> = [
        DataLeaf.isAlphaNumeric,
        DataLeaf.notEmpty,
        GroupIdentification.minimumLength,
    ];

    private static minimumLength(value: string): boolean {
        return (value.length >= 2);
    }
}

export {GroupIdentification};
