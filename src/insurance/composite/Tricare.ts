import {HealthInsurance, IHealthInsuranceMap} from "./HealthInsurance";
import {BenefitIdentificationNumber} from "../leaf/BenefitIdentificationNumber";
import {GroupIdentification} from "../leaf/GroupIdentification";
import {InsuranceIdentification} from "../leaf/InsuranceIdentification";
import {PrimaryCareNetwork} from "../leaf/PrimaryCareNetwork";

class Tricare extends HealthInsurance<ITricareMap> {}

interface ITricareMap extends IHealthInsuranceMap {
    primaryCareNetwork: PrimaryCareNetwork;
    benefitIdentificationNumber: BenefitIdentificationNumber;
    groupIdentification: GroupIdentification;
    insuranceIdentification: InsuranceIdentification;
}

export {ITricareMap, Tricare};
