import {expect} from "chai";
import {Password} from "../dist";

describe('Tests validity of passwords', () => {
    let password = new Password();

    it('Checking the isValid of password', () => {
        expect(password.isValid("123456"), "123456 should return true").to.be.true;
        expect(password.isValid("samuraiJack11"), "samuraiJack11 should return true").to.be.true;
        expect(password.isValid("!@#$%^&*()"), "!@#$%^&*() should return true").to.be.true;
        expect(password.isValid("ab12#$"), "ab12#$ should return true").to.be.true;
        expect(password.isValid("longPassword"), "longPassword should return true").to.be.true;
        expect(password.isValid("with$pecialChars"), "with$pecialChars should return true").to.be.true;
    });

    it('Checking ths isValid of incorrect passwords', () => {
        expect(password.isValid("12345"), "12345 should return false").to.be.false;
        expect(password.isValid("@#$%"), "@#$% should return false").to.be.false;
        expect(password.isValid("a1@"), "a1@ should return false").to.be.false;
        expect(password.isValid("short"), "short should return false").to.be.false;
        expect(password.isValid("sh0rt"), "sh0rt should return false").to.be.false;
        expect(password.isValid("cut()"), "cut() should return false").to.be.false;
    });

    it('Checking ths isValid of strong passwords', () => {
        password.set("asdfgH1%");
        expect(password.isStrongPassword(), "should return true").to.be.true;
        password.set("@3Pl");
        expect(password.isStrongPassword(), "should return true").to.be.true;
        password.set("@@AAaa77");
        expect(password.isStrongPassword(), "should return true").to.be.true;
        password.set("a@7A");
        expect(password.isStrongPassword(), "should return true").to.be.true;
    });

    it('Checking ths isValid of incorrect strong passwords', () => {
        password.set("aaaaaaaaa");
        expect(password.isStrongPassword(), "should return false").to.be.false;
        password.set("7777777");
        expect(password.isStrongPassword(), "should return false").to.be.false;
        password.set("AAAAAAA");
        expect(password.isStrongPassword(), "should return false").to.be.false;
        password.set("@@@@@@@");
        expect(password.isStrongPassword(), "should return false").to.be.false;
        password.set("AAAA777");
        expect(password.isStrongPassword(), "should return false").to.be.false;
        password.set("AAAAaaaa");
        expect(password.isStrongPassword(), "should return false").to.be.false;
        password.set("AAAA@@@@@");
        expect(password.isStrongPassword(), "should return false").to.be.false;
        password.set("aaaaa777777");
        expect(password.isStrongPassword(), "should return false").to.be.false;
        password.set("aaaaa@@@@@");
        expect(password.isStrongPassword(), "should return false").to.be.false;
        password.set("@@@@@77777");
        expect(password.isStrongPassword(), "should return false").to.be.false;
        password.set("AAAA777aaaaa");
        expect(password.isStrongPassword(), "should return false").to.be.false;
        password.set("AAAA777@@@@@@");
        expect(password.isStrongPassword(), "should return false").to.be.false;
        password.set("777aaaa@@@@@");
        expect(password.isStrongPassword(), "should return false").to.be.false;
    });

});