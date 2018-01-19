import {DataLeaf} from "../model";

class City extends DataLeaf<string> {

    protected validityArray: Array<(value: string) => boolean> = [
        DataLeaf.notEmpty,
        City.checkCity,
    ];

    private static cityRegex: RegExp = /^[a-zA-Z\s-]+$/;

    private static checkCity(value: string): boolean {
        return City.cityRegex.test(value);
    }
}

export {City};
