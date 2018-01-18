import {BenefitIdentificationNumber} from "../leaf/BenefitIdentificationNumber";
import {GroupIdentification} from "../leaf/GroupIdentification";
import {InsuranceIdentifcation} from "../leaf/InsuranceIdentification";
import {HealthInsurance, IHealthInsuranceMap} from "./HealthInsurance";
import {PrimaryCareNetwork} from "../leaf/PrimaryCareNetwork";

class Medicaid extends HealthInsurance<IMedicaidMap> {}

interface IMedicaidMap extends IHealthInsuranceMap {
    primaryCareNetwork: PrimaryCareNetwork;
    benefitIdentificationNumber: BenefitIdentificationNumber;
    groupIdentification: GroupIdentification;
    insuranceIdentification: InsuranceIdentifcation;
}

export {IMedicaidMap, Medicaid};
