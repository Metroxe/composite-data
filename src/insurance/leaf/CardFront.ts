import {GenericString} from "../../";

class CardFront extends GenericString {
	public static urlRegex: RegExp = /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})$/;

	protected validityArray: Array<(value: string) => boolean> = [
		GenericString.notEmpty,
		CardFront.isURL,
	].concat(this.getParentValidityArray());

	private static isURL(value: string): boolean {
		return CardFront.urlRegex.test(value);
	}
}

export {CardFront};