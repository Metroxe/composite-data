import {DataComposite, GenericString} from "../index";
import {IDataMap} from "../model";
import {Address} from "./Address";
import {State} from "./State";
import {ZipCode} from "./Zipcode";
import {Phone} from "./Phone";

class Location extends DataComposite<ILocationMap> {

	protected validityArray: Array<(value: ILocationMap) => boolean> = [
		Location.matchZip,
	].concat(super.getParentValidityArray());

	private static matchZip(value: ILocationMap): boolean {
		return true; // TODO
	}
}

interface ILocationMap extends IDataMap {
	address1: Address;
	address2?: Address;
	country: GenericString;
	state: State;
	zip: ZipCode;
	phoneNumber?: Phone;
}

export {ILocationMap, Location};
