import {expect} from "chai";
import {Salutation} from "../dist";

describe("Tests validity of salutation", () => {
    const salutation: Salutation = new Salutation();

    it("Checking the isValid of salutation", () => {
        expect(salutation.set("MR"), "should return true").to.be.true;
        expect(salutation.set("MRS"), "should return true").to.be.true;
        expect(salutation.set("MS"), "should return true").to.be.true;
    });

    it("Checking the isValid of incorrect salutation", () => {
        expect(salutation.set("mr"), "should return false").to.be.false;
        expect(salutation.set("mrs"), "should return false").to.be.false;
        expect(salutation.set("ms"), "should return false").to.be.false;
        expect(salutation.set("M8"), "should return false").to.be.false;
        expect(salutation.set("M&"), "should return false").to.be.false;
        expect(salutation.set("M&M"), "should return false").to.be.false;
    });

    it("Checking if male or female based on salutation", () => {
        salutation.set("MR");
        expect(salutation.isMale(), "should return true").to.be.true;
    });

});
