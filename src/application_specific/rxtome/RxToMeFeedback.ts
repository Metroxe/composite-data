import {DataLeaf, IDataMap} from "../../model";
import {DataComposite, GenericString, Location} from "../../index";

class RxToMeFeedback extends DataComposite<IRxToMeFeedbackMap> {
}

interface IRxToMeFeedbackMap extends IDataMap {
	email: GenericString;
	details: GenericString;
	other?: GenericString;
	category: RxToMeFeedbackCategory;
}

class RxToMeFeedbackCategory extends DataLeaf<FeedbackCategoryEnum> {
	protected validityArray: Array<(value: FeedbackCategoryEnum) => boolean> = [
		RxToMeFeedbackCategory.checkEnumStates,
	];

	private static checkEnumStates(value: FeedbackCategoryEnum): boolean {
		const capCategory: string = value.toUpperCase();

		let categoryVal: string;
		for (categoryVal in FeedbackCategoryEnum) {
			if (capCategory === categoryVal) {
				return true;
			}
		}
		return false;
	}
}

enum FeedbackCategoryEnum {
	Uploading_Prescription = "Uploading Prescription",
	Transferring_Medication = "Transferring Medication",
	Pharmacy_Services = "Pharmacy Services",
	Refilling_Prescriptions = "Refilling Prescriptions",
	My_Insurance = "My Insurance",
	App_Usability = "App Usability",
}

export {FeedbackCategoryEnum, RxToMeFeedbackCategory, IRxToMeFeedbackMap, RxToMeFeedback};
