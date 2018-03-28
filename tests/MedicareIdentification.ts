import {expect} from "chai";
import {MedicareIdentification} from "../dist";

describe("Tests validity of medicare identification", () => {
	const medicareId: MedicareIdentification = new MedicareIdentification();

	it("Checking the isValid of medicare identification", () => {
		expect(medicareId.isValid("aaaa"), "should return true").to.be.true;
		expect(medicareId.isValid("1111"), "should return true").to.be.true;
		expect(medicareId.isValid("a1a1"), "should return true").to.be.true;
	});

	it("Checking the isValid of incorrect medicare information", () => {
		expect(medicareId.isValid(""), "should return false").to.be.false;
		expect(medicareId.isValid(" "), "should return false").to.be.false;
		expect(medicareId.isValid("a"), "should return false").to.be.false;
		expect(medicareId.isValid("1"), "should return false").to.be.false;
		expect(medicareId.isValid("a1#"), "should return false").to.be.false;
	});
});
