import {expect} from "chai";
import {DateOfBirth} from "../dist";

describe('validity of dates', () => {
    let date = new DateOfBirth();

    it('pass on specific dates', () => {
        let dateTemp = new Date(1989, 0, 23);
        expect(date.isValid(dateTemp), dateTemp + " should return true").to.be.true;

        let dateTemp2 = new Date(1996, 1, 27);
        expect(date.isValid(dateTemp2), dateTemp + " should return true").to.be.true;

        let dateTemp3 = new Date(1996, 1, 28);
        expect(date.isValid(dateTemp3), dateTemp3 + " should return true").to.be.true;

        let dateTemp4 = new Date(1996, 1, 29);
        dateTemp4.setDate(dateTemp4.getDate());
        expect(date.isValid(dateTemp4), dateTemp4 + " leap year should return true").to.be.true;

        let dateTemp5 = new Date(1996, 2, 1);
        expect(date.isValid(dateTemp5), dateTemp5 + " should return true").to.be.true;
    });

    it('pass on over 18 dates', () => {
        let dateTemp1 = new Date();
        dateTemp1.setFullYear(dateTemp1.getFullYear() - 18);
        date.set(dateTemp1);
        expect(date.olderThan(18), dateTemp1 + " should return true").to.be.true;

        let dateTemp2 = new Date();
        dateTemp2.setDate(dateTemp2.getDate() - 6575);
        date.set(dateTemp2);
        expect(date.olderThan(18), dateTemp2 + " should return true").to.be.true;

        let dateTemp3 = new Date();
        dateTemp3.setMonth(dateTemp3.getMonth() - 216);
        date.set(dateTemp3);
        expect(date.olderThan(18), dateTemp3 + " should return true").to.be.true;

        let dateTemp4 = new Date();
        dateTemp4.setFullYear(dateTemp4.getFullYear() - 18);
        dateTemp4.setDate(dateTemp4.getDate() - 1);
        date.set(dateTemp4);
        expect(date.olderThan(18), dateTemp4 + " should return false").to.be.true;

        let dateTemp5 = new Date();
        dateTemp5.setFullYear(dateTemp5.getFullYear() - 20);
        date.set(dateTemp5);
        expect(date.olderThan(18), dateTemp5 + " should return true").to.be.true;
    });

    it('fail on under 18 dates', () => {
        let dateTemp = new Date();
        dateTemp.setFullYear(dateTemp.getFullYear() - 17);
        date.set(dateTemp);
        expect(date.olderThan(18), dateTemp + " should return false").to.be.false;
    });
});