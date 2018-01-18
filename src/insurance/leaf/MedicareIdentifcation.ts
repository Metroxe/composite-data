import {DataLeaf} from "../../index";

class MedicareIdentification extends DataLeaf<string> {
    protected validityArray: Array<(value: string) => boolean> = [
        DataLeaf.isAlphaNumeric,
        DataLeaf.notEmpty,
    ];
}

export {MedicareIdentification};
