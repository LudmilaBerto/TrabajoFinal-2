import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react"
import CirculoContratame from '../../assets/img/Circulo Rosa Contrátame.svg'



const SectionDos=()=>{

    return(
        <Box 
            as="Section" 
            bg='color.terciario' 
            color='color.principal' 
            py='50px' 
            px='60px'
        >
            <Flex 
                align='center' 
                justify='space-around' 
                pb='40px'
            >

                <Text 
                    fontFamily='"Poppins", sans-serif' 
                    fontWeight='500' 
                    fontSize='34px'  
                    flexBasis='50%'
                >
                    Mis habilidades duras
                </Text>

                <Text 
                    fontFamily='"Barlow", sans-serif'
                    fontWeight='400' 
                    fontSize='13px' 
                    ml='200px' 
                    flexBasis='50%'
                >
                    Explora mis habilidades técnicas en esta sección, donde encontrarás un resumen conciso de mis competencias en informática y desarrollo web.
                </Text>
            </Flex>

            {/* Separo con linea divisoria */}
            <Divider 
                orientation="horizontal" 
                b='none' 
                pt='1px' 
                bg='color.lineagris'
            />

            <Flex 
                className="contenedor-de-habilidades" 
                justify='space-around' 
                flexGrow='1' p='40px'
            >
                
                <Text 
                    color='color.principal' 
                    fontFamily='"Poppins", sans-serif' 
                    fontWeight='600' 
                    fontSize='18px'
                >
                    HTML
                </Text>

                {/* Creo un cuadradito divisor para separar habilidades */}
                <Box 
                    bg='color.principal' 
                    h='15px' 
                    w='15px'
                ></Box>

                <Text 
                    color='color.principal' 
                    fontFamily='"Poppins", sans-serif' 
                    fontWeight='600' 
                    fontSize='18px'
                >
                    CSS
                </Text>

                 {/* Creo un cuadradito divisor para separar habilidades */}
                 <Box 
                    bg='color.principal' 
                    h='15px' 
                    w='15px'
                ></Box>
                
                 <Text 
                    color='color.principal' 
                    fontFamily='"Poppins", sans-serif' 
                    fontWeight='600' 
                    fontSize='18px'
                >
                    JavaScript
                </Text>


            </Flex>

             {/* Separo con linea divisoria */}
            <Divider 
                orientation="horizontal" 
                b='none' 
                pt='1px' 
                bg='color.lineagris'
            />

            <Flex 
                className="contenedor-de-habilidades" 
                justify='space-around' 
                flexGrow='1' 
                p='40px'
            >
               
                {/* Creo un cuadradito divisor para separar habilidades */}
                <Box 
                    bg='color.principal' 
                    h='15px' 
                    w='15px'
                ></Box>

                <Text 
                    color='color.principal' 
                    fontFamily='"Poppins", sans-serif' 
                    fontWeight='600' 
                    fontSize='18px'
                ></Text>


                {/* Creo un cuadradito divisor para separar habilidades */}
                 <Box 
                    bg='color.principal' 
                    h='15px' 
                    w='15px'
                ></Box>

                <Text 
                    color='color.principal' 
                    fontFamily='"Poppins", sans-serif' 
                    fontWeight='600' 
                    fontSize='18px'
                ></Text>
                                
                {/* Creo un cuadradito divisor para separar habilidades */}
                <Box 
                    bg='color.principal' 
                    h='15px' 
                    w='15px'
                ></Box>


            </Flex>

             {/* Separo con linea divisoria */}
            <Divider 
                orientation="horizontal" 
                b='none' 
                pt='1px' 
                bg='color.lineagris'
            />
             
            
            <Text 
                className="ComillasGrandes" 
                fontFamily='"Poppins", sans-serif' 
                fontWeight='300' 
                fontSize='100px' 
                mt='60px'
            >
                “
            </Text>

            <Flex 
              className="alineacion-h2-hr" 
              align='center'
            >
                
                <Text 
                    color='color.principal' 
                    fontFamily='"Poppins", sans-serif' 
                    fontWeight='300' 
                    fontSize='28px' 
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
                    orientation="horizontal" 
                    b='0px' 
                    pt='1px' 
                    bg='color.principal' 
                    flexBasis='20%'
                />

            </Flex>
            
            <Flex 
                className="alineacion-h2-hr" 
                align='center'
            >
                {/* Le agrego una linea hroizontal a la izquierda */}
                <Divider 
                    orientation="horizontal" 
                    b='none' 
                    pt='1px' 
                    bg='color.principal' 
                    flexBasis='20%'
                />

                <Text 
                    color='color.principal' 
                    fontFamily='"Poppins", sans-serif' 
                    fontWeight='300' 
                    fontSize='28px' 
                    flexBasis='80%' 
                    pl='15px'
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
                className="contenedor-sticker-texto" 
                align='center' 
                py='30px'
            >
                
                <Image 
                    src={CirculoContratame} 
                    alt="imagen de circulo rosa con la palabra 'Contratame' " 
                    h='120px' 
                    px='80px' 
                />

                <Text 
                    fontFamily='"Barlow", sans-serif' 
                    fontWeight='400' 
                    lineHeight='14px' 
                    fontSize='13px' 
                    px='80px'
                >
                     Al estudiar la Diplomatura en Desarrollo Web Full Stack, perfecciono mis habilidades técnicas y desarrollo un buen ojo para los detalles. Sin embargo, mi verdadera fortaleza radica en mis habilidades interpersonales, comunicación efectiva, adaptabilidad y mentalidad colaborativa. Prospero en entornos de equipo, busco constantemente oportunidades para aprender de mis compañeros y contribuir al éxito colectivo. Trabajar como autónomo me ha enseñado el valor de la gestión del tiempo, la autodisciplina y la capacidad de desempeñar múltiples funciones. Prontizar las tareas y cumplir los plazos con un compromiso inquebrantable.
                </Text>

            </Flex>

        </Box>
    )
}

export {SectionDos}