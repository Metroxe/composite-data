import {DataLeaf} from "../model/DataLeaf";

class City extends DataLeaf<string>{
    protected validityArray : Array<(value : string) => boolean> = [
        DataLeaf.notEmpty,
        City.checkCity
    ];

    private static checkCity(value : string) : boolean{
        let cityRegex = /^[a-zA-Z\s-]+$/;

        return cityRegex.test(value)
    }
}

export {City}