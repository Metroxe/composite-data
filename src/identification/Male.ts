import {DataLeaf} from "../";

class Male extends DataLeaf<boolean> {
    protected validityArray : Array<(value : boolean) => boolean> = [
        DataLeaf.booleanCheck
    ];
}

export {Male}