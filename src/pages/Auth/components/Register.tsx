import React, {useState} from "react";
import {
    AUTH_COMPILING,
    P_PROPS_TYPE,
    PASS_REGEXP, SUCCESSFUL_REGISTER,
    USERNAME_REGEXP,
    WRONG_NAME,
    WRONG_PASS,
    WRONG_REGULAR_AUTH,
    WRONG_S_PASS
} from "../../constants";
import {Button, TextField} from "@mui/material";
import {Utils} from "../../../scripts/Utils";
import {toast} from "react-toastify";
import {Navigate} from "react-router-dom";


export default function Register() {
    const [nameValidate, setNameValidate] = useState(true),
        [passValidate, setPassValidate] = useState(true),
        [passValue, setPassValue] = useState<string>(""),
        [passSValidate, setPassSValidate] = useState(true)


    function onChangeNameAction({target}: React.ChangeEvent<HTMLInputElement>) {
        const isValid = Utils.validateRegular(target.value, USERNAME_REGEXP)
        setNameValidate(isValid)
    }

    function onChangePassAction({target}: React.ChangeEvent<HTMLInputElement>) {
        const isValid = Utils.validateRegular(target.value, PASS_REGEXP)
        setPassValue(target.value)
        setPassValidate(isValid)
    }

    function onChangePassSAction({target}: React.ChangeEvent<HTMLInputElement>) {
        const isValid = passValue === target.value
        setPassSValidate(isValid)
    }

    function registerAction() {
        if (!nameValidate && !passValidate && !passSValidate) {
            toast.error(WRONG_REGULAR_AUTH)
            return;
        }
        toast.success(SUCCESSFUL_REGISTER)
        return
    }

    return (
        <div className="register-container">
            <div className="container-inputs">
                <TextField helperText={!nameValidate && WRONG_NAME} error={!nameValidate} onChange={onChangeNameAction}
                           margin="dense" fullWidth label="Ваше имя" variant="outlined"/>
                <TextField helperText={!passValidate && WRONG_PASS} error={!passValidate} onChange={onChangePassAction}
                           margin="normal" fullWidth label="Ваш пароль" variant="outlined" type="password"/>
                <TextField helperText={!passSValidate && WRONG_S_PASS} error={!passSValidate}
                           onChange={onChangePassSAction} margin="normal" fullWidth label="Повтор пароля"
                           variant="outlined" type="password"/>
            </div>
            <div className="container-button">
                <Button onClick={registerAction} variant="contained">Регистрация</Button>
            </div>
        </div>
    )
}