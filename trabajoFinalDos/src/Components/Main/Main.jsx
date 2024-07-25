import { Box, Flex } from "@chakra-ui/react"
import { Hero } from "../Hero/Hero"
import { SectionDos } from "../SectionDos/SectionDos"


const Main=()=>{

    return(
        <Box as="main">
         <Hero/>
         <SectionDos/>
         
        </Box>
    )
}

export {Main}