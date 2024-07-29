import { Flex } from "@chakra-ui/react"
import { Nav } from "../Nav/Nav.jsx"
import { ContactoFooter } from "../ContactoFooter/ContactoFooter.jsx"


const SectionFooterDos=()=>{


    return(
        <Flex 
            as='section'
            className="Footer-section-dos"
            justify='space-between'
            align='center'
            h='24'
            
        >
            {/* EXPORTO EL COMPONENTE NAV Y EL COMPONENTE ContactoFooter */}
            <Nav />
            <ContactoFooter/>


        </Flex>
    )
}

export {SectionFooterDos}