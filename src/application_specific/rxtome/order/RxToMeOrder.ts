import {
	DataComposite, GenericDate, GenericString, Phone, ZipCode, Location, RxToMePharmacy, RxToMeDoctor,
	GenericNumber, DataArray, OrderType, PayOutOfPocket
} from "../../../";
import {IDataMap} from "../../../model";

abstract class RxToMeOrder extends DataComposite<IRxToMeOrderMap> {
}

class RxToMeRefillOrder extends RxToMeOrder {
}

class RxToMePrescriptionOrder extends RxToMeOrder {
}

interface IRxToMeOrderMap extends IDataMap {
	created: GenericDate;
	orderId: GenericString;
	longOrderID: GenericString;
	patientID: GenericString;
	orderType: OrderType;
	medicationName: GenericString;
	deliveryStatus: GenericString;
	location: Location;
	patientPhoneNumber: Phone;
	zipCode: ZipCode;
	pharmacy: RxToMePharmacy;
	doctor?: RxToMeDoctor;
	rxNumber?: GenericString;
	specialInstruction?: GenericString;
	drugAllergies?: GenericString;
	numberOfMedications?: GenericNumber;
	insurance: DataArray;
	notes?: GenericString;
	payOutOfPocket?: PayOutOfPocket;
	callTime?: GenericString;
	dateAdded: GenericDate;
	dateModified?: GenericDate;
}

export {IRxToMeOrderMap, RxToMeOrder, RxToMePrescriptionOrder, RxToMeRefillOrder};
