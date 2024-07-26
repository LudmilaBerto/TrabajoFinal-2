import { Box, Flex } from "@chakra-ui/react"
import { Hero } from "../Hero/Hero"
import { SectionDos } from "../SectionDos/SectionDos"
import { SectionTres } from "../SectionTres/SectionTres"


const Main=()=>{

    return(
        <Box as="main">
         <Hero/>
         <SectionDos/>
         <SectionTres/>
         
        </Box>
    )
}

export {Main}