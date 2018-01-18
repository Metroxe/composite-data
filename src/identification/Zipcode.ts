import {DataLeaf} from "../model";

class ZipCode extends DataLeaf<string> {

    protected validityArray: Array<(value: string) => boolean> = [
        DataLeaf.notEmpty,
        ZipCode.checkZip,
    ];
    private static zipRegex: RegExp = /^\d{5}(-\d{4})?$/;

    private static checkZip(value: string): boolean {
        return ZipCode.zipRegex.test(value);
    }
}

export {ZipCode};
