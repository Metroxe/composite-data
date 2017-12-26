import {DataMap, Data} from "./";
import {Observer} from "./Observer";

abstract class DataComposite<P extends DataMap> implements Data, Observer {
    protected dataMap : P;
    private observers : Set<Observer> = new Set<Observer>();

    constructor(dataMap?: P) {
        if (dataMap) {
            this.dataMap = dataMap;
            this.addSelfAsObserver();
        }
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
            this.addSelfAsObserver();
            return true;
        }

        if (this.isValid(dataMap)) {
            this.dataMap = dataMap;
            this.addSelfAsObserver();
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

    public updateSelf(newValue? : any): void {
        this.updateObservers()
    }

    public updateObservers(): void {
        let newValue = this.getValue();
        for (let observer of this.observers) {
            observer.updateSelf(newValue);
        }
    }

    public addObserver(observer: Observer): void {
        this.observers.add(observer);
    }

    private addSelfAsObserver() {
        let keys = Object.keys(this.dataMap);
        for (let key of keys) {
            if (this.dataMap[key]){
                this.dataMap[key].addObserver(this);
            }
        }
    }
}

export {DataComposite}