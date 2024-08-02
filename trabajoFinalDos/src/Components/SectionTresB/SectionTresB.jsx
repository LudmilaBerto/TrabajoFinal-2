import { Box, Button, Divider, Flex, Text, useColorMode } from '@chakra-ui/react'
import React, { useState } from 'react';



    // Defino las secciones con información variada
    const secciones = [
        { fecha:"oct de 2020 - ago de 2022", titulo: "Lorem ipsum dolor sit amet", descripcion: "Puedes ver a un desarrollador Front End joven y apasionado que siempre está buscando oportunidades para aprender y crecer." },
        { fecha:"oct de 2018 - ago de 2020", titulo: "Sección 2 Lorem ipsum dolor sit", descripcion: "Puedes ver a un desarrollador Front End joven y apasionado que siempre está buscando oportunidades para aprender y crecer." },
        {fecha:"oct de 2016 - ago de 2018", titulo: "Sección 3 Lorem ipsum dolor sit", descripcion: "Puedes ver a un desarrollador Front End joven y apasionado que siempre está buscando oportunidades para aprender y crecer." }
    ];



const SectionTresB=()=>{

    const { colorMode } = useColorMode();

    const [indiceActual, setIndiceActual] = useState(0);

    // Manejar el clic en el botón "Anterior"
    const manejarAnterior = () => {
        // IndicePrevio= estado que mantiene el índice de la sección actualmente visible.
        
        setIndiceActual((indicePrevio) => (indicePrevio > 0 ? indicePrevio - 1 : 0));
    };

    // Manejar el clic en el botón "Siguiente"
    const manejarSiguiente = () => {
        setIndiceActual((indicePrevio) => (indicePrevio < secciones.length - 1 ? indicePrevio + 1 : secciones.length - 1));
    };
    


    return(
        <Box 
            as='div'
            flexBasis={{base:"100%", sm:"null",md:"50%", lg:"50%", xl:"null"}}

            px={{base:"0", sm:"0",md:"", lg:"", xl:"14"}}
            pt={{base:"14",md:"0"}}


        >
            <Text 
                as='p'
                fontFamily='"Barlow", sans-serif'
                fontWeight='200'
                fontSize='xs'
                textAlign='center'
                w='160px'
                border='solid #fff 1px'
                borderRadius='14px'
                p='1'
            >
                {secciones[indiceActual].fecha}
            </Text>

            <Text 
                as='h3'
                fontFamily='"Poppins", sans-serif'
                fontWeight='500'
                fontSize={{base:"xl", sm:"null",md:"xl", lg:"2xl", xl:"null"}}

                py='3.5'
            >
                {secciones[indiceActual].titulo}
            </Text>

            <Divider
                position='horizontal'
                border='none'
                pt='px' 
                bg='#C0C0C1'

            />

            <Text 
                as='h4'
                fontFamily='"Poppins", sans-serif'
                fontWeight='200'
                fontSize='lg'
                color='color.secundario'
                py='5'
            >
                 {secciones[indiceActual].descripcion}
            </Text>

            <Flex 
                as='div'
                justify='end'
            >

                <Button
                   as='button'
                   fontFamily='"Poppins", sans-serif'
                   fontWeight='400'
                   fontSize='sm'
                   color='#ffffff'
                   bg='none'
                   mr='3.5'
                   p='2.5'
                   _hover={{
                   bg: colorMode === 'light' ? 'light.bgB' : 'dark.bgB',
                   borderRadius: "12px"}}  
                   onClick={manejarAnterior}
                   isDisabled={indiceActual === 0}
                >
                    Anterior
                </Button>
                <Button
                    as='button'
                    fontFamily='"Poppins", sans-serif'
                    fontWeight='400'
                    color='#ffffff'
                    bg='none'
                    fontSize='sm'
                    p='2.5'
                    _hover={{
                        bg: colorMode === 'light' ? 'light.bgB' : 'dark.bgB',
                        borderRadius: "12px"}} 
                    onClick={manejarSiguiente}
                    isDisabled={indiceActual === secciones.length - 1} 
                >
                    Próximo
                </Button>

            </Flex>


        </Box>
    )
}

export {SectionTresB}