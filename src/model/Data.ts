import {DataMap} from "./DataMap";

interface Data {
    getValue(): any
    getComponent(): Data | DataMap
    set(value: object | any, force?: boolean): boolean | Promise<boolean>
    isValid(value?: any): boolean | Promise<boolean>
}

export {Data}