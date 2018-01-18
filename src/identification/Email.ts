import {DataLeaf} from "../model";

class Email extends DataLeaf<string> {

    protected validityArray: Array<(value: string) => boolean> = [
        Email.isEmail,
        DataLeaf.notEmpty,
    ];

    private static emailRegex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    private static isEmail(value: string): boolean {
        return Email.emailRegex.test(value);
    }
}

export {Email};
