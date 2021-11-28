import {toast} from "react-toastify";

type UrlItem = {
    link: string,
    type: string
}

type URLSList = {
    [key: string]: UrlItem
}

type ExportObjType = {
    [key: string]: Function
}

type ServiceProps = {
    data?: BodyInit,
    cb?: Function,
    headers?: HeadersInit,
}

export const Services = (() => {
    const HOST = 'localhost',
        PORT = '5050',
        APP = {
            USER: 'user',
            MESSAGE: 'message'
        },
        URLs: URLSList = {
            loginUser: {link: APP.USER + '/loginUser', type: 'POST'},
            checkToken: {link: APP.USER + '/checkToken', type: 'POST'}
        }

    let exportObj: ExportObjType = {}


    for (let key in URLs) {
        const urlItem = URLs[key],
            fullUrl = `http://${HOST}:${PORT}/${urlItem.link}`

        exportObj[key] = function (obj: ServiceProps) {
            fetch(fullUrl, {
                method: urlItem.type,
                body: JSON.stringify(obj.data),
                headers: {...obj.headers, 'Content-Type': 'application/json'},
            })
                .then(response => response.json())
                .then(response => {
                    if (response.code === 1) {
                        toast.error(response.data[0]['message'])
                    } else {
                        obj.cb && obj.cb(response)
                    }
                })
        }
    }

    return exportObj
})()