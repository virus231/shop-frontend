import React from "react";
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    HStack,
    Input,
    InputGroup,
    ModalBody,
    ModalCloseButton,
    ModalFooter,
    useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { IRegisterFields } from "../../utils/types/IRegisterFields";
import { registerSchema } from "../../utils/validation";
import { mutate } from "swr";
import { registerUser } from "../../services/api/users";
import { setCookie } from "nookies";
import { CheckIcon } from "@chakra-ui/icons";
import useSwr from "swr";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStore } from "../../lib/zustandProvider";


export type PropsModal = {
    onClose: () => void
}

export function ModalRegister({ onClose }: PropsModal)
{
    const toast = useToast();
    const router = useRouter();
    const setUser = useStore(state => state.setUser)

    const { register, handleSubmit, formState: { errors, isSubmitting, isValid } } = useForm<IRegisterFields>({
        mode: "onChange",
        resolver: yupResolver(registerSchema)
    });

    const submit = async (values: IRegisterFields) =>
    {
        try
        {
            const user = await mutate("/auth/signup", registerUser(values));
            console.log(user)
            setCookie(null, "authToken", user.token, {
                maxAge: 30 * 24 * 60 * 60,
                path: "/"
            });
            await router.push("/profile");
            toast({
                title: "Реєстрація успішна",
                status: "success",
                isClosable: true,
                duration: 2500
            });
            setUser({
                id: user.id,
                email: user.email,
                // fullName: user.fullName,
                // createdAt: user.createdAt,
                // updateAt: user.updateAt,
            });
            onClose();
        } catch (e)
        {
            if (e.response)
            {
                toast({
                    title: `${e.response.data.message}`,
                    status: "error",
                    isClosable: true,
                })
            }
        }
    }

    return <>
        <ModalCloseButton/>
        <ModalBody pb={6}>
            <FormControl
                isInvalid={!!errors?.fullName?.message}
                errortext={errors?.fullName?.message}
            >
                <FormLabel>Full name</FormLabel>
                <InputGroup>
                    <Input {...register("fullName")} type="text" name="fullName" placeholder='Full Name'/>
                    {/*{errors?.fullName?.message ? null : <InputRightElement children={<CheckIcon color='green.500'/>}/>}*/}
                </InputGroup>
                <FormErrorMessage>{errors?.fullName?.message}</FormErrorMessage>
            </FormControl>
            <FormControl
                isInvalid={!!errors?.email?.message}
                errortext={errors?.email?.message}
            >
                <FormLabel>Email</FormLabel>
                <InputGroup>
                    <Input {...register("email")} type="email" name="email" placeholder='Email'/>
                    {/*{!!errors?.email?.message && <InputRightElement children={<CheckIcon color='green.500'/>}/>}*/}
                </InputGroup>
                <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors?.password?.message} errortext={errors?.password?.message}>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input {...register("password")} type="password" name="password" placeholder='Password'/>
                    {/*{!!errors?.password?.message && <InputRightElement children={<CheckIcon color='green.500'/>}/>}*/}
                </InputGroup>
                <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
            </FormControl>
        </ModalBody>
        <ModalFooter>
            <Button disabled={!isValid || isSubmitting} onClick={handleSubmit(submit)} colorScheme='blue' mr={3}>
                Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
    </>
}