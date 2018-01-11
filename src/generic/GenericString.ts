import {DataLeaf} from "../model";

class GenericString extends DataLeaf<string> {
    validityArray: Array<(value: string) => boolean> = [
        GenericString.isString
    ];

    private static isString(value: string) {
        return (typeof value === "string")
    }

}

export {GenericString}