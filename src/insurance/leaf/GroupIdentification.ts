import {GenericString} from "../../";

class GroupIdentification extends GenericString {
    protected validityArray: Array<(value: string) => boolean> = [
        GenericString.isAlphaNumeric,
        GenericString.notEmpty,
        GroupIdentification.minimumLength,
    ].concat(this.getParentValidityArray());

    private static minimumLength(value: string): boolean {
        return (value.length >= 2);
    }
}

export {GroupIdentification};
