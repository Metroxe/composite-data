import {expect} from "chai";
import {Salutation} from "../dist";

describe('Tests validity of salutation', () => {
    let salutation = new Salutation();

    it('Checking the isValid of salutation', () => {
        expect(salutation.isValid("MR"), "should return true").to.be.true;
        expect(salutation.isValid("MRS"), "should return true").to.be.true;
        expect(salutation.isValid("MS"), "should return true").to.be.true;
    });

    it('Checking the isValid of incorrect salutation', () => {
        expect(salutation.isValid("mr"), "should return false").to.be.false;
        expect(salutation.isValid("mrs"), "should return false").to.be.false;
        expect(salutation.isValid("ms"), "should return false").to.be.false;
        expect(salutation.isValid("M8"), "should return false").to.be.false;
        expect(salutation.isValid("M&"), "should return false").to.be.false;
        expect(salutation.isValid("M&M"), "should return false").to.be.false;
    });

    it('Checking if male or female based on salutation', () => {
        salutation.set("MR");
        expect(salutation.isMale(), "should return true").to.be.true;
    });

});