import {
	DataComposite, GenericDate, GenericString, Phone, ZipCode, Location, RxToMePharmacy, RxToMeDoctor,
	GenericNumber, DataArray, OrderType, PayOutOfPocket, OtherNotes,
} from "../../../";
import {IDataMap} from "../../../model";

abstract class RxToMeOrder extends DataComposite<IRxToMeOrderMap> {
}

class RxToMeRefillOrder extends RxToMeOrder {
}

class RxToMePrescriptionOrder extends DataComposite<IRxToMePrescriptionMap> {
}

interface IRxToMePrescriptionMap extends IDataMap {
	doctor?: RxToMeDoctor;
	insurance?: DataArray;
	medicationName?: GenericString;
	rxNumber?: GenericString;
	orderType: OrderType;
	prescriptionImage?: GenericString;
	userLocation?: Location;
	drugAllergies?: GenericString;
	specialInstruction?: GenericString;
	pharmacy?: RxToMePharmacy;
	callTime?: GenericString;
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
	notes?: OtherNotes;
	payOutOfPocket?: PayOutOfPocket;
	callTime?: GenericString;
	dateAdded: GenericDate;
	dateModified?: GenericDate;
}

export {IRxToMeOrderMap, RxToMeOrder, IRxToMePrescriptionMap, RxToMePrescriptionOrder, RxToMeRefillOrder};
