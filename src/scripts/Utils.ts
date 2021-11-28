import {DOMElement} from "react";

class UtilsClass {


    validateRegular(value: string, regExp: RegExp) {
        return regExp.test(value)
    }
}

export const Utils = new UtilsClass()

