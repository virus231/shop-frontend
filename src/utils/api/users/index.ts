import axios from "axios";
import {ILoginFields, IRegisterFields, AuthResponse } from "../../types/IRegisterFields";

const instance = axios.create({
    baseURL: "http://localhost:3001"
})

export const getUsers = async (url) =>  await instance.get(url);
// export const getMe = async (url) => await instance.get(url);


export const registerUser = async (values: IRegisterFields): Promise<AuthResponse> => {
   const {data} = await instance.post<IRegisterFields, {data: AuthResponse}>("/auth/register", values);
   return data;
}

export const loginUser = async (values: ILoginFields): Promise<AuthResponse> => {
   const {data} = await instance.post<ILoginFields, {data: AuthResponse}>("/auth/login", values);
   return data;
}

export const getMe = async (token: string) => {
   const {data} = await instance.get<{data: AuthResponse}>("/users/me", {
       headers: { 'Authorization': `Bearer ${token}`}
   });
   console.log(data);
   return data;
}
