import {IData, IDataMap} from "./";
import {IObserver} from "./Observer";
import {IValidationResult} from "./IValidationResult";
import {ValidationResult} from "./ValidationResult";

export class DataComposite<P extends IDataMap> implements IData, IObserver {
    protected dataMap: P;
    protected validityArray: Array<(data?: IDataLeafValues) => IValidationResult> = [];
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

    public set(dataMap: P, force?: boolean): IValidationResult/* | Promise<IValidationResult>*/ {

        if (force) {
            this.dataMap = dataMap;
            this.addSelfAsObserver();
            return this.isValid();
        }

        if (this.isValid(dataMap)) {
            this.dataMap = dataMap;
            this.addSelfAsObserver();
            return new ValidationResult(true);
        }

        return new ValidationResult(false);
    }

    public isValid(data?: IDataLeafValues): IValidationResult/* | Promise<IValidationResult>*/ {
        // Check Validity Array
        let func: (data?: IDataLeafValues) => IValidationResult;
        for (func of this.validityArray) {
            const validRes: IValidationResult = func(data);
            if (!validRes.valid) {
                return validRes;
            }
        }
        return new ValidationResult(true);
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
    protected getParentValidityArray(): Array<(value: P) => IValidationResult> {
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
