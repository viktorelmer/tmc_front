import React, {useState} from "react";
import {
    AUTH_COMPILING,
    PASS_REGEXP, REQUEST_DATA, SUCCESSFUL_AUTH,
    USERNAME_REGEXP,
    WRONG_NAME,
    WRONG_PASS,
    WRONG_REGULAR_AUTH
} from "../../constants";
import {Button, TextField} from "@mui/material";
import {Utils} from "../../../scripts/Utils";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Services} from "../../../scripts/Services";


export default function Login() {
    const [nameValidate, setNameValidate] = useState(true),
        [passValidate, setPassValidate] = useState(true)

    const [name, setName] = useState(''),
        [pass, setPass] = useState('')


    //cb
    function loginUserCallback(response: REQUEST_DATA) {
        const data = response["data"]
        toast.success(SUCCESSFUL_AUTH)
    }


    //api
    function loginUser() {
        const obj = {
            'username': name,
            'password': pass
        }

        Services.loginUser({"data": obj, "cb": loginUserCallback})
    }

    //actions
    function onChangeNameAction({target}: React.ChangeEvent<HTMLInputElement>) {
        const isValid = Utils.validateRegular(target.value, USERNAME_REGEXP)
        setName(target.value)
        setNameValidate(isValid)
    }

    function onChangePassAction({target}: React.ChangeEvent<HTMLInputElement>) {
        const isValid = Utils.validateRegular(target.value, PASS_REGEXP)
        setPass(target.value)
        setPassValidate(isValid)
    }

    function loginAction() {
        if (!nameValidate && !passValidate) {
            toast.error(WRONG_REGULAR_AUTH)
            return;
        }
        loginUser()
    }

    return (
        <div className="login-container">
            <div className="container-inputs">
                <TextField helperText={!nameValidate && WRONG_NAME} error={!nameValidate} onChange={onChangeNameAction} margin="dense" fullWidth label="Ваше имя" variant="outlined" />
                <TextField helperText={!passValidate && WRONG_PASS} error={!passValidate} onChange={onChangePassAction} margin="normal" fullWidth label="Ваш пароль" variant="outlined" type="password"/>
            </div>
            <div className="container-button">
                <Button onClick={loginAction} variant="contained">Войти</Button>
            </div>
        </div>
    )
}