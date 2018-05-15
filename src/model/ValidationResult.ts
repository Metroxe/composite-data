import {IValidationResult, IValidationResultItem} from "./IValidationResult";

// this class stores a "state" of validation which may or may not be readily available depending on whether or not
// validation is asynchronous (done via calling an HTTP API, for example)
// when asynchronous, a promise is prepared (but not called) to be accessed through runAsync() so that the result (in
// the form of IValidationResultItem) can be returned
class ValidationResult implements IValidationResult {
	public isAsync: boolean = false;
	public runAsync: () => Promise<IValidationResultItem> = null;
	private valid: boolean;
	private errorMsg?: string;

	constructor(valid?: boolean, errorMsg?: string) {
		// optional if creating an async validation function, in which case the result will be empty until resolved
		this.valid = valid;
		this.errorMsg = errorMsg ? errorMsg : null;
	}

	public getResult(): IValidationResultItem {
		return {
			valid: this.valid,
			errorMsg: this.errorMsg,
		};
	}

	// create the asynchronous validation function to be called later
	public createAsync(func: (f: (res: IValidationResultItem) => void, r: (res: IValidationResultItem) => void) => void): void {
		this.isAsync = true;
		// create the promise without attempting to resolve it
		this.runAsync = (): Promise<IValidationResultItem> => {
			return this.createPromise(func).then((res: IValidationResultItem) => {
				// should always be a successful validation result but assign the errorMsg anyway just in case
				this.valid = res.valid;
				this.errorMsg = res.errorMsg;
				return res;
			}, (err: IValidationResultItem) => {
				// TODO later, maybe handle special cases here where the api fails
				this.valid = err.valid;
				this.errorMsg = err.errorMsg;
				return err;
			});
		};
	}
	// private function to create the promise (mainly for the purpose of "storing" it but not resolving it until later)
	private createPromise(func: (f: (res: IValidationResultItem) => void, r: (res: IValidationResultItem) => void) => void): Promise<IValidationResultItem> {
		return new Promise((f: (res: IValidationResultItem) => void, r: (res: IValidationResultItem) => void): void => {
			func(f, r);
		});
	}
}

export {ValidationResult};
