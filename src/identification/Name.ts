import {DataComposite, DataLeaf} from "../";
import {IDataMap} from "../model";

abstract class Name extends DataLeaf<string> {
    protected validityArray: Array<(value: string) => boolean> = [
        DataLeaf.noWhiteSpace,
        DataLeaf.isAlphaNumeric,
        Name.hasNumber,
        DataLeaf.notEmpty,
    ];

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
