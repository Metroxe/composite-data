import {expect} from "chai";
import {CardBack} from "../dist";

describe("Test validity of card front", () => {
	const cardBack: CardBack = new CardBack();

	it("Checking the isValid of card front", () => {
		expect(cardBack.isValid("www.test.co"), "should return true").to.be.true;
		expect(cardBack.isValid("www.test.com"), "should return true").to.be.true;
		expect(cardBack.isValid("www.test.com/extra"), "should return true").to.be.true;
		expect(cardBack.isValid("http://www.test.com"), "should return true").to.be.true;
		expect(cardBack.isValid("https://www.test.com"), "should return true").to.be.true;
		expect(cardBack.isValid("http://test.com"), "should return true").to.be.true;
		expect(cardBack.isValid("https://test.com"), "should return true").to.be.true;
		expect(cardBack.isValid("http://test.com/extra"), "should return true").to.be.true;
		expect(cardBack.isValid("https://test.com/extra"), "should return true").to.be.true;
	});

	it("Checking the isValid of incorrect card front", () => {
		expect(cardBack.isValid(""), "should return false").to.be.false;
		expect(cardBack.isValid("http://test"), "should return false").to.be.false;
		expect(cardBack.isValid("https://test"), "should return false").to.be.false;
		expect(cardBack.isValid("not-a-link"), "should return false").to.be.false;
		expect(cardBack.isValid("x.y"), "should return false").to.be.false;
		expect(cardBack.isValid("x.y/z"), "should return false").to.be.false;
	});
});
