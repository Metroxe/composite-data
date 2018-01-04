import {Data} from "./";
import {Observer} from "./Observer";

abstract class DataLeaf<T> implements Data {
    protected value: T;
    protected abstract validityArray: Array<(value: T) => boolean>;
    private observers: Set<Observer> = new Set<Observer>();

    public constructor(value?: T) {
        if (value !== undefined || value !== null) this.value = value;
    }

    public getValue(): T {
        return this.value;
    }

    public getComponent(): DataLeaf<T> {
        return this;
    }

    public set(value: T, force?: boolean): boolean | Promise<boolean> {
        if (force || this.isValid(value)) {
            this.value = value;
            this.updateObservers();
            return true;
        }

        return false;
    }

    public isValid(value?: T): boolean | Promise<boolean> {
        let v;

        if (value !== null && typeof value !== "undefined")
            v = value;
        else
            v = this.value;

        if (v !== null && typeof v !== "undefined") {
            for (let func of this.validityArray) {
                if (!func(v)) return false;
            }
        } else return false;

        return true;
    }

    public updateObservers(): void {
        for (let observer of this.observers) {
            observer.updateSelf(this.getValue());
        }
    }

    public addObserver(observer: Observer): void {
        this.observers.add(observer);
    }

    // fastest method
    // https://stackoverflow.com/questions/4434076/best-way-to-alphanumeric-check-in-javascript
    protected static isAlphaNumeric(value: string) {
        let code, i, len;

        for (i = 0, len = value.length; i < len; i++) {
            code = value.charCodeAt(i);
            if (!(code > 47 && code < 58) && // numeric (0-9)
                !(code > 64 && code < 91) && // upper alpha (A-Z)
                !(code > 96 && code < 123)) { // lower alpha (a-z)
                return false;
            }
        }
        return true;
    };

    protected static noWhiteSpace(value: string): boolean {
        return !(value.indexOf(' ') > 0);
    }

    protected static notEmpty(value: string): boolean {
        return value.length > 0;
    }

    protected static booleanCheck(value: boolean): boolean {
        return (typeof(value) === "boolean");
    }
}

export {DataLeaf}