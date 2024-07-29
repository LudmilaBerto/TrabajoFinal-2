import {Box, Flex, Text, Link, Image} from "@chakra-ui/react"
import imagenPerfil from '../../assets/img/foto perfil.png'
import imagenMedioCirculo from '../../assets/img/forma-mediocirculo+circulo.png'


const Hero=()=>{

    return(
        <Flex 
          as='section'
          bg='color.principal'
          w='100%' 
          h='90vh' 
          px='14' 
          wrap='wrap' 
          id="acercademi"
        >

            {/* Divido la section uno(HERO) en 3 Box. */}
            
            {/* Comienzo de Section Uno A */}

            <Box 
              as='div'
              className="SectionUno-A" 
              fontFamily='"Poppins", sans-serif' 
              flexBasis='33%'
            >

                <Text 
                  as='h2'
                  color='color.secundario' 
                  fontWeight='200'
                  fontSize='4xl'
                  lineHeight='50px' 
                  pt='9'
                  pb='48'
                >
                    Hola, Soy Ludmila Berto,<Text 
                                                as='span' 
                                                fontFamily='"Poppins", sans-serif'  
                                                fontWeight='400'
                                                className="Span-Section-Uno-A"
                                            >
                                                Una desarrolladora Front-End
                                            </Text>
                </Text>
                
                <Box 
                  as='div'
                  className='contenedor-texto-iconsContact'
                >
                    
                    <Text 
                      as='h3'
                      color='color.secundario' 
                      fontWeight='300'
                      fontSize='22px'
                      pb='2.5'
                    >
                        Por Favor Conéctate Conmigo
                    </Text>

                    <Flex 
                      as='div'
                      className="conteiner-en-linea"
                    >

                        <Flex 
                          as='div'
                          className="contenedor-icono-y-enlace" 
                          align='center'
                        >
                            
                            <Box 
                              as='div'
                              color='color.secundario' 
                              fontSize='30px' 
                              p='1'
                            >
                                <i className="fa-brands fa-linkedin contacto"></i>
                            </Box>
                            

                            <Link 
                              as='a'
                              href="https://www.linkedin.com/in/ludmila-berto/" 
                              target="_blank" 
                              className="linkContacto" 
                              fontFamily='"Poppins", sans-serif'
                              fontWeight='200'
                              color='color.secundario'
                              fontSize='13px'
                              mx='1'
                              py='1.5'
                              px='3'
                              border='solid #ffffff 1px'
                              borderRadius='15px' 
                              _hover={{backgroundColor: 'color.hover'}}
                            >
                                LinkedIn
                            </Link>

                        </Flex>

                        <Flex 
                          as='div'
                          className="contenedor-icono-y-enlace" 
                          align='center'
                        > 

                            <Box 
                              as='div'
                              color='color.secundario' 
                              fontSize='30px' 
                              p='1'
                            >
                                <i className="fa-brands fa-telegram contacto"></i>
                            </Box>

                            <Link 
                              as='a'
                              href="https://t.me/LudmilaBerto" 
                              target="_blank" 
                              className="linkContacto" 
                              fontFamily='"Poppins", sans-serif'
                              fontWeight='200'
                              color='color.secundario'
                              fontSize='13px'
                              mx='1'
                              py='1.5'
                              px='3'
                              border='solid #ffffff 1px'
                              borderRadius='15px' 
                              _hover={{backgroundColor: 'color.hover'}}
                            >
                                Telegram
                            </Link>

                        </Flex>

                        <Flex 
                          className="contenedor-icono-y-enlace" align='center'>

                            <Box 
                              as='div'
                              color='color.secundario' 
                              fontSize='30px' 
                              p='1'
                            >
                                <i className="fa-brands fa-github contacto" ></i>
                            </Box>
                            
                            <Link 
                              as='a'
                              href="https://github.com/LudmilaBerto" 
                              target="_blank" 
                              className="linkContacto" 
                              fontFamily='"Poppins", sans-serif' 
                              fontWeight='200' 
                              color='color.secundario' 
                              fontSize='13px' 
                              mx='1'
                              py='1.5'
                              px='3'
                              border='solid #ffffff 1px' 
                              borderRadius='15px' 
                              _hover={{backgroundColor: 'color.hover'}}
                            >
                                GitHub
                            </Link>

                        </Flex>

                    </Flex>
                </Box>    
            </Box>

            {/* Finaliza la Section Uno A */}

            {/* Comienzo de Section Uno B */}

            <Box 
              as='div'
              className="SectionUno-B" 
              flexBasis='33%'
              pt='9'
            >

                <Image 
                  as='img'
                  src={imagenPerfil} 
                  className='Imagen-De-Perfil'  
                  h='480px' 
                  m='20px'
                />

                <Box 
                  as='div'
                  className="cuadradito2D" 
                  bg='color.secundario' 
                  w='110px' 
                  h='100px' 
                  transform='translate(300px, -360px)' 
                  fontFamily='"Poppins", sans-serif;' 
                  color='color.principal'
                >

                    <Text 
                      as='h4' 
                      fontSize='30px' 
                      fontWeight='600' 
                      pt='2' 
                      px='2.5'
                      >
                        22+
                    </Text>
                    
                    <Text 
                      as='h4'
                      fontSize='16px' 
                      fontWeight='500' 
                      px='3' 
                      lineHeight='18px'
                    >
                        Semanas De Clases
                    </Text>

                </Box>

            </Box>

            {/* Finaliza la Section Uno B */}

            {/* Comienzo de Section Uno C */}


            <Box 
              as='div'
              className="SectionUno-C" 
              flexBasis='33%' 
              pt='9'
            >

                <Flex 
                  as='div'
                  display='column'
                  className="Figuras-MedioCirculo"
                >
                    
                    <Flex 
                      as='div'
                      justify='end' 
                      mt='9' 
                      mr='10' 
                      pb='60'
                    >

                        <Image 
                          as='img'
                          src={imagenMedioCirculo} 
                          alt="imagen de forma de medio circulo con circulo rosa"
                          className="imagen-medio-circulo" 
                          w='115px' 
                          h='115px'
                        />

                    </Flex>
                    
                    <Box 
                      as='div'
                      pl='5'
                    >
                        <Text 
                          as='p'
                          color='color.secundario' 
                          fontFamily='"Barlow", sans-serif' 
                          fontWeight='200' 
                          fontSize='13px'
                        >
                            Estudiante de Informática y Desarrollo Web Full Stack con interés en la programación y el deseo de seguir ampliando sus conocimientos en este campo.
                        </Text>

                        <Text 
                          as='p'
                          color='color.secundario' 
                          fontFamily='"Poppins", sans-serif' 
                          fontWeight='300' 
                          fontSize='15px'
                          pt='3.5'
                        >
                            Descargar mi CV <i className="bi bi-arrow-up-right"></i>
                        </Text>

                    </Box>
                    {/* Finaliza la Section Uno C */}

                </Flex>

            </Box>
        
        </Flex>
    )
}

export {Hero}