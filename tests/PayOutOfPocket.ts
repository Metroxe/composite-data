import {expect} from "chai";
import {PayOutOfPocket} from "../dist";

describe("Tests validity of pay out of pocket", () => {
    const payOutOfPocket: PayOutOfPocket = new PayOutOfPocket();

    it("Checking the isValid of pay out of pocket", () => {
        expect(payOutOfPocket.set("CASH"), "should return true").to.be.true;
        expect(payOutOfPocket.set("CREDIT"), "should return true").to.be.true;
        expect(payOutOfPocket.set("DEBIT"), "should return true").to.be.true;
    });

    it("Checking the isValid of incorrect pay out of pocket", () => {
        expect(payOutOfPocket.set("cash"), "should return false").to.be.false;
        expect(payOutOfPocket.set("credit"), "should return false").to.be.false;
        expect(payOutOfPocket.set("debit"), "should return false").to.be.false;
        expect(payOutOfPocket.set("!!!!"), "should return false").to.be.false;
        expect(payOutOfPocket.set("detb"), "should return false").to.be.false;
        expect(payOutOfPocket.set("1234"), "should return false").to.be.false;
    });

});