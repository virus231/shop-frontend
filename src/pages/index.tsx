import { Heading, Spacer, Button, Flex, Grid, GridItem, Box } from "@chakra-ui/react"
import React from "react"
import Link from "next/link";
import { useRequest } from "../hooks/useRequest";
import useSwr from "swr";
import { getMe, getUsers } from "../services/api/users";
import { useStore } from "../lib/zustandProvider";
import { GetServerSideProps, GetStaticProps } from "next";
import { parseCookies } from "nookies";
import { Categories, Hero, Layout, Products } from "../components";
import { HeaderSection } from "../components/HeaderSection";
import { productsMock } from "../Mock/mock";
import { useState } from "react";


export default function Index({ user })
{
    const [products, setProducts] = useState(productsMock);

    console.log({ user }, "index");
    return <Layout title="Main Page">
        <Hero/>
        <HeaderSection title="Our Products." button={<Button color="brand.green_brand" variant="outlined">
            <Link href="/products">
                View All
            </Link>
        </Button>}
        />
        <Categories setProducts={setProducts} products={products}/>
        <Products products={products}/>
        <Box mb="30px">
            <HeaderSection title="Our blog." button={<Button color="brand.green_brand" variant="outlined">
                <Link href="/blog">
                    Go to our blog
                </Link>
            </Button>}
            />
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
        </Box>
    </Layout>
}

export const getServerSideProps: GetServerSideProps = async (ctx) =>
{
    try
    {
        const { authToken } = parseCookies(ctx);
        const user = await getMe(authToken);

        return {
            props: { user }
        }
    } catch (e)
    {
        return {
            props: {}
        }
    }
}

