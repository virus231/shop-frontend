import React from "react";
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    useToast,
    InputGroup,
    InputRightElement
} from "@chakra-ui/react";
import { PropsModal } from "./ModalRegister";
import { useForm } from "react-hook-form";
import { ILoginFields } from "../../utils/types/IRegisterFields";
import { loginUser } from "../../services/api/users";
import { loginSchema } from "../../utils/validation";
import { setCookie } from "nookies";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useStore } from "../../lib/zustandProvider";


export function ModalLogin({ onClose }: PropsModal)
{
    const toast = useToast();
    const router = useRouter();
    const setUser = useStore(state => state.setUser)

    const { register, handleSubmit, formState: { errors, isSubmitting, isValid } } = useForm<ILoginFields>({
        mode: "onChange",
        resolver: yupResolver(loginSchema)
    });

    const submit = async (values: ILoginFields) =>
    {
        try
        {
            const user = await loginUser(values);
            setCookie(null, "authToken", user.token, {
                maxAge: 30 * 24 * 60 * 60,
                path: "/"
            });
            await router.push("/profile");
            toast({
                title: "Вхід успішний",
                status: "success",
                isClosable: true,
                duration: 2500
            });
            console.log(user);
            setUser({
                id: user.id,
                email: user.email,
                fullName: user.fullName,
                createdAt: user.createdAt,
                updateAt: user.updateAt,
            });
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
            <FormControl isInvalid={!!errors?.email?.message}
                         errortext={errors?.email?.message}
            >
                <FormLabel>Email</FormLabel>
                <InputGroup>
                    <Input {...register("email")} type="email" name="email" placeholder='Email'/>
                    {/*{!!errors?.email?.message && <InputRightElement children={<CheckIcon color='green.500'/>}/>}*/}
                </InputGroup>
            </FormControl>

            <FormControl mt={4} isInvalid={!!errors?.password?.message} errortext={errors?.password?.message}>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input {...register("password")} type="password" name="password" placeholder='Password'/>
                    {/*{!!errors?.password?.message && <InputRightElement children={<CheckIcon color='green.500'/>}/>}*/}
                </InputGroup>
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