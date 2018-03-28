import {expect} from "chai";
import {GenericPercent} from "../dist";

describe("Generic Percent Tests", () => {
	const genericPercent: GenericPercent = new GenericPercent();

	it("Pass on proper percents", () => {
		expect(genericPercent.isValid(0), "should return true").to.be.true;
		expect(genericPercent.isValid(1), "should return true").to.be.true;
		expect(genericPercent.isValid(0.5), "should return true").to.be.true;
		expect(genericPercent.isValid(0.25), "should return true").to.be.true;
	});

	it("Fail in improper percents", () => {
		expect(genericPercent.isValid(2), "should return false").to.be.false;
		expect(genericPercent.isValid(-2), "should return false").to.be.false;
	});
});
