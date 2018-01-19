import {DataLeaf} from "../model";

class State extends DataLeaf<string> {
    protected validityArray: Array<(value: string) => boolean> = [
        DataLeaf.notEmpty,
        State.checkEnumStates,
    ];

    private static checkEnumStates(value: statesEnum): boolean {
        const capState: string = value.toUpperCase();

        let usState: string;
        for (usState in statesEnum) {
            if (capState === usState) {
                return true;
            }
        }
        return false;
    }
}

enum statesEnum {
    AK = "AK",
    AL = "AL",
    AR = "AR",
    AS = "AS",
    AZ = "AZ",
    CA = "CA",
    CO = "CO",
    CT = "CT",
    DC = "DC",
    DE = "DE",
    FL = "FL",
    GA = "GA",
    GU = "GU",
    HI = "HI",
    IA = "IA",
    ID = "ID",
    IL = "IL",
    IN = "IN",
    KS = "KS",
    KY = "KY",
    LA = "LA",
    MA = "MA",
    MD = "MD",
    ME = "ME",
    MI = "MI",
    MN = "MN",
    MO = "MO",
    MS = "MS",
    MT = "MT",
    NC = "NC",
    ND = "ND",
    NE = "NE",
    NH = "NH",
    NJ = "NJ",
    NM = "NM",
    NV = "NV",
    NY = "NY",
    OH = "OH",
    OK = "OK",
    OR = "OR",
    PA = "PA",
    PR = "PR",
    RI = "RI",
    SC = "SC",
    SD = "SD",
    TN = "TN",
    TX = "TX",
    UT = "UT",
    VA = "VA",
    VI = "VI",
    VT = "VT",
    WA = "WA",
    WI = "WI",
    WV = "WV",
    WY = "WY",
}

export {statesEnum, State};
