import * as moment from "moment";
import {DataLeaf} from "../";

class DateOfBirth extends DataLeaf<Date> {
    protected validityArray: Array<(value: Date) => boolean> = [
        DateOfBirth.isDate,
    ];

    public getAge(): number {
        return moment().diff(moment(this.value), "years");
    }

    public olderThan(year: number): boolean {
        return this.getAge() >= year;
    }

    private static isDate(value: Date): boolean {
        return (value instanceof Date);
    }
}

export {DateOfBirth};
