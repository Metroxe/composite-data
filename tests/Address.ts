import {expect} from "chai";
import {Address} from "../dist";

describe('Tests validity of address', () => {
    let address = new Address();

    it('Checking the isValid of address', () => {
        expect(address.isValid("seattle"), "should return true").to.be.true;
        expect(address.isValid("#123 888888 cool road"), "should return true").to.be.true;
        expect(address.isValid("#123-888888 No.7 Rd"), "should return true").to.be.true;
    });

    it('Checking the isValid of incorrect address', () => {
        expect(address.isValid("@@"), "should return false").to.be.false;
        expect(address.isValid("123 #@"), "should return false").to.be.false;
        expect(address.isValid("qwerty1234.%^&"), "should return false").to.be.false;
    });

});