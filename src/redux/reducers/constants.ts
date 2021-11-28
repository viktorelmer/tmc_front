export const AUTH_SLICE_NAME: string = 'auth'
export const AUTH_INITIAL_STATE: boolean = true


export const USER_SLICE_NAME: string = 'user'

export type U_INITIAL = {
    userId: number | null,
    userName: string,
    userPass: string,
}

export const USER_INITIAL_STATE: U_INITIAL = {
    userId: null,
    userName: '',
    userPass: '',
}