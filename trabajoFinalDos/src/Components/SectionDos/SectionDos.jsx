import { Box, Divider, Flex, Image, Text, useColorMode } from "@chakra-ui/react"
import CirculoContratame from '../../assets/img/Circulo Rosa Contrátame.svg'



const SectionDos=()=>{
    const { colorMode } = useColorMode();


    return(
        <Box
            id='habilidades'
            as='section' 
            color={colorMode === 'light' ? 'light.textSecondary' : 'dark.textSecondary'}
            bg={colorMode === 'light' ? 'light.secondary' : 'dark.secondary'}
            py='12'
            px='14'
        >
            <Flex 
                as='div'
                align='center' 
                justify='space-around'
                pb='10'
            >

                <Text 
                    as='h2'
                    fontFamily='"Poppins", sans-serif' 
                    fontWeight='500' 
                    fontSize='4xl'  
                    flexBasis='50%'
                >
                    Mis habilidades duras
                </Text>

                <Text 
                    fontFamily='"Barlow", sans-serif'
                    fontWeight='400' 
                    fontSize='sm' 
                    lineHeight='15px'
                    ml='48' 
                    flexBasis='50%'
                >
                    Explora mis habilidades técnicas en esta sección, donde encontrarás un resumen conciso de mis competencias en informática y desarrollo web.
                </Text>
            </Flex>



                            {/* Separo con linea divisoria */}
                <Divider 
                    as='hr'
                    orientation="horizontal" 
                    b='none' 
                    pt='px' 
                    bg='#b9b7b7a2'               
                />

                <Flex 
                    as='div'
                    className="contenedor-de-habilidades" 
                    justify='space-around' 
                    flexGrow='1' 
                    p='10'
                >
                    
                    <Text 
                        color='color.principal' 
                        fontFamily='"Poppins", sans-serif' 
                        fontWeight='600' 
                        fontSize='lg'
                    >
                        HTML
                    </Text>

                    {/* Creo un cuadradito divisor para separar habilidades */}
                    <Box 
                        as='div'
                        bg={colorMode === 'light' ? 'light.textSecondary' : 'dark.textSecondary'}
                        h='15px' 
                        w='15px'
                    ></Box>

                    <Text 
                        color='color.principal' 
                        fontFamily='"Poppins", sans-serif' 
                        fontWeight='600' 
                        fontSize='lg'
                    >
                        CSS
                    </Text>

                    {/* Creo un cuadradito divisor para separar habilidades */}
                    <Box 
                        as='div'
                        bg={colorMode === 'light' ? 'light.textSecondary' : 'dark.textSecondary'}                        
                        h='15px' 
                        w='15px'
                    ></Box>
                    
                    <Text 
                        color='color.principal' 
                        fontFamily='"Poppins", sans-serif' 
                        fontWeight='600' 
                        fontSize='lg'
                    >
                        JavaScript
                    </Text>


                </Flex>

                {/* Separo con linea divisoria */}
                <Divider
                    as='hr' 
                    orientation="horizontal" 
                    b='none' 
                    pt='px' 
                    bg='#b9b7b7a2'
                />

                <Flex 
                    className="contenedor-de-habilidades" 
                    justify='space-around' 
                    flexGrow='1' 
                    p='10'
                >
                
                    {/* Creo un cuadradito divisor para separar habilidades */}
                    <Box 
                        as='div'
                        bg={colorMode === 'light' ? 'light.textSecondary' : 'dark.textSecondary'}                        
                        h='15px' 
                        w='15px'
                    ></Box>

                    <Text 
                        color='color.principal' 
                        fontFamily='"Poppins", sans-serif' 
                        fontWeight='600' 
                        fontSize='lg'
                    ></Text>


                    {/* Creo un cuadradito divisor para separar habilidades */}
                    <Box 
                        as='div'
                        bg={colorMode === 'light' ? 'light.textSecondary' : 'dark.textSecondary'}                        
                        h='15px' 
                        w='15px'
                    ></Box>

                    <Text 
                        color='color.principal' 
                        fontFamily='"Poppins", sans-serif' 
                        fontWeight='600' 
                        fontSize='lg'
                    ></Text>
                                    
                    {/* Creo un cuadradito divisor para separar habilidades */}
                    <Box 
                        as='div'
                        bg={colorMode === 'light' ? 'light.textSecondary' : 'dark.textSecondary'}                        
                        h='15px' 
                        w='15px'
                    ></Box>


                </Flex>

                {/* Separo con linea divisoria */}
                <Divider 
                    orientation="horizontal" 
                    b='none' 
                    pt='px' 
                    bg='#b9b7b7a2'
                />
                
                
                <Text 
                    className="ComillasGrandes" 
                    fontFamily='"Poppins", sans-serif' 
                    fontWeight='300' 
                    fontSize='100px' 
                    mt='14'
                >
                    “
                </Text>

                <Flex 
                  as='div'
                  className="alineacion-h2-hr" 
                  align='center'
                >
                    
                    <Text 
                        fontFamily='"Poppins", sans-serif' 
                        fontWeight='300' 
                        fontSize='3xl' 
                        flexBasis='80%'
                    >
                        Estoy estudiando una <Text 
                                                as='span' 
                                                fontWeight='500'
                                            >
                                                Diplomatura 
                                            </Text> en <Text
                                                        as='span'
                                                        fontWeight='500'
                                                        >
                                                            Desarrollo Web Full Stack.
                                                        </Text>
                        
                    </Text>
                    
                    {/* Le agrego una linea hroizontal a la derecha */}
                    <Divider 
                        as='hr'
                        orientation="horizontal" 
                        pt='px' 
                        bg='#c0c0c1' 
                        flexBasis='20%'
                    />

                </Flex>
                
                <Flex 
                    as='div'
                    className="alineacion-h2-hr" 
                    align='center'
                >
                    {/* Le agrego una linea hroizontal a la izquierda */}
                    <Divider 
                        as='hr'
                        orientation="horizontal" 
                        b='none' 
                        pt='px' 
                        bg='#c0c0c1' 
                        flexBasis='15%'
                    />

                    <Text 
                        fontFamily='"Poppins", sans-serif' 
                        fontWeight='300' 
                        fontSize='3xl' 
                        flexBasis='85%' 
                        pl='6'
                    >
                        Mi <Text 
                            as='span' 
                            fontWeight='500'
                            >
                                residencia
                            </Text> actual está en la <Text 
                                                        as='span' 
                                                        fontWeight='500'
                                                        >
                                                            provincia de Buenos Aires, Argentina.
                                                        </Text>
                    </Text>

                </Flex>

                <Flex 
                    as='div'
                    className="contenedor-sticker-texto" 
                    align='center' 
                    py='8'
                >
                    
                    <Image 
                        src={CirculoContratame} 
                        alt="imagen de circulo rosa con la palabra 'Contratame' " 
                        h='120px' 
                        px='20' 
                    />

                    <Text 
                        fontFamily='"Barlow", sans-serif' 
                        fontWeight='400' 
                        lineHeight='14px' 
                        fontSize='sm' 
                        px='20'
                        bg='color.terciario'

                    >
                        Al estudiar la Diplomatura en Desarrollo Web Full Stack, perfecciono mis habilidades técnicas y desarrollo un buen ojo para los detalles. Sin embargo, mi verdadera fortaleza radica en mis habilidades interpersonales, comunicación efectiva, adaptabilidad y mentalidad colaborativa. Prospero en entornos de equipo, busco constantemente oportunidades para aprender de mis compañeros y contribuir al éxito colectivo. Trabajar como autónomo me ha enseñado el valor de la gestión del tiempo, la autodisciplina y la capacidad de desempeñar múltiples funciones. Prontizar las tareas y cumplir los plazos con un compromiso inquebrantable.
                    </Text>

                </Flex>

            </Box>



    )
}

export {SectionDos}