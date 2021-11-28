import React from "react";
import {Navigate, Route, RouteProps} from "react-router-dom";
import {} from "@reduxjs/toolkit"
import {useAppSelector} from "../../redux/hooks";
import {RootState} from "../../redux/store";
import {USER_ID, USERNAME, USERPASS} from "../../pages/constants";
import {U_INITIAL} from "../../redux/reducers/constants";

type PrivateProps = {
    element: Function
}



export default function PrivateRouter({element: Element}: PrivateProps) {

    const IS_AUTH:boolean = useAppSelector((state:RootState) => state.auth),
        USER:U_INITIAL = useAppSelector((state:RootState) => state.user)


    if (!IS_AUTH) {
        return <Navigate to="/" />
    }

    return <Element isAuth={IS_AUTH} {...USER}/>
}