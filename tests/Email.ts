import {expect} from "chai";
import {Email} from "../dist";

describe('Tests validity of email', () => {
    let email = new Email();

    it('Checking the isValid of email', () => {
        expect(email.isValid("spencer@hot.com"), "spencer@hot.com should return true").to.be.true;
        expect(email.isValid("sPencer@hot.com"), "sPencer@hot.com should return true").to.be.true;
        expect(email.isValid("spencer123@hot.ca"), "spencer123@hot.ca should return true").to.be.true;
        expect(email.isValid("sPencer123@hot.ca"), "sPencer123@hot.ca should return true").to.be.true;
        expect(email.isValid("spen.cer123@hot.net"), "spen.cer123@hot.net should return true").to.be.true;
        expect(email.isValid("spe#ncer@hot.ca"), "spe#ncer@hot.ca should return true").to.be.true;
        expect(email.isValid("spencer@hot.Com"), "spencer@hot.Com should return true").to.be.true;
    });

    it('Checking ths isValid of incorrect emails', () => {
        expect(email.isValid("spen@cer@hot.com"), "spen@cer@hot.com should return false").to.be.false;
        expect(email.isValid("spencer!hot.ca"), "spencer!hot.ca should return false").to.be.false;
        expect(email.isValid("spencer@hot.123"), "spencer@hot.123 should return false").to.be.false;
        expect(email.isValid("spen@cer@hot.123"), "spen@cer@hot.123 should return false").to.be.false;
        expect(email.isValid("spencer@ho!t.com"), "spen@cer@hot.com should return false").to.be.false;
        expect(email.isValid("spen..cer@hot.com"), "spen..cer@hot.com should return false").to.be.false;
        expect(email.isValid("spencer@hot.com-"), "spencer@hot.com- should return false").to.be.false;
        expect(email.isValid("spencer@hot.-com"), "spencer@hot.-com should return false").to.be.false;
    });
});