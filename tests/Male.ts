import {expect} from "chai";
import {Male} from "../dist";

describe("validity of Male", () => {
    const male: Male = new Male();

    it("fail Male if 0", () => {
        expect(male.set(0), "Setting Male").to.be.false;
    });

    it("fail Male if 1", () => {
        expect(male.set(1)).to.be.false;
    });

    it("fail if string", () => {
        expect(male.set("string")).to.be.false;
    });

    it("pass if boolean", () => {
        expect(male.isValid(true)).to.be.true;
        expect(male.isValid(false)).to.be.true;
    });

});
