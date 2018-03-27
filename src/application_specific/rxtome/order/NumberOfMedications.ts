import {GenericString} from "../../../generic/GenericString";

class NumberOfMedications extends GenericString {

	protected validityArray: Array<(value: string) => boolean> = [
		GenericString.notEmpty,
		NumberOfMedications.checkNumberOfMedications,
	].concat(super.getParentValidityArray());

	private static numberOfMedicationsRegex: RegExp = /^(10|[0-9])$/;

	public static checkTenPlus(value: string): boolean {
		return value === "10+";
	}

	private static checkNumberOfMedications(value: string): boolean {
		return (NumberOfMedications.numberOfMedicationsRegex.test(value) || NumberOfMedications.checkTenPlus(value));
	}
}

export {NumberOfMedications};
