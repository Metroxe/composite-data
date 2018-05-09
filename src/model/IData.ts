import {IDataMap} from "./IDataMap";
import {IObservable} from "./Observer";
import {IValidationResult} from "./IValidationResult";

interface IData extends IObservable {
    getValue(): any;
    getComponent(): IData | IDataMap;
    set(value: object | any, force?: boolean): IValidationResult/* | Promise<IValidationResult>*/;
    isValid(value?: any): IValidationResult/* | Promise<IValidationResult>*/;
}

export {IData};
