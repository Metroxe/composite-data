import {DataLeaf} from "../../index";

class CarrierName extends DataLeaf<string> {
    protected validityArray: Array<(value: string) => boolean> = [
        DataLeaf.isAlphaNumeric,
        DataLeaf.notEmpty,
        CarrierName.validLength,
    ];

    private static validLength(value: string): boolean {
        return (value.length > 2);
    }
}

export {CarrierName};
