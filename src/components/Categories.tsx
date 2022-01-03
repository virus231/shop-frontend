import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { mock } from "../Mock/mock";

export function Categories()
{
    return <HStack spacing="8" mt="40px">
        {mock.map(c => <Button key={c} variant="outlined">
            {c.toUpperCase()}
        </Button>)}
    </HStack>
}