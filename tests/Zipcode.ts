import {expect} from "chai";
import {Zipcode} from "../dist";

describe('Tests validity of zip codes', () => {
    let zipcode = new Zipcode();

    it('Checking the isValid of zip codes', () => {
        expect(zipcode.isValid("12345"), "should return true").to.be.true;
        expect(zipcode.isValid("55555"), "should return true").to.be.true;
        expect(zipcode.isValid("55555-4444"), "should return true").to.be.true;
        expect(zipcode.isValid("90210-1234"), "should return true").to.be.true;
    });

    it('Checking the isValid of incorrect zip codes', () => {
        expect(zipcode.isValid("nope"), "should return false").to.be.false;
        expect(zipcode.isValid("#$%"), "should return false").to.be.false;
        expect(zipcode.isValid("12345-four"), "should return false").to.be.false;
        expect(zipcode.isValid("90210_1234"), "should return false").to.be.false;
    });

});