import {HealthInsurance, IHealthInsuranceMap} from "./HealthInsurance";
import {BenefitIdentificationNumber} from "../leaf/BenefitIdentificationNumber";
import {GroupIdentification} from "../leaf/GroupIdentification";
import {InsuranceIdentifcation} from "../leaf/InsuranceIdentification";
import {PrimaryCareNetwork} from "../leaf/PrimaryCareNetwork";

class Tricare extends HealthInsurance<ITricareMap> {}

interface ITricareMap extends IHealthInsuranceMap {
    primaryCareNetwork: PrimaryCareNetwork;
    benefitIdentificationNumber: BenefitIdentificationNumber;
    groupIdentification: GroupIdentification;
    insuranceIdentification: InsuranceIdentifcation;
}

export {ITricareMap, Tricare};
