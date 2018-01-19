import {expect} from "chai";
import {GenericString} from "../dist";

describe("Name Tests, most general tests as well for the abstract classes", () => {
    const genericString: GenericString = new GenericString("");

    it("pass on generic string", () => {
        expect(genericString.set("Christopher1"), "Setting Christopher1").to.be.true;
        expect(genericString.set("!@#@#%!@"), "Setting !@#@#%!@").to.be.true;
        expect(genericString.set("Powroznik "), "Setting Powroznik ").to.be.true;
        expect(genericString.set(""), "Setting empty string").to.be.true;
    });

    it("fail on other datatypes", () => {
        expect(genericString.set(0, true), "Setting Christopher1").to.be.false;
        expect(genericString.set(true, true), "Setting !@#@#%!@").to.be.false;
        expect(genericString.set([], true), "Setting Powroznik ").to.be.false;
        expect(genericString.set({}, true), "Setting empty string").to.be.false;
    });
});
