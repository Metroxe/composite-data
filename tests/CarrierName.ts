import {expect} from "chai";
import {CarrierName} from "../dist";

describe("Tests validity of carrier name", () => {
    const carrierName: CarrierName = new CarrierName();

    it("Checking the isValid of address", () => {
        expect(carrierName.isValid("coolcarrier"), "should return true").to.be.true;
        expect(carrierName.isValid("CoolCarrier"), "should return true").to.be.true;
        expect(carrierName.isValid("cool carrier"), "should return true").to.be.true;
        expect(carrierName.isValid("Cool Carrier"), "should return true").to.be.true;
        expect(carrierName.isValid("carrier1"), "should return true").to.be.true;
        expect(carrierName.isValid("Carrier1"), "should return true").to.be.true;
        expect(carrierName.isValid("carrier 1"), "should return true").to.be.true;
        expect(carrierName.isValid("Carrier 1"), "should return true").to.be.true;
    });

    it("Checking the isValid of incorrect address", () => {
        expect(carrierName.isValid(""), "should return true").to.be.false;
        expect(carrierName.isValid("c"), "should return true").to.be.false;
        expect(carrierName.isValid("C"), "should return true").to.be.false;
        expect(carrierName.isValid("c1"), "should return true").to.be.false;
        expect(carrierName.isValid("C1"), "should return true").to.be.false;
        expect(carrierName.isValid("CC#"), "should return true").to.be.false;
        expect(carrierName.isValid("###"), "should return true").to.be.false;
    });
});