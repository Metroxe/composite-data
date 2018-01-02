import {DataLeaf} from "../model/DataLeaf";

class Password extends DataLeaf<string>{
    protected validityArray : Array<(value : string) => boolean> = [
        Password.isGreaterThanSix,
        DataLeaf.notEmpty
    ];

    private static isGreaterThanSix(value : string) : boolean {
        return value.length >= 6;
    }

    /* Checking for strong passwords */

    public containsNumbers() : boolean {
        let passNums = /[0-9]/;
        return passNums.test(this.value);
    }

    public containsLowerCase() : boolean {
        let passLower = /[a-z]/;
        return passLower.test(this.value);
    }

    public containsUpperCase() : boolean {
        let passUpper = /[A-Z]/;
        return passUpper.test(this.value);
    }

    public containsSpecialCharacters() : boolean {
        let passSpec = /[$&+,:;=?@#|'<>.^*()%!-]/;
        return passSpec.test(this.value);
    }

    public isStrongPassword() : boolean {
        let arr : Array<() => boolean> = [
            this.containsNumbers.bind(this),
            this.containsLowerCase.bind(this),
            this.containsUpperCase.bind(this),
            this.containsSpecialCharacters.bind(this)
        ];

        for(let i = 0; i < arr.length; i++) {
           let func : ()=> boolean = arr[i];
           if (!func()){
               return false;
           }
        }

        return true;
    }
}

export {Password}