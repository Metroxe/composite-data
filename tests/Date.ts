import {expect} from "chai";
import {Dates} from "../src/identification/Date";

describe('validity of dates', () => {
    let date = new Dates();

    it('fail on improper dates', () => {
        expect(date.isValid("generic string"), "generic string should fail").to.be.false;
        expect(date.isValid(1), "Single numbers should fail").to.be.false;
        expect(date.isValid(true), "boolean should fail").to.be.false;
        expect(date.isValid("89/1/23"), "89/1/23 should fail").to.be.false;
    });

    it('pass on specific dates', () => {

        let dateTemp = new Date(1989, 0, 23);
        expect(date.isValid(dateTemp), dateTemp + " should return true").to.be.true;

        let dateTemp2 = new Date(1996, 1, 27);
        expect(date.isValid(dateTemp2), dateTemp + " should return true").to.be.true;

        let dateTemp3 = new Date(1996, 1, 28);
        expect(date.isValid(dateTemp3), dateTemp3 + " should return true").to.be.true;

        let dateTemp4 = new Date(1996, 1, 29);
        dateTemp4.setDate(dateTemp4.getDate(29));
        expect(date.isValid(dateTemp4), dateTemp4 + " leap year should return true").to.be.true;

        let dateTemp5 = new Date(1996, 2, 1);
        expect(date.isValid(dateTemp5), dateTemp5 + " should return true").to.be.true;

    });

    it('pass on over 18 dates', () => {
        let dateTemp1 = new Date();
        dateTemp1.setFullYear(dateTemp1.getFullYear() - 18);
        expect(date.isValid(dateTemp1), dateTemp1 + " should return true").to.be.true;

        let dateTemp2 = new Date();
        dateTemp2.setDate(dateTemp2.getDate() - 6575);
        expect(date.isValid(dateTemp2), dateTemp2 + " should return true").to.be.true;

        let dateTemp3 = new Date();
        dateTemp3.setMonth(dateTemp3.getMonth() - 216);
        expect(date.isValid(dateTemp3), dateTemp3 + " should return true").to.be.true;

        let dateTemp4 = new Date();
        dateTemp4.setFullYear(dateTemp4.getFullYear() - 18);
        dateTemp4.setDate(dateTemp4.getDate()- 1);
        expect(date.isValid(dateTemp4), dateTemp4 + " should return false").to.be.true;

        let dateTemp5 = new Date();
        dateTemp5.setFullYear(dateTemp5.getFullYear() - 20);
        expect(date.isValid(dateTemp5), dateTemp5 + " should return true").to.be.true;
    });

    it('fail on under 18 dates', () => {
        let dateTemp = new Date();
        dateTemp.setFullYear(dateTemp.getFullYear() - 17);
        expect(date.isValid(dateTemp), dateTemp + " should return false").to.be.false;

        let dateTemp1 = new Date();
        dateTemp1.setFullYear(dateTemp1.getFullYear() - 17);
        expect(date.isValid(dateTemp1), dateTemp1 + " should return true").to.be.false;

        let dateTemp2 = new Date();
        dateTemp2.setFullYear(dateTemp2.getFullYear() - 17);
        dateTemp2.setMonth(dateTemp2.getMonth() - 11);
        expect(date.isValid(dateTemp2), dateTemp2 + " should return true").to.be.false;

        let dateTemp3 = new Date();
        dateTemp3.setFullYear(dateTemp3.getFullYear() - 17);
        dateTemp3.setDate(dateTemp3.getDate() - 1);
        expect(date.isValid(dateTemp3), dateTemp3 + " should return false").to.be.false;

        let dateTemp4 = new Date();
        dateTemp4.setFullYear(dateTemp4.getFullYear() - 18);
        dateTemp4.setDate(dateTemp4.getDate() + 1);
        expect(date.isValid(dateTemp4), dateTemp4 + " should return false").to.be.false;
    });
});