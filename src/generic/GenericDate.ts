import {DataLeaf} from "../model";

class GenericDate extends DataLeaf<Date> {

    protected validityArray: Array<(value: Date) => boolean> = [
        GenericDate.isDate,
    ];

    private static isDate(value: Date): boolean {
        return (Object.prototype.toString.call(value) === "[object Date]" || value instanceof Date);
    }

}

export {GenericDate};
