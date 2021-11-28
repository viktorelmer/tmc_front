import React from "react";


import {TabsObject} from "../../component/constants";

import Tabs from "../../component/Tabs/Tabs";
import Login from "./components/Login";
import Register from "./components/Register";

import './Auth.scss'

const tabsTitle: Array<TabsObject> = [
    {title: 'Вход', component: Login},
    {title: 'Регистрация', component: Register},
]

export default function Auth() {


    return (
        <div className="auth-container">
            <Tabs tabsArray={tabsTitle}/>
        </div>
    )
}
