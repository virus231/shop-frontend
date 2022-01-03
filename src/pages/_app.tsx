import React from "react";
import {Box, ChakraProvider, useToast} from "@chakra-ui/react";
import theme from "../theme/theme";
import {AppProps} from "next/app";
import {SWRConfig} from "swr";
import {useHydrate} from "../store";
import { StoreProvider } from "../lib/zustandProvider";


function MyApp({Component, pageProps}: AppProps) {
    const toast = useToast()
    const store = useHydrate(pageProps.initialZustandState)

    return (
        <StoreProvider store={store}>
            <ChakraProvider theme={theme}>
                <SWRConfig value={{
                    onError: (error, key) => {
                        if (error) {
                            toast({
                                duration: 3000,
                                position: 'bottom-left',
                                render: () => (
                                    <Box color="white" p="15px" bg='red'>
                                        Error
                                    </Box>
                                ),
                            })
                        }
                    }
                }}>
                    <Component {...pageProps} />
                </SWRConfig>
            </ChakraProvider>
        </StoreProvider>
    )
}

export default MyApp
