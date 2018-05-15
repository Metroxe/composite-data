import {IDataMap} from "./IDataMap";
import {IObservable} from "./Observer";
import {IValidationResultItem} from "./IValidationResult";

interface IData extends IObservable {
    getValue(): any;
    getComponent(): IData | IDataMap;
    set(value: object | any, force?: boolean): Promise<IValidationResultItem>;
    isValid(value?: any): Promise<IValidationResultItem>;
}

export {IData};
