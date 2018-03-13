import {DataComposite, GenericString, Location, Phone} from "../../index";
import {IDataMap} from "../../model";

class RxToMeDoctor extends DataComposite<IRxToMeDoctorMap> {}

interface IRxToMeDoctorMap extends IDataMap {
	name: GenericString;
	location: Location;
}

export {IRxToMeDoctorMap, RxToMeDoctor};
