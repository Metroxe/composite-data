import {expect} from "chai";
import {CardFront} from "../dist";

describe("Test validity of card front", () => {
    const cardFront: CardFront = new CardFront();

    it("Checking the isValid of card front", () => {
        expect(cardFront.isValid("www.test.co"), "should return true").to.be.true;
        expect(cardFront.isValid("www.test.com"), "should return true").to.be.true;
        expect(cardFront.isValid("www.test.com/extra"), "should return true").to.be.true;
        expect(cardFront.isValid("http://www.test.com"), "should return true").to.be.true;
        expect(cardFront.isValid("https://www.test.com"), "should return true").to.be.true;
        expect(cardFront.isValid("http://test.com"), "should return true").to.be.true;
        expect(cardFront.isValid("https://test.com"), "should return true").to.be.true;
        expect(cardFront.isValid("http://test.com/extra"), "should return true").to.be.true;
        expect(cardFront.isValid("https://test.com/extra"), "should return true").to.be.true;
    });

    it("Checking the isValid of incorrect card front", () => {
        expect(cardFront.isValid(""), "should return false").to.be.false;
        expect(cardFront.isValid("http://test"), "should return false").to.be.false;
        expect(cardFront.isValid("https://test"), "should return false").to.be.false;
        expect(cardFront.isValid("not-a-link"), "should return false").to.be.false;
        expect(cardFront.isValid("x.y"), "should return false").to.be.false;
        expect(cardFront.isValid("x.y/z"), "should return false").to.be.false;
    });
});