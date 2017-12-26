import {DataLeaf} from "../model/DataLeaf";

class Email extends DataLeaf<string>{
    protected validityArray : Array<(value : string) => boolean> = [
        Email.isEmail
    ];

    private static isEmail(value : string) : boolean {
        let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(value);
    }
}

export {Email}