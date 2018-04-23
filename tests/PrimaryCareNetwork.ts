import {expect} from "chai";
import {PrimaryCareNetwork} from "../dist";

describe("Tests validity of PCN", () => {
	const pcn: PrimaryCareNetwork = new PrimaryCareNetwork();

	it("Checking the isValid of primary care network", () => {
		expect(pcn.isValid("aaaa"), "should return true").to.be.true;
		expect(pcn.isValid("1111"), "should return true").to.be.true;
		expect(pcn.isValid("a1a1"), "should return true").to.be.true;
	});

	it("Checking the isValid of incorrect primary care network", () => {
		expect(pcn.isValid(""), "should return false").to.be.false;
		expect(pcn.isValid(" "), "should return false").to.be.false;
		expect(pcn.isValid("a"), "should return false").to.be.false;
		expect(pcn.isValid("1"), "should return false").to.be.false;
		expect(pcn.isValid("aaaa###"), "should return false").to.be.false;
		expect(pcn.isValid("#####"), "should return false").to.be.false;
	});
});
