import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

export default class Document extends NextDocument
{
    public render()
    {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Lexend:wght@100;300;400;500;700;900&display=swap"
                        rel="stylesheet"/>
                </Head>
                <body>
                    {/* Make Color mode to persists when you refresh the page. */}
                    <ColorModeScript/>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}
