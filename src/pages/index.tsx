import {
    Link as ChakraLink,
    Text,
    Code,
    List,
    ListIcon,
    ListItem,
    Box, Heading, Spacer, Button, Flex, Grid, GridItem,
} from "@chakra-ui/react"
import {Hero} from "../components/Hero"
import React from "react"
import {Layout} from "../components/Layout";
import {Categories} from "../components/Categories";
import {Products} from "../components/Products";
import Link from "next/link";
import {useRequest} from "../hooks/useRequest";
import useSwr from "swr";
import {getMe, getUsers} from "../utils/api/users";
import {useStore} from "../lib/zustandProvider";
import {GetServerSideProps, GetStaticProps} from "next";
import {parseCookies} from "nookies";
import useSWR from "swr";


export default function Index({user}) {

    console.log(user);

    return <Layout title="Main Page">
        <Hero/>
        <Flex mt="40px">
            <Heading>
                Our Products.
            </Heading>
            <Spacer/>
            <Button color="brand.green_brand" variant="outlined">
                <Link href="/products">
                    View All
                </Link>
            </Button>
        </Flex>
        <Categories/>
        <Products/>
        <Flex mt="40px">
            <Heading>
                Our blog.
            </Heading>
            <Spacer/>
            <Button color="brand.green_brand" variant="outlined">
                Go to our blog
            </Button>
        </Flex>
        <Grid h="200px"
              templateRows="repeat(2, 1fr)"
              templateColumns="repeat(5, 1fr)"
              gap={4}
        >
            <GridItem rowSpan={2} colSpan={1} bg="tomato"/>
            <GridItem colSpan={2} bg="papayawhip"/>
            <GridItem colSpan={2} bg="papayawhip"/>
            <GridItem colSpan={4} bg="tomato"/>
        </Grid>
    </Layout>
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    try {
        const {authToken} = parseCookies(ctx);
        const user = getMe(authToken);

        return {
            props: {
                user: user,
            }
        }
    } catch (e) {
        console.log(e)
        return {
            props: {}
        }
    }
}

