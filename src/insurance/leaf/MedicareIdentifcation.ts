import {GenericString} from "../../";

class MedicareIdentification extends GenericString {
    protected validityArray: Array<(value: string) => boolean> = [
        GenericString.isAlphaNumeric,
        GenericString.notEmpty,
        MedicareIdentification.properLength,
    ].concat(super.getParentValidityArray());

    private static properLength(value: string): boolean {
        return value.length >= 4;
    }
}

export {MedicareIdentification};
