import {DataLeaf} from "../model/DataLeaf";

class Address extends DataLeaf<string>{
    protected validityArray : Array<(value : string) => boolean> = [
        DataLeaf.notEmpty,
        Address.checkAddress
    ];

    private static checkAddress(value : string) : boolean{
        let addressRegex = /^[A-Za-z0-9# .-]+$/;

        return addressRegex.test(value)
    }
}

export {Address}