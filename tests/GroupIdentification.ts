import {expect} from "chai";
import {GroupIdentification} from "../dist";

describe("Tests validity of group identification", () => {
	const groupId: GroupIdentification = new GroupIdentification();

	it("Checking the isValid of group identification", () => {
		expect(groupId.isValid("123"), "should return true").to.be.true;
		expect(groupId.isValid("a123"), "should return true").to.be.true;
		expect(groupId.isValid("aaaa"), "should return true").to.be.true;
	});

	it("Checking the isValid of incorrect group identification", () => {
		expect(groupId.isValid(""), "should return false").to.be.false;
		expect(groupId.isValid(" "), "should return false").to.be.false;
		expect(groupId.isValid("1"), "should return false").to.be.false;
		expect(groupId.isValid("1"), "should return false").to.be.false;
		expect(groupId.isValid("##"), "should return false").to.be.false;
		expect(groupId.isValid("aa#"), "should return false").to.be.false;
		expect(groupId.isValid("11#"), "should return false").to.be.false;
	});
});
