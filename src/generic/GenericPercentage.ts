import {DataLeaf} from "../model";

class GenericPercentage extends DataLeaf<string> {

	protected validityArray: Array<(value: string) => boolean
}