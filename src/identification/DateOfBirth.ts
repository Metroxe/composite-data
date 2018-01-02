import {DataLeaf} from "../";
import * as moment from "moment"

class DateOfBirth extends DataLeaf<Date> {
    protected validityArray : Array<(value : Date) => boolean> = [
        DateOfBirth.isDate
    ];

    private static isDate(value : Date) : boolean {
        return (value instanceof Date)
    }

    public getAge() : number {
        return moment().diff(moment(this.value), 'years')
    }

    public olderThan(year : number) : boolean {
        return this.getAge() >= year
    }
}

export {DateOfBirth}

