import {GenericString} from "../../";
import {CardFront} from "./CardFront";

class CardBack extends GenericString {
    protected validityArray: Array<(value: string) => boolean> = [
        GenericString.notEmpty,
        CardBack.isURL,
    ].concat(this.getParentValidityArray());

    private static isURL(value: string): boolean {
        return CardFront.urlRegex.test(value);
    }
}

export {CardBack};