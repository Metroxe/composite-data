import {GenericString} from "../";

class City extends GenericString {

    protected validityArray: Array<(value: string) => boolean> = [
        GenericString.notEmpty,
        City.checkCity,
    ].concat(super.getParentValidityArray());

    private static cityRegex: RegExp = /^[a-zA-Z\s-]+$/;

    private static checkCity(value: string): boolean {
        return City.cityRegex.test(value);
    }
}

export {City};
