import {DataLeaf} from "../model/DataLeaf";

enum SalutationEnum {
    Mr = "MR",
    Mrs = "MRS",
    Ms = "MS",
}

class Salutation extends DataLeaf<SalutationEnum>{
    protected validityArray : Array<(value : SalutationEnum) => boolean> = [
        DataLeaf.notEmpty,
        Salutation.checkSalutation
    ];

    private static isMr(value : SalutationEnum) : boolean {
        return value === SalutationEnum.Mr;
    }

    private static isMrs(value : SalutationEnum) : boolean {
        return value === SalutationEnum.Mrs;
    }

    private static isMs(value : SalutationEnum) : boolean {
        return value === SalutationEnum.Ms;
    }

    private static checkSalutation(value : SalutationEnum) : boolean {
        let arr : Array<(value : SalutationEnum) => boolean> = [
            Salutation.isMr,
            Salutation.isMrs,
            Salutation.isMs,
        ];

        for(let i = 0; i < arr.length; i++) {
            let func : (value : SalutationEnum)=> boolean = arr[i];
            if (func(value)){
                return true;
            }
        }

        return false;
    }

    /* Check if user is male or female based on salutation */

    public isMaleOrFemale() : boolean {
        return this.value === SalutationEnum.Mr;
    }
}

export {SalutationEnum, Salutation}