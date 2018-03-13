import {DataLeaf, IData} from "../model";

class DataArray extends DataLeaf<IData[]> {

	protected validityArray: Array<(value: IData[]) => boolean> = [
		DataArray.isArray,
		DataArray.checkValidityOfItemsInArray,
	];

	private static isArray(value: IData[]): boolean {
		return (value.constructor === Array);
	}

	private static checkValidityOfItemsInArray(value: IData[]): boolean {
		let data: IData;
		for (data of value) {
			if (!data.isValid()) {
				return false;
			}
		}
		return true;
	}
}

export {DataArray};
