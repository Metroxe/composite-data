import {GenericString} from "../";

class ZipCode extends GenericString {

    protected validityArray: Array<(value: string) => boolean> = [
        GenericString.notEmpty,
        ZipCode.checkZip,
    ].concat(super.getParentValidityArray());

    private static zipRegex: RegExp = /^\d{5}(-\d{4})?$/;

    private static checkZip(value: string): boolean {
        return ZipCode.zipRegex.test(value);
    }
}

export {ZipCode};
