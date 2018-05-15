import {IData} from "./";
import {IObserver} from "./Observer";
import {IValidationResult} from "./";
import {ValidationResult} from "./ValidationResult";
import {IValidationResultItem} from "./IValidationResult";

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

    public set(value: T | any, force?: boolean): Promise<IValidationResultItem> {
        return this.isValid(value).then((res: IValidationResultItem) => {
            if (force || res.valid) {
                this.value = value;
                this.updateObservers();
                if (force) {
                    return res;
                } else {
                    return new ValidationResult(true).getResult();
                }
            }
            return new ValidationResult(false).getResult();
        });
    }

    public isValid(value?: T): Promise<IValidationResultItem> {
        const scope: DataLeaf<T> = this;

        let v: T;
        if (value !== null && typeof value !== "undefined") {
            v = value;
        } else {
            v = this.value;
        }

        return new Promise((f: (res: IValidationResultItem) => void, r: (res: IValidationResultItem) => void): void => {
            if (v !== null && typeof v !== "undefined") {
                let func: (value: T) => IValidationResult;
                const asyncValidFuncs: Array<Promise<IValidationResultItem>> = [];
                for (func of scope.validityArray) {
                    try {
                        const validRes: IValidationResult = func(v);
                        const validResItem: IValidationResultItem = validRes.getResult();
                        if (validRes.isAsync) {
                            asyncValidFuncs.push(validRes.runAsync());

                        // regardless of whatever asynchronous operations are pending, return the first error found
                        } else if (!validResItem.valid) {
                            r(validResItem);
                        }
                    } catch (err) {
                        r(new ValidationResult(false, err.toString()).getResult());
                    }
                }
                // if no synchronous validation errors found, fetch each asynchronous validation result and check those
                // as well
                Promise.all(asyncValidFuncs).then((res: IValidationResultItem[]) => {
                    f(new ValidationResult(true).getResult());
                }, (err: IValidationResultItem) => {
                    r(err);
                });
                f(new ValidationResult(true).getResult());
            } else {
                r(new ValidationResult(false).getResult());
            }
        });
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
