import * as moment from "moment";
import {GenericDate} from "../";

class DateOfBirth extends GenericDate {
    public getAge(): number {
        return moment().diff(moment(this.value), "years");
    }

    public olderThan(year: number): boolean {
        return this.getAge() >= year;
    }
}

export {DateOfBirth};
