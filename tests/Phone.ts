import {expect} from "chai";
import {Phone} from "../dist";

describe("Tests validity of phone number", () => {
    const phone: Phone = new Phone();

    it("Checking the isValid of phone number", () => {
        expect(phone.isValid("6041231234"), "should return true").to.be.true;
        expect(phone.isValid("604-123-1234"), "should return true").to.be.true;
        expect(phone.isValid("604-123-12345"), "should return true").to.be.true;
        expect(phone.isValid("604-123-123456"), "should return true").to.be.true;
        expect(phone.isValid("604 123 1234"), "should return true").to.be.true;
        expect(phone.isValid("604.123.1234"), "should return true").to.be.true;
        expect(phone.isValid("604.123 1234"), "should return true").to.be.true;
        expect(phone.isValid("604.123-1234"), "should return true").to.be.true;
        expect(phone.isValid("604 123-1234"), "should return true").to.be.true;
        expect(phone.isValid("604123-1234"), "should return true").to.be.true;
    });

    it("Checking the isValid of incorrect phone number", () => {
        expect(phone.isValid("1234567"), "should return false").to.be.false;
        expect(phone.isValid("1234567890168678"), "should return false").to.be.false;
        expect(phone.isValid("1234 tea"), "should return false").to.be.false;
        expect(phone.isValid("1234 @#$"), "should return false").to.be.false;
        expect(phone.isValid("phone number"), "should return false").to.be.false;
        expect(phone.isValid("604 123  1234"), "should return false").to.be.false;
    });

});
