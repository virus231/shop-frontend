import React from "react";
import Head from "next/head";
import { Navigation } from "./Navigation";
import { Box, Container as ContainerChakra } from "@chakra-ui/react";
import { Container, Footer } from ".";


export type LayoutProps = {
    children?: React.ReactNode
    title?: string,
    keywords?: string,
    description?: string
}

export function Layout({ title, keywords, description, children }: LayoutProps)
{

    return <Box position="absolute" top={0} bottom={0} left={0} right={0}>
        <Head>
            <title>{title ? title : "Page"}</title>
            <meta name="keywords" content={keywords}/>
            <meta name="description" content={description}/>
            <meta name="viewport" content="initial-scale=1, width=device-width"/>
            <link rel="icon" href="/static/favicon.ico"/>
        </Head>
        <Navigation/>
        <Container>
            <Box flex={1} position="relative">
                <ContainerChakra maxW="container.xl">
                    <>{children}</>
                </ContainerChakra>
            </Box>
        </Container>
        <Footer/>

    </Box>
}