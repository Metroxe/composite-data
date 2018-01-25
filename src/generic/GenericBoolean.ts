import {DataLeaf} from "../model";

class GenericBoolean extends DataLeaf<boolean> {

    protected validityArray: Array<(value: boolean) => boolean> = [
        GenericBoolean.isBoolean,
    ];

    private static isBoolean(value: boolean): boolean {
        return (typeof value === "boolean");
    }

}

export {GenericBoolean};
