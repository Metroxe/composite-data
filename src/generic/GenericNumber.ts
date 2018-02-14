import {DataLeaf} from "../model";

class GenericNumber extends DataLeaf<number> {

    protected validityArray: Array<(value: number) => boolean> = [
        GenericNumber.isNumber,
    ];

    private static isNumber(value: number): boolean {
        return (typeof value === "number");
    }

}

export {GenericNumber};
