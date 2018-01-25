import {GenericString} from "../";

class Address extends GenericString {

    protected validityArray: Array<(value: string) => boolean> = [
        GenericString.notEmpty,
        Address.checkAddress,
    ].concat(super.getParentValidityArray());

    private static addressRegex: RegExp = /^[A-Za-z0-9# .-]+$/;

    private static checkAddress(value: string): boolean {
        return Address.addressRegex.test(value);
    }
}

export {Address};
