import {GenericString} from "../";

class Phone extends GenericString {

    protected validityArray: Array<(value: string) => boolean> = [
        GenericString.notEmpty,
        Phone.convertToTenDigits,
    ].concat(super.getParentValidityArray());

    private static phoneNumberRegex: RegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    private static convertToTenDigits(value: string): boolean {
        return Phone.phoneNumberRegex.test(value);
    }
}

export {Phone};
