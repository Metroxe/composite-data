import {GenericString} from "../../";

class OtherNotes extends GenericString {
    protected validityArray: Array<(value: string) => boolean> = [
        GenericString.notEmpty,
    ];
}

export {OtherNotes};