import {IData} from "./";
import {IObserver} from "./Observer";
import {IValidationResult} from "./";
import {ValidationResult} from "./ValidationResult";
import {IDataMap} from "./IDataMap";

abstract class DataLeaf<T> implements IData {

    protected value: T;
    protected abstract validityArray: Array<(value: T) => IValidationResult>;
    private observers: Set<IObserver> = new Set<IObserver>();

    public constructor(value?: T) {
        if (value !== undefined && value !== null) { this.value = value; }
    }

    public getValue(): T {
        return this.value;
    }

    public getComponent(): DataLeaf<T> {
        return this;
    }

    public set(value: T | any, force?: boolean): IValidationResult/* | Promise<IValidationResult>*/ {
        const validRes: IValidationResult/* | Promise<IValidationResult>*/ = this.isValid(value);

        if (force || validRes.valid) {
            this.value = value;
            this.updateObservers();
            if (force) {
                return validRes;
            } else {
                return new ValidationResult(true);
            }
        }
        return new ValidationResult(false);
    }

    public isValid(value?: T): IValidationResult/* | Promise<IValidationResult>*/ {
        let v: T;

        if (value !== null && typeof value !== "undefined") {
            v = value;
        } else {
            v = this.value;
        }

        if (v !== null && typeof v !== "undefined") {
            let func: (value: T) => IValidationResult;
            for (func of this.validityArray) {
                try {
                    let validRes: IValidationResult = func(v);
                    if (!validRes.valid) {
                        return validRes;
                    }
				} catch (err) {
                    return new ValidationResult(false);
                }
            }
        } else {
            return new ValidationResult(false);
        }

        return new ValidationResult(true);
    }

    public updateObservers(): void {
        let observer: IObserver;
        const value: T = this.getValue();
        for (observer of this.observers) {
            observer.updateSelf(value);
        }
    }

    public addObserver(observer: IObserver): void {
        this.observers.add(observer);
    }

    // Must call with super
    protected getParentValidityArray(): Array<(value: T) => IValidationResult> {
        return this.validityArray;
    }
}

export {DataLeaf};
