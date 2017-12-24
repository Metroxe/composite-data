import {DataMap} from "./DataMap";
import {Observable} from "./Observer";

interface Data extends Observable{
    getValue(): any
    getComponent(): Data | DataMap
    set(value: object | any, force?: boolean): boolean | Promise<boolean>
    isValid(value?: any): boolean | Promise<boolean>
}

export {Data}