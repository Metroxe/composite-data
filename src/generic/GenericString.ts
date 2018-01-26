import {DataLeaf} from "../model";

class GenericString extends DataLeaf<string> {

    protected validityArray: Array<(value: string) => boolean> = [
        GenericString.isString,
    ];

    private static spaceCharCode: number = " ".charCodeAt(0);

    protected static notEmpty(value: string): boolean {
        return value.length > 0;
    }

    protected static noWhiteSpace(value: string): boolean {
        return !(value.indexOf(" ") > 0);
    }

    protected static isAlphaNumericWithSpaces(value: string): boolean {
        let code: number;
        let i: number;
        let len: number;

        for (i = 0, len = value.length; i < len; i++) {
            code = value.charCodeAt(i);
            if (!(code > 47 && code < 58) && // numeric (0-9)
                !(code > 64 && code < 91) && // upper alpha (A-Z)
                !(code > 96 && code < 123) && // lower alpha (a-z)
                !(code === GenericString.spaceCharCode)) {
                return false;
            }
        }
        return true;
    }

    private static isString(value: string): boolean {
        return (typeof value === "string");
    }

}

export {GenericString};
