import {
    HStack, Modal, ModalHeader, ModalOverlay, Link as ChakraLink, ModalContent,
} from "@chakra-ui/react";
import React from "react";


type Props = {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

export function ModalBox({isOpen, onClose, children}: Props) {

    return <Modal autoFocus={false} closeOnEsc={true} motionPreset="slideInBottom" isCentered
                  isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
            {children}
        </ModalContent>
    </Modal>
}