import {IData, IDataMap} from "./";
import {IObserver} from "./Observer";
import {IValidationResult, IValidationResultItem} from "./IValidationResult";
import {ValidationResult} from "./ValidationResult";

export class DataComposite<P extends IDataMap> implements IData, IObserver {
    protected dataMap: P;
    protected validityArray: Array<(data?: IDataLeafValues) => IValidationResult>/* | Promise<IValidationResult>> = []*/;
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

    public set(dataMap: P, force?: boolean): Promise<IValidationResultItem> {
        return this.isValid(dataMap).then((res: IValidationResultItem) => {
            if (force || res.valid) {
                this.dataMap = dataMap;
                this.addSelfAsObserver();
                if (force) {
                    return res;
                } else {
                    return new ValidationResult(true).getResult();
                }
            }
            return new ValidationResult(false).getResult();
        });
    }

    public isValid(data?: IDataLeafValues): Promise<IValidationResultItem> {
        const scope: DataComposite<P> = this;

        return new Promise((f: (res: IValidationResultItem) => void, r: (res: IValidationResultItem) => void): void => {
            if (!scope.validityArray || scope.validityArray.length < 1) {
                f(new ValidationResult(true).getResult());
                return;
            }

            let func: (data?: IDataLeafValues) => IValidationResult;
            const asyncValidFuncs: Array<Promise<IValidationResultItem>> = [];
            for (func of scope.validityArray) {
                try {
                    const validRes: IValidationResult = func(data);
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
        });
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

    // Must call with super
    protected getParentValidityArray(): Array<(value: P) => IValidationResult>/* | Promise<IValidationResult>> */ {
        return this.validityArray;
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

export interface IDataLeafValues {
	[key: string]: object;
}
