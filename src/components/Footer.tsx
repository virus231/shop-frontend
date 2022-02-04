import { Box, Container, Flex, FlexProps, Stack, useColorModeValue } from '@chakra-ui/react'
import React from 'react';
import { Links } from '../utils/constants';
import { renderLinks } from '../utils/functions';
import { SocialButton } from './SocialButton';

export const Footer = (props) =>
{
    return (
        <Box bg={useColorModeValue("white", "gray.900")}
             boxShadow="0px -7px 80px rgba(189, 189, 189, 0.25)"
             color={useColorModeValue('gray.700', 'gray.200')}>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                spacing={4}
                justify={'center'}
                align={'center'}>
                {/*<Logo/>*/}
                <Stack direction={'row'} spacing={6}>
                    {renderLinks(Links)}
                </Stack>
            </Container>

            <Box
                borderTopWidth={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.700')}>
                <Container
                    as={Stack}
                    maxW={'6xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'center', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}>
                    {/*<Text>© 2020 Chakra Templates. All rights reserved</Text>*/}
                    <Stack direction={'row'} spacing={6}>
                        <SocialButton label={'Twitter'} href={'#'}>
                            {/*<FaTwitter/>*/}
                        </SocialButton>
                        <SocialButton label={'YouTube'} href={'#'}>
                            {/*<FaYoutube/>*/}
                        </SocialButton>
                        <SocialButton label={'Instagram'} href={'#'}>
                            {/*<FaInstagram/>*/}
                        </SocialButton>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}
