import {BenefitIdentificationNumber} from "../leaf/BenefitIdentificationNumber";
import {GroupIdentification} from "../leaf/GroupIdentification";
import {InsuranceIdentification} from "../leaf/InsuranceIdentification";
import {HealthInsurance, IHealthInsuranceMap} from "./HealthInsurance";
import {PrimaryCareNetwork} from "../leaf/PrimaryCareNetwork";

class PrivateHealthInsurance extends HealthInsurance<IPrivateHealthInsuranceMap> {}

interface IPrivateHealthInsuranceMap extends IHealthInsuranceMap {
    primaryCareNetwork: PrimaryCareNetwork;
    benefitIdentificationNumber: BenefitIdentificationNumber;
    groupIdentification: GroupIdentification;
    insuranceIdentification: InsuranceIdentification;
}

export {IPrivateHealthInsuranceMap, PrivateHealthInsurance};
