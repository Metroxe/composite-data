import {DataLeaf} from "../../index";

class PrimaryCareNetwork extends DataLeaf<string> {
    protected validityArray: Array<(value: string) => boolean> = [
        DataLeaf.isAlphaNumeric,
        DataLeaf.notEmpty,
        PrimaryCareNetwork.minimumLength,
    ];

    private static minimumLength(value: string): boolean {
        return (value.length >= 4);
    }
}

export {PrimaryCareNetwork};
