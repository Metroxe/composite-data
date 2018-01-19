import {expect} from "chai";
import {ZipCode} from "../dist";

describe("Tests validity of zip codes", () => {
    const zipCode: ZipCode = new ZipCode();

    it("Checking the isValid of zip codes", () => {
        expect(zipCode.isValid("12345"), "should return true").to.be.true;
        expect(zipCode.isValid("55555"), "should return true").to.be.true;
        expect(zipCode.isValid("55555-4444"), "should return true").to.be.true;
        expect(zipCode.isValid("90210-1234"), "should return true").to.be.true;
    });

    it("Checking the isValid of incorrect zip codes", () => {
        expect(zipCode.isValid("nope"), "should return false").to.be.false;
        expect(zipCode.isValid("#$%"), "should return false").to.be.false;
        expect(zipCode.isValid("12345-four"), "should return false").to.be.false;
        expect(zipCode.isValid("90210_1234"), "should return false").to.be.false;
    });

});
