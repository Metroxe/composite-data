import {expect} from "chai";
import {OrderType} from "../dist";

describe("Tests validity of order type", () => {
	const orderType: OrderType = new OrderType();

	it("Checking the isValid of order type", () => {
		expect(orderType.set("new_prescription"), "should return true").to.be.true;
		expect(orderType.set("transfer"), "should return true").to.be.true;
		expect(orderType.set("refill"), "should return true").to.be.true;
	});

	it("Checking the isValid of incorrect salutation", () => {
		expect(orderType.set("new"), "should return false").to.be.false;
		expect(orderType.set("new prescription"), "should return false").to.be.false;
		expect(orderType.set("re"), "should return false").to.be.false;
		expect(orderType.set("123"), "should return false").to.be.false;
	});
});
