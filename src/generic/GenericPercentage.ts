import {DataLeaf, IValidationResult, ValidationResult} from "../model";

class GenericPercentage extends DataLeaf<number> {

	protected validityArray: Array<(value: number) => ValidationResult> = [
		GenericPercentage.isPercentage,
	];

	private static isPercentage(value: number): ValidationResult {
		return new ValidationResult(value >= 0 && value <= 1);
	}
}

export {GenericPercentage};
