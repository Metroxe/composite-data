import {IData, IDataMap} from "./";
import {IObserver} from "./Observer";

abstract class DataComposite<P extends IDataMap> implements IData, IObserver {
    protected dataMap: P;
    private observers: Set<IObserver> = new Set<IObserver>();

    constructor(dataMap?: P) {
        if (dataMap) {
            this.dataMap = dataMap;
            this.addSelfAsObserver();
        }
    }

    public getValue(): object {
        const obj: any = {};
        const keys: string[] = Object.keys(this.dataMap);
        let key: string;
        for (key of keys) {
            if (this.dataMap[key]) {
                obj[key] = this.dataMap[key].getValue();
            }
        }
        return obj;
    }

    public getComponent(): P {
        return this.dataMap;
    }

    public set(dataMap: P, force?: boolean): boolean | Promise<boolean> {
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

    public isValid(value?: P): boolean | Promise<boolean> {
        let v: P;
        if (value) {
            v = value;
        } else {
            v = this.dataMap;
        }

        const keys: string[] = Object.keys(v);
        let key: string;
        for (key of keys) {
            if (v[key]) {
                if (!v[key].isValid()) {
                    return false;
                }
            }
        }
        return true;
    }

    public updateSelf(newValue?: any): void {
        this.updateObservers();
    }

    public updateObservers(): void {
        const newValue: object = this.getValue();
        let observer: IObserver;
        for (observer of this.observers) {
            observer.updateSelf(newValue);
        }
    }

    public addObserver(observer: IObserver): void {
        this.observers.add(observer);
    }

    private addSelfAsObserver(): void {
        const keys: string[] = Object.keys(this.dataMap);
        let key: string;
        for (key of keys) {
            if (this.dataMap[key]) {
                this.dataMap[key].addObserver(this);
            }
        }
    }
}

export {DataComposite};
