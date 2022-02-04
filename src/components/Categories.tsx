import { Button, HStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { productsMock } from "../Mock/mock";


type Props = {
    products: any[]
    setProducts: (categories: any[]) => void;
}

export function Categories({ setProducts, products }: Props)
{

    const uniqueCategories = [...new Set(productsMock.map((products) => products.category))];

    const filterSearch = (category: string) =>
    {
        const newData = productsMock.filter((products) => products.category === category);
        setProducts(newData);
    };

    return <HStack spacing="8" my="20px">
        <Button variant="outline" onClick={() => setProducts(productsMock)}>All</Button>
        {uniqueCategories.map((category: string) => <Button key={category}
                                                            onClick={() => filterSearch(category)}
                                                            variant="outlined">
            {category.toUpperCase()}
        </Button>)}
    </HStack>
}