import {DataLeaf, DataComposite} from "../";
import {DataMap} from "../model";

abstract class Name extends DataLeaf<string> {
    protected validityArray : Array<(value : string) => boolean> = [
        DataLeaf.noWhiteSpace,
        DataLeaf.isAlphaNumeric,
        Name.hasNumber,
        DataLeaf.notEmpty
    ];

    protected static hasNumber(value : string) : boolean {
        return !(/\d/.test(value));
    }
}

class FirstName extends Name {}
class MiddleName extends Name {}
class LastName extends Name {}
class FullName extends DataComposite<FullNameMap> {}

interface FullNameMap extends DataMap {
    firstName? : FirstName
    middleName? : MiddleName
    lastName? : LastName
}

export {Name,  FirstName, MiddleName, LastName, FullNameMap, FullName}