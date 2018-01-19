import {DataLeaf} from "../model";

class Password extends DataLeaf<string> {

    protected validityArray: Array<(value: string) => boolean> = [
        Password.isGreaterThanSix,
        DataLeaf.notEmpty,
    ];
    private static passNumsRegex: RegExp = /[0-9]/;
    private static passLowerRegex: RegExp = /[a-z]/;
    private static passUpperRegex: RegExp = /[A-Z]/;
    private static passSpecRegex: RegExp = /[$&+,:;=?@#|'<>.^*()%!-]/;

    public containsNumbers(): boolean {
        return Password.passNumsRegex.test(this.value);
    }

    public containsLowerCase(): boolean {
        return Password.passLowerRegex.test(this.value);
    }

    public containsUpperCase(): boolean {
        return Password.passUpperRegex.test(this.value);
    }

    public containsSpecialCharacters(): boolean {
        return Password.passSpecRegex.test(this.value);
    }

    public isStrongPassword(): boolean {
        const arr: Array<() => boolean> = [
            this.containsNumbers.bind(this),
            this.containsLowerCase.bind(this),
            this.containsUpperCase.bind(this),
            this.containsSpecialCharacters.bind(this),
        ];

        let func: () => boolean;
        for (func of arr) {
           if (!func()) {
               return false;
           }
        }

        return true;
    }

    private static isGreaterThanSix(value: string): boolean {
        return value.length >= 6;
    }
}

export {Password};
