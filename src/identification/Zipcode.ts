import {DataLeaf} from "../model/DataLeaf";

class Zipcode extends DataLeaf<string>{
    protected validityArray : Array<(value : string) => boolean> = [
        DataLeaf.notEmpty,
        Zipcode.checkZip
    ];

    private static checkZip(value : string) : boolean{
        let zipRegex = /^\d{5}(-\d{4})?$/;

        return zipRegex.test(value)
    }
}

export {Zipcode}