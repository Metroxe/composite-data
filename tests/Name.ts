import {expect} from "chai";
import {FirstName, FullName, IFullNameMap, LastName, MiddleName} from "../dist";

describe("Name Tests, most general tests as well for the abstract classes", () => {
    const firstName: FirstName = new FirstName();
    const middleName: MiddleName = new MiddleName();
    const lastName: LastName = new LastName();

    it("fail on improper names", () => {
        expect(firstName.set("Christopher1"), "Setting Christopher1").to.be.false;
        expect(middleName.set("!@#@#%!@"), "Setting !@#@#%!@").to.be.false;
        expect(firstName.set("Powroznik "), "Setting Powroznik ").to.be.false;
        expect(firstName.set(""), "Setting empty string").to.be.false;
        const undefinedString: string = undefined;
        const nullString: string = undefined;
        expect(firstName.set(undefinedString), "Setting undefined").to.be.false;
        expect(firstName.set(nullString), "Setting null").to.be.false;
    });

    it("pass on proper names", () => {
        expect(firstName.set("Christopher"), "Setting Christopher").to.be.true;
        expect(firstName.getValue(), "checking direct value").to.be.equal("Christopher");
        expect(firstName.getComponent(), "checking direct component").to.be.equal(firstName);
        expect(middleName.set("Vinson"), "Setting Vinson").to.be.true;
        expect(lastName.set("Powroznik"), "Setting Powroznik").to.be.true;
    });

    it("create a composite name", () => {
        firstName.set("Christopher");
        middleName.set("Vinson");
        lastName.set("Powroznik");
        const fullNameMap: IFullNameMap = {
            firstName,
            lastName,
            middleName,
        };
        const fullName: FullName = new FullName();
        expect(fullName.set(fullNameMap), "adding Full Name Map").to.be.true;
        expect(fullName.getComponent()).to.be.equal(fullNameMap);
        const value: object = fullName.getValue();
        expect(value, "Check value outputted").to.deep.equal({
            firstName: "Christopher",
            middleName: "Vinson",
            lastName: "Powroznik",
        });
        expect(fullName.isValid(), "check valid on self").to.be.true;
        expect(fullName.isValid(fullNameMap), "check valid on map").to.be.true;
    });

    it("optional parameters are still valid if not present", () => {
        const fullNameMap: IFullNameMap = {};
        const fullName: FullName = new FullName();
        expect(fullName.set(fullNameMap), "adding Full Name Map").to.be.true;
        expect(fullName.getComponent()).to.be.equal(fullNameMap);
        expect(fullName.isValid(), "check valid on self").to.be.true;
        expect(fullName.isValid(fullNameMap), "check valid on map").to.be.true;
    });
});
