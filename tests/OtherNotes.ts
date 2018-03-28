import {expect} from "chai";
import {OtherNotes} from "../dist";

describe("Tests validity of other notes", () => {
	const otherNotes: OtherNotes = new OtherNotes();

	it("Checking the isValid of other notes", () => {
		expect(otherNotes.isValid("aaaa"), "should return true").to.be.true;
		expect(otherNotes.isValid("1"), "should return true").to.be.true;
		expect(otherNotes.isValid("@"), "should return true").to.be.true;
		expect(otherNotes.isValid("qwerty123@#$"), "should return true").to.be.true;
	});

	it("Checking the isValid of incorrect other notes", () => {
		expect(otherNotes.isValid(""), "should return false").to.be.false;
	});
});
