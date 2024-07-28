import { Box, Flex, Image, Text } from "@chakra-ui/react"
import MedioCirculoRosa from '../../assets/img/Circulo medio rosa.svg'
import { SectionTresB } from "../SectionTresB/SectionTresB"


const SectionTres=()=>{


    return(
        <Flex 
            id="miexperiencia"
            as='section' 
            className="SectionTres"
            justify='space-between'
            py='12'
            px='14'
            bg='color.principal'
        >

            <Box 
                className="SectionTresA" 
                flexBasis='50%'
            >

                <Image 
                    src={MedioCirculoRosa} 
                    alt='figura de medio circulo rosa' 
                    w='40px' 
                    transform='translate(250px, 0px)'
                />

                <Text 
                    as='h2'
                    fontFamily='"Poppins", sans-serif'
                    color='color.secundario'
                    fontWeight='500'
                    fontSize='34px'
                >
                    Mi experiencia
                </Text>

                <Text 
                    as='p'
                    fontFamily='"Barlow", sans-serif'
                    fontWeight='200'
                    fontSize='13px'
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