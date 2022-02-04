import { Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import React from "react";


type Props = {
    title: string;
    button: React.ReactNode;
}

export const HeaderSection = ({title,button }: Props) => {
    return <Flex my="40px">
        <Heading>{title}</Heading>
        <Spacer/>
        {button}
    </Flex>
}