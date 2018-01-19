import {expect} from "chai";
import {FirstName, LastName, MiddleName} from "../dist";
import {IObserver} from "../dist";

describe("Observer tests", () => {

    it("dataLeaf observer test", () => {
        const firstName: FirstName = new FirstName();
        const middleName: MiddleName = new MiddleName();
        const lastName: LastName = new LastName();

        firstName.set("Christopher");
        middleName.set("Vinson");
        lastName.set("Powroznik");

        const firstNameObserver1: MockObserver = new MockObserver();
        const firstNameObserver2: MockObserver = new MockObserver();

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

class MockObserver implements IObserver {
    public count: number;

    constructor() {
        this.count = 0;
    }

    public updateSelf(newValue: any): void {
        this.count++;
    }
}
