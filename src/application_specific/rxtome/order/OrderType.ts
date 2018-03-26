import {DataLeaf} from "../../../model";

enum OrderTypeEnum {
    New = "new_prescription",
    Transfer = "transfer",
    Refill = "refill",
}

class OrderType extends DataLeaf<OrderTypeEnum> {
    protected validityArray: Array<(value: OrderTypeEnum) => boolean> = [
        OrderType.checkOrderType,
    ];

    private static isNew(value: OrderTypeEnum): boolean {
        return value === OrderTypeEnum.New;
    }

    private static isTransfer(value: OrderTypeEnum): boolean {
        return value === OrderTypeEnum.Transfer;
    }

    private static isRefill(value: OrderTypeEnum): boolean {
        return value === OrderTypeEnum.Refill;
    }

    private static checkOrderType(value: OrderTypeEnum): boolean {
        const arr: Array<(value: OrderTypeEnum) => boolean> = [
            OrderType.isNew,
            OrderType.isTransfer,
            OrderType.isRefill,
        ];

        let func: (value: OrderTypeEnum) => boolean;
        for (func of arr) {
            if(func(value)) {
                return true;
            }
        }

        return false;
    }
}

export {OrderTypeEnum, OrderType};