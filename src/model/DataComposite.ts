import {DataMap, Data} from "./";

abstract class DataComposite<P extends DataMap> implements Data {
    protected dataMap : P;

    constructor(dataMap?: P) {
        if (dataMap) this.dataMap = dataMap;
    }

    public getValue() : object {
        let obj : any = {};
        let keys = Object.keys(this.dataMap);
        for (let key of keys) {
            if (this.dataMap[key])
                obj[key] = this.dataMap[key].getValue()
        }
        return obj;
    }

    public getComponent() : DataMap {
        return this.dataMap;
    }

    public set(dataMap : P, force? : boolean) : boolean | Promise<boolean> {
        if (force) {
            this.dataMap = dataMap;
            return true;
        }

        if (this.isValid(dataMap)) {
            this.dataMap = dataMap;
            return true;
        }

        return false;
    }

    public isValid(value?: P) : boolean | Promise<boolean> {
        let v;
        if (value)
            v = value;
        else
            v = this.dataMap;

        let keys = Object.keys(v);
        for (let key of keys) {
            if (v[key])
                if (!v[key].isValid())
                    return false
        }
        return true;
    }
}

export {DataComposite}