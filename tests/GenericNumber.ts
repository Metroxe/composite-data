import {expect} from "chai";
import {GenericNumber} from "../src";

describe("Generic Number Tests", () => {
    const genericNumber: GenericNumber = new GenericNumber();

    it("pass on proper numbers", () => {
        for (let i: number = -10; i < 10; i += 1) {
            expect(genericNumber.set(i), i.toString()).to.be.true;
        }

        for (let i: number = -1; i < 1; i += 0.1) {
            expect(genericNumber.set(i), i.toString()).to.be.true;
        }

        for (let i: number = -0.01; i < 0.01; i += 0.000001) {
            expect(genericNumber.set(i), i.toString()).to.be.true;
        }
    });

    it("fail on other data types", () => {
        expect(genericNumber.set("0", true)).to.be.false;
        expect(genericNumber.set(true, true)).to.be.false;
        expect(genericNumber.set([], true)).to.be.false;
        expect(genericNumber.set({}, true)).to.be.false;
    });
});
