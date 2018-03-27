import {expect} from "chai";
import {DeliveryStatus} from "../dist";

describe("Tests validity of delivery status", () => {
    const deliveryStatus: DeliveryStatus = new DeliveryStatus();

    it("Checking the isValid of delivery status", () => {
        expect(deliveryStatus.set("CALLINGPATIENT"), "should return true").to.be.true;
        expect(deliveryStatus.set("INPROGRESS"), "should return true").to.be.true;
        expect(deliveryStatus.set("COMPLETE"), "should return true").to.be.true;
        expect(deliveryStatus.set("ONDELIVERY"), "should return true").to.be.true;
    });

    it("Checking the isValid of incorrect delivery status", () => {
        expect(deliveryStatus.set("ondelivery"), "should return false").to.be.false;
        expect(deliveryStatus.set("in progress"), "should return false").to.be.false;
        expect(deliveryStatus.set("competle"), "should return false").to.be.false;
        expect(deliveryStatus.set("gettingThere"), "should return false").to.be.false;
        expect(deliveryStatus.set("!@#$&"), "should return false").to.be.false;
        expect(deliveryStatus.set("0nd3l1v3ry"), "should return false").to.be.false;
    });

});
