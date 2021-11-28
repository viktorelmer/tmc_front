import React, {useEffect, useState} from "react";

import Alert, {AlertColor} from '@mui/material/Alert';
import {Collapse} from "@mui/material";
import Stack from '@mui/material/Stack';

import './Alerts.scss'


interface AlertObject {
    type: AlertColor,
    text: string,
    time: number
}

type AlertType<Obj> = {
    [key: number | string]: Obj
}

export default function Alerts() {
    const [alerts, setAlerts] = useState<AlertType<AlertObject>>({})


    function addAlert(type: AlertColor, text: string, time: number) {
        const id = Object.keys(alerts).length
        setAlerts({...alerts, [id]: {type: type, text: text, time: time}})
        setTimeout(() => {
            let newArr = alerts
            delete newArr[id]
            setAlerts({...newArr})
        }, time * 1000)
        }
    useEffect(() => {
        addAlert("success", "hello 1", 3)
        addAlert("success", "hello 2", 4)
        addAlert("success", "hello 3", 2)
        addAlert("success", "hello 4", 5)
    }, [])


    return (
        <div className="alert-container">
            <Stack sx={{width: '400px'}} spacing={2}>
                {Object.keys(alerts).map(key =>
                    <Alert severity={alerts[key]['type'] || "info"}>{alerts[key]['text']}</Alert>
                )}
            </Stack>
        </div>
    )
}