import React from "react";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Layout } from "../../components/Layout";
import { PhoneIcon } from "@chakra-ui/icons";

export default function ProductsPage()
{
    return <Layout title="Products">
        <InputGroup>
            <InputLeftElement
                pointerEvents="none"
                children={<PhoneIcon color="gray.300"/>}
            />
            <Input placeholder="Search"/>
        </InputGroup>
    </Layout>
}