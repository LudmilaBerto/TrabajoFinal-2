import { Box, Flex, Text } from "@chakra-ui/react"



const SectionDos=()=>{

    return(
        <Box bg='#f2f0ef' color='#201f51' py='50px' px='60px'>
            <Flex align='center' justify='space-around' pb='40px'>

                <Text fontFamily='"Poppins", sans-serif' fontWeight='500' fontSize='34px' color='#201f51' flexBasis='50%'>Mis habilidades duras</Text>

                <Text fontFamily='"Barlow", sans-serif' color='#201f51' fontWeight='400' fontSize='13px' ml='200px' flexBasis='50%'>Explora mis habilidades técnicas en esta sección, donde encontrarás un resumen conciso de mis competencias en informática y desarrollo web.</Text>
            </Flex>

        </Box>
    )
}

export {SectionDos}