import {IData} from "./";
import {IObserver} from "./Observer";

abstract class DataLeaf<T> implements IData {

    protected value: T;
    protected abstract validityArray: Array<(value: T) => boolean>;
    private observers: Set<IObserver> = new Set<IObserver>();

    public constructor(value?: T) {
        if (value !== undefined || value !== null) { this.value = value; }
    }

    public getValue(): T {
        return this.value;
    }

    public getComponent(): DataLeaf<T> {
        return this;
    }

    public set(value: T | any, force?: boolean): boolean | Promise<boolean> {
        const valid: boolean | Promise<boolean> = this.isValid(value);
        if (force || valid) {
            this.value = value;
            this.updateObservers();
            if (force) {
                return valid;
            } else {
                return true;
            }
        }
        return false;
    }

    public isValid(value?: T): boolean | Promise<boolean> {
        let v: T;

        if (value !== null && typeof value !== "undefined") {
            v = value;
        } else {
            v = this.value;
        }

        if (v !== null && typeof v !== "undefined") {
            let func: (value: T) => boolean;
            for (func of this.validityArray) {
                if (!func(v)) { return false; }
            }
        } else { return false; }

        return true;
    }

    public updateObservers(): void {
        let observer: IObserver;
        for (observer of this.observers) {
            observer.updateSelf(this.getValue());
        }
    }

    public addObserver(observer: IObserver): void {
        this.observers.add(observer);
    }

    // Must call with super
    protected getParentValidityArray(): Array<(value: T) => boolean> {
        return this.validityArray;
    }
}

export {DataLeaf};
