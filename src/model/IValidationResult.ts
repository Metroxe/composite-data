export interface IValidationResult {
    isAsync: boolean;
    createAsync?: (func: (f: (res: IValidationResultItem) => void, r: (err: IValidationResultItem) => void) => void) => void;
    runAsync?: () => Promise<IValidationResultItem>;
    getResult: () => IValidationResultItem;
}
export interface IValidationResultItem {
    // if the validation is asynchronous, then the following variables are empty until the promise is resolved
    valid?: boolean;
    errorMsg?: string;
}
