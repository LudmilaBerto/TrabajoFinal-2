import { Box, Flex, Text, useColorMode } from "@chakra-ui/react"
import { SectionTresB } from "../SectionTresB/SectionTresB"
import { MedioCirculo } from "../MedioCirculo/MedioCirculo";


const SectionTres=()=>{

    const { colorMode } = useColorMode();


    return(
        <Flex 
            id="miexperiencia"
            as='section' 
            className="SectionTres"
            justify='space-between'
            py='8'
            px='14'
            bg={colorMode === 'light' ? 'light.primary' : 'dark.primary'}
            color={colorMode === 'light' ? 'light.textPrimary' : 'dark.textPrimary'} 
            flexWrap='wrap'
        >

            <Box 
                as='div'
                className="SectionTresA" 
                flexBasis={{base:"100%",md:"30%", xl:"40%"}}

                pt='9'
            >

                <MedioCirculo/>

                <Text
                    as='h2'
                    fontFamily='"Poppins", sans-serif'
                    color='color.secundario'
                    fontWeight='500'
                    fontSize={{base:"2xl", lg:"3xl", xl:"null"}}
                >
                    Mi experiencia
                </Text>

                <Text 
                    as='p'
                    fontFamily='"Barlow", sans-serif'
                    fontWeight='200'
                    fontSize={{base:"xs", lg:"sm"}}

                    color='color.secundario'
                >
                    Puedes ver a un desarrollador Front End joven y apasionado que siempre está buscando oportunidades para aprender y crecer.
                </Text>

            </Box>

            <SectionTresB/>

        </Flex>
    )
}

export {SectionTres}