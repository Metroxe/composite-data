import {GenericString} from "../../../generic/GenericString";

class NumberOfMedications extends GenericString {

    protected validityArray: Array<(value: string) => boolean> = [
        NumberOfMedications.checkRange,
        ].concat(super.getParentValidityArray());

    private static numberOfMedicationsRegex: RegExp = /^(10|[0-9])$/;

    private static checkRange(value: string): boolean {
        return NumberOfMedications.numberOfMedicationsRegex.test(value);
    }
}

export {NumberOfMedications};
