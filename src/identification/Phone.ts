import {DataLeaf} from "../model/DataLeaf";

class Phone extends DataLeaf<string>{
    protected validityArray : Array<(value : string) => boolean> = [
        DataLeaf.notEmpty,
        Phone.convertToTenDigits
    ];

    private static convertToTenDigits(value : string) : boolean{
        let phoneNumberRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

        return phoneNumberRegex.test(value);
    }
}

export {Phone}