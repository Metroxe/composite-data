import {DataLeaf} from "../";

class Dates extends DataLeaf<Date> {
    protected validityArray : Array<(value : Date) => boolean> = [
        Dates.isDate,
        Dates.isDateYearCheck,
        Dates.isDateMonthCheck,
        Dates.isDateDayCheck,
    ];

    private static isDate(value : Date) : boolean {
        return (value instanceof Date)
    }

    private static isDateYearCheck(value : Date) : boolean {

        let now = new Date();
        let nowYear = Object(now).getFullYear();

        return ((nowYear - Object(value).getFullYear()) >= 18);
    }

    private static isDateMonthCheck(value : Date) : boolean {

        let now = new Date();
        let nowMonth = Object(now).getMonth();

        return ((nowMonth - Object(value).getMonth()) >= 0);
    }

    private static isDateDayCheck(value : Date) : boolean {

        let now = new Date();

        // leap year check
        let nowDate = Object(now);
        if (Object(value) % 4 == 0 && (Object(value) % 100 != 0 || Object(value) % 400 == 0)){
            // returns milliseconds using .getTime(); converted to days by dividing
            return (((nowDate.getTime() / 8.64e+7) - (Object(value).getTime() / 8.64e+7)) >= 6570 /* days in 18 years */ );
        }
        else {
            return ((nowDate.getDate() - Object(value).getDate()) >= 0 );
        }
    }
}

export {Dates}

