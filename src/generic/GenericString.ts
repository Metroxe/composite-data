import {DataLeaf} from "../model";

class GenericString extends DataLeaf<string> {

    protected validityArray: Array<(value: string) => boolean> = [
        GenericString.isString,
    ];

    private static isString(value: string): boolean {
        return (typeof value === "string");
    }

}

export {GenericString};
