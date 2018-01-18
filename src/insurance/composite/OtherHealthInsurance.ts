import {HealthInsurance, IHealthInsuranceMap} from "./HealthInsurance";
import {InsuranceIdentifcation} from "../leaf/InsuranceIdentification";

class OtherHealthInsurance extends HealthInsurance<IOtherHealthInsuranceMap> {}

interface IOtherHealthInsuranceMap extends IHealthInsuranceMap {
    insuranceIdentification: InsuranceIdentifcation;
}

export {IOtherHealthInsuranceMap, OtherHealthInsurance};
