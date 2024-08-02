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
            py='10'
            px={{base:"12", sm:"null", md:"10",lg:"14", xl:"16"}}
            w='100%'
        >
            <Flex 
                as='div'
                flexWrap='wrap'
                h={{base:"140px", sm:"120px",md:"80px", lg:"null", xl:"100px"}}
           
            >

                <Text 
                    as='h2'
                    fontFamily='"Poppins", sans-serif' 
                    fontWeight='500' 
                    fontSize={{base:"2xl", sm:"null",md:"null", lg:"null", xl:"4xl"}}
  
                    flexBasis={{base:"100%", sm:"null",md:"40%", lg:"null", xl:"null"}}

                >
                    Mis habilidades duras
                </Text>

                <Text 
                    fontFamily='"Barlow", sans-serif'
                    fontWeight='400' 
                    fontSize={{base:"xs", sm:"null",md:"sm", lg:"null", xl:"null"}}
                    lineHeight='15px'
                    ml={{base:"0", sm:"null",md:"24", lg:"", xl:"48"}}

                    flexBasis={{base:"100%", sm:"null",md:"45%", lg:"null", xl:"40%"}}

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
                    justify={{base:"center", sm:"null",md:"space-around", lg:"null", xl:"null"}}
                    align='center'
                    flexWrap='wrap'
                    flexGrow='1' 
                    p={{base:"0", sm:"0",md:"10", lg:"null", xl:"10"}}
                    gap={4} // Espacio uniforme entre los elementos

                >
                    
                    <Text 
                        color='color.principal' 
                        fontFamily='"Poppins", sans-serif' 
                        fontWeight='600' 
                        fontSize='lg'
                        textAlign={{base: "center", sm: "center", md: "left"}}
                        flexBasis={{base:"100%", sm:"null",md:"10%", lg:"null", xl:"null"}}
                        mt={{base: 8, sm: 4, md: 0}}

                    >
                        HTML
                    </Text>
                    
                    {/* ESTA LINEA DIVISORIA SOLO SE MOSTRARA EN RESOLUCIONES MENORES A 768px */}
                    <Divider 
                        as='hr'
                        orientation="horizontal" 
                        b='none' 
                        pt='px'
                        my='5'
                        bg='#b9b7b7a2'    
                        display={{base:"block", sm:"null",md:"none", lg:"null", xl:"null"}}
         
                     />


                    {/* Creo un cuadradito divisor para separar habilidades */}
                    <Box 
                        as='div'
                        bg={colorMode === 'light' ? 'light.textSecondary' : 'dark.textSecondary'}
                        h='15px' 
                        w='15px'

                    ></Box>

                    
                    {/* ESTA LINEA DIVISORIA SOLO SE MOSTRARA EN RESOLUCIONES MENORES A 768px */}
                    <Divider 
                        as='hr'
                        orientation="horizontal" 
                        b='none' 
                        pt='px'
                        my='5'
                        bg='#b9b7b7a2'    
                        display={{base:"block", sm:"null",md:"none", lg:"null", xl:"null"}}
                      />

                    <Text 
                        color='color.principal' 
                        fontFamily='"Poppins", sans-serif' 
                        fontWeight='600' 
                        fontSize='lg'
                        textAlign={{base: "center", sm: "center", md: "left"}}
                        flexBasis={{base:"100%", sm:"null",md:"10%", lg:"null", xl:"null"}}
                        
                    >
                        CSS
                    </Text>

                    {/* ESTA LINEA DIVISORIA SOLO SE MOSTRARA EN RESOLUCIONES MENORES A 768px */}
                    <Divider 
                        as='hr'
                        orientation="horizontal" 
                        b='none' 
                        pt='px'
                        my='5'
                        bg='#b9b7b7a2'    
                        display={{base:"block", sm:"null",md:"none", lg:"null", xl:"null"}}
         
                     />

                    {/* Creo un cuadradito divisor para separar habilidades */}
                    <Box 
                        as='div'
                        bg={colorMode === 'light' ? 'light.textSecondary' : 'dark.textSecondary'}                        
                        h='15px' 
                        w='15px'
                    ></Box>

                    {/* ESTA LINEA DIVISORIA SOLO SE MOSTRARA EN RESOLUCIONES MENORES A 768px */}
                    <Divider 
                        as='hr'
                        orientation="horizontal" 
                        b='none' 
                        pt='px'
                        my='5'
                        bg='#b9b7b7a2'    
                        display={{base:"block", sm:"null",md:"none", lg:"null", xl:"null"}}
         
                     />
                    
                    <Text 
                        color='color.principal' 
                        fontFamily='"Poppins", sans-serif' 
                        fontWeight='600' 
                        fontSize='lg'
                        textAlign={{base: "center", sm: "center", md: "left"}}
                        flexBasis={{base:"100%", sm:"null",md:"10%", lg:"null", xl:"null"}}
                        mb={{base: 8, sm: 4, md: 0}}

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
                    display={{base:"none", sm:"none",md:"flex", lg:"null", xl:"null"}}

                    justify='space-around' 
                    flexWrap='wrap'
                    flexGrow='1' 
                    p={{base:"0", sm:"0",md:"10", lg:"null", xl:"10"}}
                    gap={4}
                >
                
                    {/* Creo un cuadradito divisor para separar habilidades */}
                    <Box 
                        as='div'
                        bg={colorMode === 'light' ? 'light.textSecondary' : 'dark.textSecondary'}    
                        h='15px' 
                        w='15px'
                        m={2} 
                    ></Box>

                    <Text 
                        color='color.principal' 
                        fontFamily='"Poppins", sans-serif' 
                        fontWeight='600' 
                        fontSize='lg'
                        flexBasis={{base:"100%", sm:"null",md:"30%", lg:"null", xl:"null"}}
                        m={2} 
                    ></Text>


                    {/* Creo un cuadradito divisor para separar habilidades */}
                    <Box 
                        as='div'
                        bg={colorMode === 'light' ? 'light.textSecondary' : 'dark.textSecondary'}   
                        h='15px' 
                        w='15px'
                        m={2} 
                    ></Box>

                    <Text 
                        color='color.principal' 
                        fontFamily='"Poppins", sans-serif' 
                        fontWeight='600' 
                        fontSize='lg'
                        flexBasis={{base:"100%", sm:"null",md:"30%", lg:"null", xl:"null"}}
                        m={2} 
                    ></Text>
                                    
                    {/* Creo un cuadradito divisor para separar habilidades */}
                    <Box 
                        as='div'
                        bg={colorMode === 'light' ? 'light.textSecondary' : 'dark.textSecondary'}                        
                        h='15px' 
                        w='15px'
                        m={2} 
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
                        fontSize={{base:"sm", sm:"null",md:"lg", lg:"xl", xl:"3xl"}}
                        flexBasis={{base:"100%", sm:"",md:"85%", lg:"90%", xl:"80%"}}
                        pb='4'
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
                        flexBasis={{base:"0%", sm:"null",md:"15%", lg:"5%", xl:"10%"}}

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
                        flexBasis={{base:"0%", sm:"null",md:"5%", lg:"15%", xl:"8%"}}
                    />

                    <Text
                        fontFamily='"Poppins", sans-serif' 
                        fontWeight='300' 
                        fontSize={{base:"sm", sm:"null",md:"lg", lg:"xl", xl:"3xl"}}
                        flexBasis={{base:"100%", sm:"null",md:"94%", lg:"80%", xl:"90%"}}
                        pl={{base:"´0", sm:"null",md:"6", lg:"null", xl:"null"}}

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
                    flexWrap='wrap-reverse'
                    py='8'
                >
                    
                    <Image 
                        src={CirculoContratame} 
                        display={{base:"none", md:"block"}}
                        alt="imagen de circulo rosa con la palabra 'Contratame' " 
                        h='120px' 
                        px={{base:"0", sm:"0",md:"5", lg:"10", xl:"20"}}
                        flexBasis={{base:"100%", sm:"100%",md:"10%", lg:"null"}}
                    />

                    <Text 
                        fontFamily='"Barlow", sans-serif' 
                        fontWeight='400' 
                        lineHeight='14px' 
                        fontSize='sm' 
                        px={{base:"0", sm:"0",md:"10", lg:"null", xl:"20"}}
                        bg='color.terciario'
                        flexBasis={{base:"100%", sm:"100%",md:"75%", lg:"null", xl:"75%"}}

                    >
                        Al estudiar la Diplomatura en Desarrollo Web Full Stack, perfecciono mis habilidades técnicas y desarrollo un buen ojo para los detalles. Sin embargo, mi verdadera fortaleza radica en mis habilidades interpersonales, comunicación efectiva, adaptabilidad y mentalidad colaborativa. Prospero en entornos de equipo, busco constantemente oportunidades para aprender de mis compañeros y contribuir al éxito colectivo. Trabajar como autónomo me ha enseñado el valor de la gestión del tiempo, la autodisciplina y la capacidad de desempeñar múltiples funciones. Prontizar las tareas y cumplir los plazos con un compromiso inquebrantable.
                    </Text>

                </Flex>

            </Box>



    )
}

export {SectionDos}