import {DataLeaf} from "../../../model";

enum PayOutOfPocketEnum {
    Cash = "CASH",
    Credit = "CREDIT",
    Debit = "DEBIT",
}

class PayOutOfPocket extends DataLeaf<PayOutOfPocketEnum> {
    protected validityArray: Array<(value: PayOutOfPocketEnum) => boolean> = [
        PayOutOfPocket.checkPayOutOfPocket,
    ];

    private static isCash(value: PayOutOfPocketEnum): boolean {
        return value === PayOutOfPocketEnum.Cash;
    }

    private static isCredit(value: PayOutOfPocketEnum): boolean {
        return value === PayOutOfPocketEnum.Credit;
    }

    private static isDebit(value: PayOutOfPocketEnum): boolean {
        return value === PayOutOfPocketEnum.Debit;
    }

    private static checkPayOutOfPocket(value: PayOutOfPocketEnum): boolean {
        const arr: Array<(value: PayOutOfPocketEnum) => boolean> = [
            PayOutOfPocket.isCash,
            PayOutOfPocket.isCredit,
            PayOutOfPocket.isDebit,
        ];

        let func: (value: PayOutOfPocketEnum) => boolean;
        for (func of arr) {
            if (func(value)) {
                return true;
            }
        }

        return false;
    }
}

export {PayOutOfPocketEnum, PayOutOfPocket};
