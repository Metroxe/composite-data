import {DataLeaf} from "../";

abstract class Male extends DataLeaf<boolean> {
    protected validityArray : Array<(value : boolean) => boolean> = [
        DataLeaf.booleanCheck
    ];
}

export {Male}