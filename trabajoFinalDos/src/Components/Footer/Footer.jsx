import { Box, useColorMode } from "@chakra-ui/react"
import { SectionFooterUno } from "../SectionFooterUno/SectionFooterUno"
import { SectionFooterDos } from "../SectionFooterDos/SectionFooterDos"




const Footer=()=>{

    const { colorMode } = useColorMode();


    return(
        <Box 
            as='footer'
            id="contacto"
            px={{base:"12", sm:"null", md:"10",lg:"14", xl:"16"}}
            bg={colorMode === 'light' ? 'light.primary' : 'dark.primary'}
            color={colorMode === 'light' ? 'light.textPrimary' : 'dark.textPrimary'}
        >
            <SectionFooterUno/>
            <SectionFooterDos/>


        </Box>
    )
}

export {Footer}