import {DataLeaf} from "../../index";

class GroupIdentification extends DataLeaf<string> {
    protected validityArray: Array<(value: string) => boolean> = [
        DataLeaf.isAlphaNumeric,
        DataLeaf.notEmpty,
    ];
}

export {GroupIdentification};
