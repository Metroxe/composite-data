import {HealthInsurance, IHealthInsuranceMap} from "./HealthInsurance";
import {InsuranceIdentification} from "../leaf/InsuranceIdentification";

class OtherHealthInsurance extends HealthInsurance<IOtherHealthInsuranceMap> {}

interface IOtherHealthInsuranceMap extends IHealthInsuranceMap {
    insuranceIdentification: InsuranceIdentification;
}

export {IOtherHealthInsuranceMap, OtherHealthInsurance};
