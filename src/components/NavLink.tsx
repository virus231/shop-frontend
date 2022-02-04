import React, { ReactNode } from "react";
import { Link } from "@chakra-ui/react";


export const NavLink = ({ children }: { children: ReactNode }) => (
    <Link px={2} py={1} rounded="md">
        {children}
    </Link>
);