import {DataLeaf} from "../../index";

class PrimaryCareNetwork extends DataLeaf<string> {
    protected validityArray: Array<(value: string) => boolean> = [
        DataLeaf.isAlphaNumeric,
        DataLeaf.notEmpty,
    ];
}

export {PrimaryCareNetwork};
