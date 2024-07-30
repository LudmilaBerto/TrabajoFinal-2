import { Box } from "@chakra-ui/react"
import { SectionFooterUno } from "../SectionFooterUno/SectionFooterUno"
import { SectionFooterDos } from "../SectionFooterDos/SectionFooterDos"




const Footer=()=>{



    return(
        <Box 
            as='footer'
            id="contacto"
            color='color.secundario'
            bg='background.light'
            px='14'
        >
            <SectionFooterUno/>
            <SectionFooterDos/>


        </Box>
    )
}

export {Footer}