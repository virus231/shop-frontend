import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { ProductItem } from "./Product/ProductItem";
import { products } from "../Mock/mock";

export function Products()
{
    return <SimpleGrid columns={[2, null, 3]} spacing={10} mt="30px">
        {products.map((product, i) => <ProductItem key={i} product={product}/>)}
    </SimpleGrid>
}