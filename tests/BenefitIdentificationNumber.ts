import {expect} from "chai";
import {BenefitIdentificationNumber} from "../dist";

describe("Test validity of bin", () => {
    const bin: BenefitIdentificationNumber = new BenefitIdentificationNumber();

    it("Checking the isValid of bin", () => {
        expect(bin.isValid("1234"), "should return true").to.be.true;
        expect(bin.isValid("12345"), "should return true").to.be.true;
        expect(bin.isValid("123456"), "should return true").to.be.true;
    });

    it("Checking the isValid of incorrect bin", () => {
        expect(bin.isValid(""), "should return false").to.be.false;
        expect(bin.isValid("123"), "should return false").to.be.false;
        expect(bin.isValid("1234567"), "should return false").to.be.false;
    });

});