import {DataLeaf} from "../model";

enum SalutationEnum {
    Mr = "MR",
    Mrs = "MRS",
    Ms = "MS",
}

class Salutation extends DataLeaf<SalutationEnum> {
    protected validityArray: Array<(value: SalutationEnum) => boolean> = [
        DataLeaf.notEmpty,
        Salutation.checkSalutation,
    ];

    public isMale(): boolean {
        return this.value === SalutationEnum.Mr;
    }

    private static isMr(value: SalutationEnum): boolean {
        return value === SalutationEnum.Mr;
    }

    private static isMrs(value: SalutationEnum): boolean {
        return value === SalutationEnum.Mrs;
    }

    private static isMs(value: SalutationEnum): boolean {
        return value === SalutationEnum.Ms;
    }

    private static checkSalutation(value: SalutationEnum): boolean {
        const arr: Array<(value: SalutationEnum) => boolean> = [
            Salutation.isMr,
            Salutation.isMrs,
            Salutation.isMs,
        ];

        let func: (value: SalutationEnum) => boolean;
        for (func of arr) {
            if (func(value)) {
                return true;
            }
        }

        return false;
    }
}

export {SalutationEnum, Salutation};
