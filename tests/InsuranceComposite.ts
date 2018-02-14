import {expect} from "chai";
import {
    CarrierName,
    PrimaryCareNetwork,
    GroupIdentification,
    MedicareIdentification,
    InsuranceIdentification,
    BenefitIdentificationNumber,
    IPrivateHealthInsuranceMap,
    IMedicaidMap,
    IMedicareAdvantageMap,
    IMedicareMap,
    IOtherHealthInsuranceMap,
    ITricareMap,
    PrivateHealthInsurance,
    Medicaid,
    MedicareAdvantage,
    Medicare,
    OtherHealthInsurance,
    Tricare,
} from "../dist";

describe("Check Composite design of insurance", () => {
    const carrierName: CarrierName = new CarrierName("Generic Insurance Company Name");
    const primaryCareNetwork: PrimaryCareNetwork = new PrimaryCareNetwork("Generic PCN");
    const groupIdentification: GroupIdentification = new GroupIdentification("Generic Group Identifcation");
    const medicareIdentification: MedicareIdentification = new MedicareIdentification("Generic Medicare Identification");
    const insuranceIdentification: InsuranceIdentification = new InsuranceIdentification("Generic Insurance Identification");
    const benefitIdentificationNumber: BenefitIdentificationNumber = new BenefitIdentificationNumber("12341");

    const medicaidMap: IMedicaidMap = {
        carrierName,
        primaryCareNetwork,
        benefitIdentificationNumber,
        groupIdentification,
        insuranceIdentification,
    };
    const privateHealthInsuranceMap: IPrivateHealthInsuranceMap = {
        carrierName,
        primaryCareNetwork,
        benefitIdentificationNumber,
        groupIdentification,
        insuranceIdentification,
    };
    const medicareMap: IMedicareMap = {
        carrierName,
        medicareIdentification,
    };
    const medicareAdvantageMap: IMedicareAdvantageMap = {
        ...privateHealthInsuranceMap,
        ...medicareMap,
    };
    const otherHealthInsuranceMap: IOtherHealthInsuranceMap = {
        insuranceIdentification,
        carrierName,
    };
    const tricareMap: ITricareMap = {
        primaryCareNetwork,
        benefitIdentificationNumber,
        groupIdentification,
        insuranceIdentification,
        carrierName,
    };

    const privateHealthInsurance: Medicaid = new PrivateHealthInsurance(privateHealthInsuranceMap);
    const medicaid: Medicaid = new Medicaid(medicaidMap);
    const medicareAdvantage: MedicareAdvantage = new MedicareAdvantage(medicareAdvantageMap);
    const medicare: Medicare = new Medicare(medicareMap);
    const otherHealthInsurance: OtherHealthInsurance = new OtherHealthInsurance(otherHealthInsuranceMap);
    const tricare: Tricare = new Tricare(tricareMap);

    it("Check test suite default values for data leaves", () => {
        expect(carrierName.isValid()).to.be.true;
        expect(primaryCareNetwork.isValid()).to.be.true;
        expect(groupIdentification.isValid()).to.be.true;
        expect(medicareIdentification.isValid()).to.be.true;
        expect(insuranceIdentification.isValid()).to.be.true;
        expect(benefitIdentificationNumber.isValid()).to.be.true;
    });

    it("Composite Tests", () => {
        expect(privateHealthInsurance.isValid()).to.be.true;
        expect(medicaid.isValid()).to.be.true;
        expect(medicareAdvantage.isValid()).to.be.true;
        expect(medicare.isValid()).to.be.true;
        expect(otherHealthInsurance.isValid()).to.be.true;
        expect(tricare.isValid()).to.be.true;
    });
});
