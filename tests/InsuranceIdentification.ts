import {expect} from "chai";
import {InsuranceIdentification} from "../dist";

describe("Tests validity of insurance identification", () => {
	const insuranceId: InsuranceIdentification = new InsuranceIdentification();

	it("Checking the isValid of insurance identification", () => {
		expect(insuranceId.isValid("aa"), "should return true").to.be.true;
		expect(insuranceId.isValid("11"), "should return true").to.be.true;
		expect(insuranceId.isValid("a1"), "should return true").to.be.true;
	});

	it("Checking the isValid of incorrect insurance identification", () => {
		expect(insuranceId.isValid(""), "should return false").to.be.false;
		expect(insuranceId.isValid(" "), "should return false").to.be.false;
		expect(insuranceId.isValid("a"), "should return false").to.be.false;
		expect(insuranceId.isValid("1"), "should return false").to.be.false;
		expect(insuranceId.isValid("a1#"), "should return false").to.be.false;
	});
});
