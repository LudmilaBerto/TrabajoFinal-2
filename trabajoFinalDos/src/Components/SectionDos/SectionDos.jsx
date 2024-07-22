import { Box, Divider, Flex, Text } from "@chakra-ui/react"



const SectionDos=()=>{

    return(
        <Box bg='#f2f0ef' color='#201f51' py='50px' px='60px'>
            <Flex align='center' justify='space-around' pb='40px'>

                <Text fontFamily='"Poppins", sans-serif' fontWeight='500' fontSize='34px' color='#201f51' flexBasis='50%'>Mis habilidades duras</Text>

                <Text fontFamily='"Barlow", sans-serif' color='#201f51' fontWeight='400' fontSize='13px' ml='200px' flexBasis='50%'>Explora mis habilidades técnicas en esta sección, donde encontrarás un resumen conciso de mis competencias en informática y desarrollo web.</Text>
            </Flex>

            {/* Separo con linea divisoria */}
            <Divider orientation="horizontal" b='none' pt='1px' bg='#b9b7b7a2'/>

            <Flex className="contenedor-de-habilidades" justify='space-around' flexGrow='1' p='40px'>
                
                <Text color='#201f51' fontFamily='"Poppins", sans-serif' fontWeight='600' fontSize='18px'>HTML</Text>

                {/* Creo un cuadradito divisor para separar habilidades */}
                <Box bg='#201f51' h='15px' w='15px'></Box>

                <Text color='#201f51' fontFamily='"Poppins", sans-serif' fontWeight='600' fontSize='18px'>CSS</Text>

                 {/* Creo un cuadradito divisor para separar habilidades */}
                 <Box bg='#201f51' h='15px' w='15px'></Box>
                
                 <Text color='#201f51' fontFamily='"Poppins", sans-serif' fontWeight='600' fontSize='18px'>JavaScript</Text>


            </Flex>

             {/* Separo con linea divisoria */}
            <Divider orientation="horizontal" b='none' pt='1px' bg='#b9b7b7a2'/>

            <Flex className="contenedor-de-habilidades" justify='space-around' flexGrow='1' p='40px'>
               
                {/* Creo un cuadradito divisor para separar habilidades */}
                <Box bg='#201f51' h='15px' w='15px'></Box>

                <Text color='#201f51' fontFamily='"Poppins", sans-serif' fontWeight='600' fontSize='18px'></Text>


                {/* Creo un cuadradito divisor para separar habilidades */}
                 <Box bg='#201f51' h='15px' w='15px'></Box>

                <Text color='#201f51' fontFamily='"Poppins", sans-serif' fontWeight='600' fontSize='18px'></Text>
                                
                {/* Creo un cuadradito divisor para separar habilidades */}
                <Box bg='#201f51' h='15px' w='15px'></Box>


            </Flex>

             {/* Separo con linea divisoria */}
             <Divider orientation="horizontal" b='none' pt='1px' bg='#b9b7b7a2'/>
             
            
            <Text className="ComillasGrandes" fontFamily='"Poppins", sans-serif' fontWeight='300' fontSize='100px' mt='60px'>“</Text>

            <Flex className="alineacion-h2-hr" align='center'>
                
                <Text color='#201f51' fontFamily='"Poppins", sans-serif' fontWeight='300' fontSize='28px' flexGrow='1'>Estoy estudiando una <Text as='span' fontWeight='500'>Diplomatura </Text>en <Text as='span' fontWeight='500'>Desarrollo Web Full Stack.</Text></Text><Divider orientation="horizontal" b='none' pt='1px' bg='#201f51'/>

            </Flex>

            <Flex className="alineacion-h2-hr" align='center'>
                
            <Divider orientation="horizontal" b='none' pt='1px' bg='#201f51' /><Text color='#201f51' fontFamily='"Poppins", sans-serif' fontWeight='300' fontSize='28px' flexGrow='1' pl='15px'>Mi <Text as='span' fontWeight='500'>residencia</Text> actual está en la <Text as='span' fontWeight='500'>provincia de Buenos Aires.</Text></Text>

            </Flex>

        </Box>
    )
}

export {SectionDos}