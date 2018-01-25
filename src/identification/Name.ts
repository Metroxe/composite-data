import {DataComposite, GenericString} from "../";
import {IDataMap} from "../model";

abstract class Name extends GenericString {
    protected validityArray: Array<(value: string) => boolean> = [
        GenericString.noWhiteSpace,
        GenericString.isAlphaNumeric,
        Name.hasNumber,
        GenericString.notEmpty,
    ].concat(super.getParentValidityArray());

    protected static hasNumber(value: string): boolean {
        return !(/\d/.test(value));
    }
}

class FirstName extends Name {}
class MiddleName extends Name {}
class LastName extends Name {}
class FullName extends DataComposite<IFullNameMap> {}

interface IFullNameMap extends IDataMap {
    firstName?: FirstName;
    lastName?: LastName;
    middleName?: MiddleName;
}

export {Name,  FirstName, MiddleName, LastName, IFullNameMap, FullName};
