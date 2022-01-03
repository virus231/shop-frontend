import React from "react";
import {Box} from "@chakra-ui/react";
import {Layout} from "../components/Layout";
import { initializeStore } from "../store";
import { useStore } from "../lib/zustandProvider";


export default function ProfilePage() {
    const users = useStore(state => state.user);

    return <Layout title="Profile">
        Profile
    </Layout>
}

export function getServerSideProps() {
    const zustandStore = initializeStore();

    return {
        props: {initialZustandState: JSON.stringify(zustandStore.getState())},
    }
}