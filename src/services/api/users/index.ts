import axios from "axios";
import { ILoginFields, IRegisterFields, AuthResponse } from "../../../utils/types/IRegisterFields";

const instance = axios.create({
    baseURL: "http://localhost:3000"
})

export const getUsers = async (url) => await instance.get(url);
// export const getMe = async (url) => await instance.get(url);


export const registerUser = async (values: IRegisterFields): Promise<AuthResponse> =>
{
    const { data } = await instance.post<IRegisterFields, { data: AuthResponse }>("/auth/signup", values);
    return data;
}

export const loginUser = async (values: ILoginFields): Promise<AuthResponse> =>
{
    const { data } = await instance.post<ILoginFields, { data: AuthResponse }>("/auth/signin", values);
    return data;
}

export const logoutUser = async () => await instance.post("/auth/signout");


export const getMe = async (token: string) =>
{
    const { data: user} = await instance.get<{ data: AuthResponse }>("/auth/get-me");
    return user;
}
