import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { ProductItem } from "./Product/ProductItem";


type Props = {
    products: any[];
}

export function Products({ products }: Props)
{
    return <SimpleGrid columns={[1, 1, 2, 3]} spacing={8}>
        {products.map((product: any) => (
            <ProductItem key={product.id} product={product}/>
        ))}
    </SimpleGrid>
}
