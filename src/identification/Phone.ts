import {DataLeaf} from "../model";

class Phone extends DataLeaf<string> {

    protected validityArray: Array<(value: string) => boolean> = [
        DataLeaf.notEmpty,
        Phone.convertToTenDigits,
    ];
    private static phoneNumberRegex: RegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    private static convertToTenDigits(value: string): boolean {
        return Phone.phoneNumberRegex.test(value);
    }
}

export {Phone};
