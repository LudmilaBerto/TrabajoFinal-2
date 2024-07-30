import { Box, Flex } from "@chakra-ui/react"
import { Hero } from "../Hero/Hero"
import { SectionDos } from "../SectionDos/SectionDos"
import { SectionTres } from "../SectionTres/SectionTres"
import { SectionCuatro } from "../SectionCuatro/SectionCuatro"


const Main=()=>{

    return(
        <Box as="main" bg='background.light'>
         <Hero/>
         <SectionDos/>
         <SectionTres/>
         <SectionCuatro/>
         
        </Box>
    )
}

export {Main}