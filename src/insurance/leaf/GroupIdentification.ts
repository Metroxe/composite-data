import {GenericString} from "../../";

class GroupIdentification extends GenericString {
    protected validityArray: Array<(value: string) => boolean> = [
        GenericString.isAlphaNumericWithSpaces,
        GenericString.notEmpty,
        GroupIdentification.minimumLength,
        // GroupIdentification.digitsOnly,
    ].concat(this.getParentValidityArray());

    private static minimumLength(value: string): boolean {
        return (value.length >= 2);
    }

    // private static groupIdRegex: RegExp = /^\d+$/;

    // private static digitsOnly(value: string): boolean {
    //     return GroupIdentification.groupIdRegex.test(value);
    // }
}

export {GroupIdentification};
