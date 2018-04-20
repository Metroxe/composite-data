import {DataComposite, GenericString, Location, Phone} from "../../index";
import {IDataMap} from "../../model";

class RxToMePharmacy extends DataComposite<IRxToMePharmacyMap> {}

interface IRxToMePharmacyMap extends IDataMap {
	id: GenericString;
	name: GenericString;
	location: Location;
}

export {IRxToMePharmacyMap, RxToMePharmacy};
