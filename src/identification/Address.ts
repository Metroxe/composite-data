import {DataLeaf} from "../model";

class Address extends DataLeaf<string> {

    protected validityArray: Array<(value: string) => boolean> = [
        DataLeaf.notEmpty,
        Address.checkAddress,
    ];

    private static addressRegex: RegExp = /^[A-Za-z0-9# .-]+$/;

    private static checkAddress(value: string): boolean {
        return Address.addressRegex.test(value);
    }
}

export {Address};
