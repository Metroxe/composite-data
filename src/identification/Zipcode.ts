import {DataLeaf} from "../model";

class ZipCode extends DataLeaf<string>{
    protected validityArray : Array<(value : string) => boolean> = [
        DataLeaf.notEmpty,
        ZipCode.checkZip
    ];

    private static checkZip(value : string) : boolean{
        let zipRegex = /^\d{5}(-\d{4})?$/;

        return zipRegex.test(value)
    }
}

export {ZipCode}