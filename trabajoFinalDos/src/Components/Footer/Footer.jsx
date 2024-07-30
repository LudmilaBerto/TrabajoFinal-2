import { Box, useColorMode } from "@chakra-ui/react"
import { SectionFooterUno } from "../SectionFooterUno/SectionFooterUno"
import { SectionFooterDos } from "../SectionFooterDos/SectionFooterDos"




const Footer=()=>{

    const { colorMode } = useColorMode();


    return(
        <Box 
            as='footer'
            id="contacto"
            px='14'
            bg={colorMode === 'light' ? 'light.primary' : 'dark.primary'}
            color={colorMode === 'light' ? 'light.textPrimary' : 'dark.textPrimary'}
        >
            <SectionFooterUno/>
            <SectionFooterDos/>


        </Box>
    )
}

export {Footer}