import { Box } from "@chakra-ui/react"
import { SectionFooterUno } from "../SectionFooterUno/SectionFooterUno"




const Footer=()=>{



    return(
        <Box 
            as='footer'
            px='14'
            color='color.secundario'
            bg='color.principal'
        >
            <SectionFooterUno/>


        </Box>
    )
}

export {Footer}