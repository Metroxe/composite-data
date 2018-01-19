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

    protected static noWhiteSpace(value: string): boolean {
        return !(value.indexOf(" ") > 0);
    }

    protected static notEmpty(value: string): boolean {
        return value.length > 0;
    }

    protected static booleanCheck(value: boolean): boolean {
        return (typeof(value) === "boolean");
    }

    protected static isAlphaNumeric(value: string): boolean {
        let code: number;
        let i: number;
        let len: number;

        for (i = 0, len = value.length; i < len; i++) {
            code = value.charCodeAt(i);
            if (!(code > 47 && code < 58) && // numeric (0-9)
                !(code > 64 && code < 91) && // upper alpha (A-Z)
                !(code > 96 && code < 123)) { // lower alpha (a-z)
                return false;
            }
        }
        return true;
    }
}

export {DataLeaf};
