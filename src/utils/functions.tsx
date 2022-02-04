import React from "react";
import { NavLink } from "../components/NavLink";

export const renderLinks = (links: string[]) => links.map((link) => <NavLink key={link}>{link}</NavLink>);


