import React, {ReactNode} from "react";
import {
    Box,
    Flex,
    HStack,
    IconButton,
    Button,
    useDisclosure,
    useColorModeValue,
    Stack,
    Container,
    Link as ChakraLink,
    ModalHeader,
} from "@chakra-ui/react";
import {HamburgerIcon, CloseIcon} from "@chakra-ui/icons";
import Link from "next/link";
import {ModalBox} from "./Modal/ModalBox";
import {ModalRegister} from "./Modal/ModalRegister";
import {ModalLogin} from "./Modal/ModalLogin";
import {useStore} from "../lib/zustandProvider";


const Links = ["Dashboard", "Projects", "Team"];

const NavLink = ({children}: { children: ReactNode }) => (
    <ChakraLink px={2} py={1} rounded="md">
        {children}
    </ChakraLink>
);

export function Navigation() {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [activeModal, setActiveModal] = React.useState<boolean>(true);
    const user = useStore(state => state.user);


    return <Box bg={useColorModeValue("white", "gray.900")} px={4} boxShadow="0px 4px 12px rgba(207, 207, 207, 0.25)">
        <Container maxW="container.xl">
            <Flex h={16} alignItems="center" justifyContent="space-between">
                <IconButton
                    size="md"
                    icon={isOpen ? <CloseIcon/> : <HamburgerIcon/>}
                    aria-label="Open Menu"
                    display={{md: "none"}}
                    onClick={isOpen ? onClose : onOpen}
                />
                <HStack spacing={8} alignItems={"center"}>
                    <Link href="/">
                        <img src="/static/images/logo.svg" alt="Logo"/>
                    </Link>
                    <HStack as="nav" spacing={4} display={{base: "none", md: "flex"}}>
                        {Links.map((link) => (
                            <NavLink key={link}>{link}</NavLink>
                        ))}
                    </HStack>
                </HStack>
                <Box>
                    {user ? user.fullName
                          : <Button variant="primary" onClick={onOpen}>Login</Button>
                    }
                </Box>
            </Flex>

            {isOpen ? (
                <Box pb={4} display={{md: "none"}}>
                    <Stack as={"nav"} spacing={4}>
                        {Links.map((link) => (
                            <NavLink key={link}>{link}</NavLink>
                        ))}
                    </Stack>
                </Box>
            ) : null}
        </Container>
        <ModalBox isOpen={isOpen} onClose={onClose}>
            <ModalHeader>
                <HStack justifyContent="center" alignItems="baseline">
                    <ChakraLink color={!activeModal ? "green" : "gray"}
                                onClick={() => setActiveModal(false)}>Login</ChakraLink>
                    <span>|</span>
                    <ChakraLink color={activeModal ? "green" : "gray"}
                                onClick={() => setActiveModal(true)}>Register</ChakraLink>
                </HStack>
            </ModalHeader>
            {
                activeModal ? <ModalRegister onClose={onClose}/>
                    : <ModalLogin onClose={onClose}/>
            }
        </ModalBox>
    </Box>
}