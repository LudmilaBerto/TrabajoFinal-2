import { Flex, useColorMode } from "@chakra-ui/react"
import { Nav } from "../Nav/Nav.jsx"
import { ContactoFooter } from "../ContactoFooter/ContactoFooter.jsx"


const SectionFooterDos=()=>{

    const { colorMode } = useColorMode();

    return(
        <Flex 
            as='section'
            className="Footer-section-dos"
            justify='space-between'
            align='center'
            h={{base:"50px", sm:"70px",md:"null", lg:"90px", xl:"null"}}
            bg={colorMode === 'light' ? 'light.primary' : 'dark.primary'}
            color={colorMode === 'light' ? 'light.textPrimary' : 'dark.textPrimary'}
            
        >
            {/* EXPORTO EL COMPONENTE NAV Y EL COMPONENTE ContactoFooter */}
            <Nav />
            <ContactoFooter/>


        </Flex>
    )
}

export {SectionFooterDos}