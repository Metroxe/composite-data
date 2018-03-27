import {DataLeaf} from "../../../model";

enum DeliveryStatusEnum {
    callingPatient = "CALLINGPATIENT",
    inProgress = "INPROGRESS",
    complete = "COMPLETE",
    onDelivery = "ONDELIVERY",
}

class DeliveryStatus extends DataLeaf<DeliveryStatusEnum> {
    protected validityArray: Array<(value: DeliveryStatusEnum) => boolean> = [
        DeliveryStatus.checkSalutation,
    ];

    private static isCallingPatient(value: DeliveryStatusEnum): boolean {
        return value === DeliveryStatusEnum.callingPatient;
    }

    private static isInProgress(value: DeliveryStatusEnum): boolean {
        return value === DeliveryStatusEnum.inProgress;
    }

    private static isComplete(value: DeliveryStatusEnum): boolean {
        return value === DeliveryStatusEnum.complete;
    }

    private static isOnDelivery(value: DeliveryStatusEnum): boolean {
        return value === DeliveryStatusEnum.onDelivery;
    }

    private static checkSalutation(value: DeliveryStatusEnum): boolean {
        const arr: Array<(value: DeliveryStatusEnum) => boolean> = [
            DeliveryStatus.isCallingPatient,
            DeliveryStatus.isInProgress,
            DeliveryStatus.isComplete,
            DeliveryStatus.isOnDelivery,
        ];

        let func: (value: DeliveryStatusEnum) => boolean;
        for (func of arr) {
            if (func(value)) {
                return true;
            }
        }

        return false;
    }
}

export {DeliveryStatusEnum, DeliveryStatus};
