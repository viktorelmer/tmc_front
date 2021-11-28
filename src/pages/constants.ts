export type P_PROPS_TYPE = {
    isAuth: boolean,
    userId: number | null,
    userName: string,
    userPass: string
}

export const USER_ID = 'userId'
export const USERNAME = 'userName'
export const USERPASS = 'userPass'


/*
    Password regexp explanation
    Contain at least 8 characters
    contain at least 1 number
    contain at least 1 lowercase character (a-z)
    contain at least 1 uppercase character (A-Z)
    contains only 0-9a-zA-Z
 */
export const PASS_REGEXP = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
/*
    Username regexp explanation
    Contain only letter and numbers
 */
export const USERNAME_REGEXP = /^[A-Za-z .]{3,15}$/


export const WRONG_NAME = "Длина имени от 3 до 15 букв, только латинские знаки"
export const WRONG_PASS = "Длина пароля от 8 букв, минимум одна прописная и обычная, только цифры и буквы английского алфавита"
export const WRONG_S_PASS = "Пароли не совпадают "

export const WRONG_REGULAR_AUTH = "Введите корректные данные!"
export const AUTH_COMPILING = "Выполняем вход"
export const SUCCESSFUL_REGISTER = "Регистрация выполнена"
export const SUCCESSFUL_AUTH = "Успешный вход"

type REQ_IN_D = {
    [key: string | number]: any
}

export type REQUEST_DATA = {
    data: Array<REQ_IN_D>,
    code: 0 | 1,
    status: number
}