import {DataLeaf} from "../model";

class GenericPercentage extends DataLeaf<number> {

	protected validityArray: Array<(value: number) => boolean> = [
		GenericPercentage.isPercentage,
	];

	private static isPercentage(value: number): boolean {
		return (value >= 0 && value <= 1);
	}
}

export {GenericPercentage};
