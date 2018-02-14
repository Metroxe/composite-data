import {expect} from "chai";
import {GenericDate} from "../dist";

describe("Generic Date Tests", () => {
    const genericDate: GenericDate = new GenericDate();

    it("pass on generic date", () => {
        const dateObj: Date = new Date();
        expect(genericDate.set(dateObj), "unset date").to.be.true;
        dateObj.setFullYear(2020);
        expect(genericDate.set(dateObj), "year set date").to.be.true;
    });

    it("fail on other data types", () => {
        const dateObj: Date = new Date();
        expect(genericDate.set(0, true)).to.be.false;
        expect(genericDate.set(true, true)).to.be.false;
        expect(genericDate.set([], true)).to.be.false;
        expect(genericDate.set({}, true)).to.be.false;
        expect(genericDate.set(dateObj.getDate(), true)).to.be.false;
        expect(genericDate.set(dateObj.toISOString(), true)).to.be.false;
        expect(genericDate.set(dateObj.toDateString(), true)).to.be.false;
        expect(genericDate.set(dateObj.toDateString(), true)).to.be.false;
    });
});
