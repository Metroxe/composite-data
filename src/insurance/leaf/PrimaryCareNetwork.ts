import {GenericString} from "../../";

class PrimaryCareNetwork extends GenericString {
    protected validityArray: Array<(value: string) => boolean> = [
        GenericString.isAlphaNumericWithSpaces,
        GenericString.notEmpty,
        PrimaryCareNetwork.minimumLength,
    ];

    private static minimumLength(value: string): boolean {
        return (value.length >= 4);
    }
}

export {PrimaryCareNetwork};
