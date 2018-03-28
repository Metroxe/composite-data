import {DataLeaf} from "../model";

class GenericPercent extends DataLeaf<number> {

	protected validityArray: Array<(value: number) => boolean> = [
		GenericPercent.isPercentage,
	];

	private static isPercentage(value: number): boolean {
		return (value >= 0 && value <= 1);
	}
}

export {GenericPercent};
