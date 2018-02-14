import {GenericString} from "../../";

class CarrierName extends GenericString {
    protected validityArray: Array<(value: string) => boolean> = [
        GenericString.isAlphaNumericWithSpaces,
        GenericString.notEmpty,
        CarrierName.validLength,
    ].concat(super.getParentValidityArray());

    private static validLength(value: string): boolean {
        return (value.length > 2);
    }
}

export {CarrierName};
