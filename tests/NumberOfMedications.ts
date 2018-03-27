import {expect} from "chai";
import {NumberOfMedications} from "../dist";

describe("Tests validity of number of medications", () => {
    const numberOfMedications: NumberOfMedications = new NumberOfMedications();

    it("Checking the isValid of number of medications", () => {
        expect(numberOfMedications.isValid("0"), "should return true").to.be.true;
        expect(numberOfMedications.isValid("1"), "should return true").to.be.true;
        expect(numberOfMedications.isValid("2"), "should return true").to.be.true;
        expect(numberOfMedications.isValid("3"), "should return true").to.be.true;
        expect(numberOfMedications.isValid("4"), "should return true").to.be.true;
        expect(numberOfMedications.isValid("5"), "should return true").to.be.true;
        expect(numberOfMedications.isValid("6"), "should return true").to.be.true;
        expect(numberOfMedications.isValid("7"), "should return true").to.be.true;
        expect(numberOfMedications.isValid("8"), "should return true").to.be.true;
        expect(numberOfMedications.isValid("9"), "should return true").to.be.true;
        expect(numberOfMedications.isValid("10"), "should return true").to.be.true;

    });

	it("Checking the isValid of incorrect number of medications", () => {
		expect(numberOfMedications.isValid("50"), "should return true").to.be.false;
		expect(numberOfMedications.isValid("100"), "should return true").to.be.false;
		expect(numberOfMedications.isValid("0.3"), "should return false").to.be.false;
		expect(numberOfMedications.isValid("101"), "should return false").to.be.false;
		expect(numberOfMedications.isValid("1000"), "should return false").to.be.false;
		expect(numberOfMedications.isValid("one"), "should return false").to.be.false;
		expect(numberOfMedications.isValid("one hundred"), "should return false").to.be.false;
		expect(numberOfMedications.isValid("????"), "should return false").to.be.false;
	});

	it("Checking the isValid of number == '10+'", () => {
		expect(numberOfMedications.isValid("10+"), "should return true").to.be.true;
	});

	it("Checking the isValid of incorrect number == '10+'", () => {
		expect(numberOfMedications.isValid("+10"), "should return false").to.be.false;
		expect(numberOfMedications.isValid("plusTen"), "should return false").to.be.false;
	});

});
