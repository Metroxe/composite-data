import {expect} from "chai";
import {GenericBoolean} from "../src/generic/GenericBoolean";

describe("Generic Boolean Tests", () => {
    const genericBoolean: GenericBoolean = new GenericBoolean();

    it("pass on generic boolean", () => {
        expect(genericBoolean.set(true), "set to true").to.be.true;
        expect(genericBoolean.set(false), "set to false").to.be.true;
    });

    it("fail on other data types", () => {
        const dateObj: Date = new Date();
        expect(genericBoolean.set(0, true)).to.be.false;
        expect(genericBoolean.set([], true)).to.be.false;
        expect(genericBoolean.set({}, true)).to.be.false;
        expect(genericBoolean.set(dateObj.getDate(), true)).to.be.false;
        expect(genericBoolean.set("0", true)).to.be.false;
    });
});
