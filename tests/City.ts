import {expect} from "chai";
import {City} from "../dist";

describe("Tests validity of city", () => {
    const city: City = new City();

    it("Checking the isValid of city", () => {
        expect(city.isValid("seattle"), "should return true").to.be.true;
        expect(city.isValid("SEATTLE"), "should return true").to.be.true;
        expect(city.isValid("S"), "should return true").to.be.true;
        expect(city.isValid("Winchester-on-the-Severn"), "should return true").to.be.true;
        expect(city.isValid("Winchester on the Severn"), "should return true").to.be.true;
    });

    it("Checking the isValid of incorrect city", () => {
        expect(city.isValid("1234567"), "should return false").to.be.false;
        expect(city.isValid("@#$"), "should return false").to.be.false;
        expect(city.isValid("123 @#$"), "should return false").to.be.false;
        expect(city.isValid("city.name"), "should return false").to.be.false;
    });

});
