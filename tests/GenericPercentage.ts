import {expect} from "chai";
import {GenericPercentage} from "../dist";

describe("Generic Percent Tests", () => {
	const genericPercentage: GenericPercentage = new GenericPercentage();

	it("Pass on proper percents", () => {
		expect(genericPercentage.isValid(0), "should return true").to.be.true;
		expect(genericPercentage.isValid(1), "should return true").to.be.true;
		expect(genericPercentage.isValid(0.5), "should return true").to.be.true;
		expect(genericPercentage.isValid(0.25), "should return true").to.be.true;
	});

	it("Fail in improper percents", () => {
		expect(genericPercentage.isValid(2), "should return false").to.be.false;
		expect(genericPercentage.isValid(-2), "should return false").to.be.false;
	});
});
