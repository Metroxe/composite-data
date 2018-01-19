import {HealthInsurance, IHealthInsuranceMap} from "./HealthInsurance";
import {MedicareIdentification} from "../leaf/MedicareIdentifcation";

class Medicare extends HealthInsurance<IMedicareMap> {}

interface IMedicareMap extends IHealthInsuranceMap {
    medicareIdentification: MedicareIdentification;
}

export {IMedicareMap, Medicare};
