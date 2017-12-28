import {expect} from "chai";
import {States} from "../dist";

describe('Tests validity of states', () => {
    let states = new States();

    it('Checking the isValid of states', () => {
        expect(states.isValid("AK"), "should return true").to.be.true;
        expect(states.isValid("CA"), "should return true").to.be.true;
        expect(states.isValid("MN"), "should return true").to.be.true;
        expect(states.isValid("mn"), "should return true").to.be.true;
    });

    it('Checking the isValid of incorrect states', () => {
        expect(states.isValid("mretr"), "should return false").to.be.false;
        expect(states.isValid("ERFDSFSDF"), "should return false").to.be.false;
        expect(states.isValid("@@@@"), "should return false").to.be.false;
        expect(states.isValid("99"), "should return false").to.be.false;
        expect(states.isValid("A1"), "should return false").to.be.false;
    });

});