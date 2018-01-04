import {expect} from "chai";
import {FirstName, FullNameMap, LastName, MiddleName, FullName} from "../dist";
import {Observer} from "../dist";

describe('Observer tests', () => {

    it('dataLeaf observer test', () => {
        let firstName = new FirstName();
        let middleName = new MiddleName();
        let lastName = new LastName();

        firstName.set("Christopher");
        middleName.set("Vinson");
        lastName.set("Powroznik");

        let firstNameObserver1 = new MockObserver();
        let firstNameObserver2 = new MockObserver();

        firstName.addObserver(firstNameObserver1);
        expect(firstNameObserver1.count).to.be.equal(0);

        firstName.updateObservers();
        expect(firstNameObserver1.count).to.be.equal(1);

        firstName.addObserver(firstNameObserver2);
        expect(firstNameObserver2.count).to.be.equal(0);

        firstName.updateObservers();
        expect(firstNameObserver1.count).to.be.equal(2);
        expect(firstNameObserver2.count).to.be.equal(1);

        firstName.set("Emily");
        expect(firstNameObserver1.count).to.be.equal(3);
        expect(firstNameObserver2.count).to.be.equal(2);
    });
});

class MockObserver implements Observer{
    public count : number;

    constructor() {
        this.count = 0;
    }

    updateSelf(newValue : any) : void {
        this.count++;
    }
}