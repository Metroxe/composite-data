import {HealthInsurance} from "./HealthInsurance";
import {IMedicareMap} from "./Medicare";
import {IPrivateHealthInsuranceMap} from "./PrivateHealthInsurance";

class MedicareAdvantage extends HealthInsurance<IMedicareAdvantageMap> {}

interface IMedicareAdvantageMap extends IMedicareMap, IPrivateHealthInsuranceMap {}

export {IMedicareAdvantageMap, MedicareAdvantage};
