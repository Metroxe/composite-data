import {DataLeaf} from "../../index";

class MedicareIdentification extends DataLeaf<string> {
    protected validityArray: Array<(value: string) => boolean> = [
        DataLeaf.isAlphaNumeric,
        DataLeaf.notEmpty,
        MedicareIdentification.properLength,
    ];

    private static properLength(value: string): boolean {
        return value.length >= 4;
    }
}

export {MedicareIdentification};
