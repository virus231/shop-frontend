export interface ILoginFields {
    email: string;
    password: string;
}
export interface IRegisterFields extends ILoginFields {
    fullName: string;
}

export type AuthResponse = {
    createdAt: Date
    email: string
    fullName: string
    id: number
    token: string
    updateAt: Date
}