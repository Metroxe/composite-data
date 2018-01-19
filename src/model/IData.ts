import {IDataMap} from "./IDataMap";
import {IObservable} from "./Observer";

interface IData extends IObservable {
    getValue(): any;
    getComponent(): IData | IDataMap;
    set(value: object | any, force?: boolean): boolean | Promise<boolean>;
    isValid(value?: any): boolean | Promise<boolean>;
}

export {IData};
