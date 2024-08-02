// Hero.jsx
import { Box, Flex, Text, Link, Image } from "@chakra-ui/react";
import imagenPerfil from '../../assets/img/foto perfil.png';
import { useColorMode } from '@chakra-ui/react';
import { Circulo } from "../FormaMedioCirculo/FormaMedioCirculo";

const Hero = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex 
      as='section'
      bg={colorMode === 'light' ? 'light.primary' : 'dark.primary'}
      w='100%' 
      h={{base:"100vh", sm:"null", md:"60vh", lg:"50vh",xl:"90vh" }}
      px={{base:"12", sm:"12", md:"10",lg:"14", xl:"16"}}
      justify='space-between'
      wrap='wrap' 
      id="acercademi"
    >
      {/* Comienzo de Section Uno A */}
      <Box 
        as='div'
        className="SectionUno-A" 
        fontFamily='"Poppins", sans-serif' 
        flexBasis={{base:"100%", sm:"null",md:"34%", lg:"null", xl:"null"}}
      >
        <Text 
          as='h2'
          color={colorMode === 'light' ? 'light.textPrimary' : 'dark.textPrimary'} 
          fontWeight='200'
          fontSize={{base:"xl", sm:"2xl",md:"null", lg:"null", xl:"4xl"}}
          lineHeight='50px' 
          pt='9'
          pb={{base:"28", sm:"null", md:"40", lg:"36",xl:"56"}}
          lineHeight={{base:"7", sm:"10"}}


        >
          Hola, Soy Ludmila Berto, <Text 
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
            color={colorMode === 'light' ? 'light.textPrimary' : 'dark.textPrimary'} 
            fontWeight='300'
            fontSize={{base:"md", sm:"null",md:"null", lg:"null", xl:"2xl"}}
          >
            Por Favor Conéctate Conmigo
          </Text>

          <Flex 
            as='div'
            className="conteiner-en-linea"
          >
              <Flex 
                className="contenedor-icono-y-enlace"
                align='center'
              >
                 <Box 
                  as='div'
                  color='#ffffff' 
                  fontSize={{base:"lg", sm:"xl",md:"2xl", lg:"3xl", xl:"null"}}

                  p='1'
                >
                    <i 
                    className="fa-brands fa-linkedin contacto"></i>
                </Box>
                
                
                <Link 
                  href="https://www.linkedin.com/in/ludmila-berto/"
                  target="_blank" 
                  fontFamily='"Poppins", sans-serif'
                  fontWeight='200'
                  color='#ffffff'
                  fontSize='xs'
                  mx='1'
                  py='1'
                  px='3'
                  border='solid #ffffff 1px'
                  borderRadius='15px'
                  _hover={{ backgroundColor:' #8C8988' }}
                >
                  LinkedIn
                </Link>

              </Flex>

              <Flex 
                className="contenedor-icono-y-enlace"
                align='center'
              >
                 <Box 
                  as='div'
                  color='#ffffff' 
                  fontSize={{base:"lg", sm:"xl",md:"2xl", lg:"3xl", xl:"null"}} 
                  p='1'
                >
                  <i 
                  className="fa-brands fa-telegram contacto"></i>
                </Box>
                

                <Link 
                  href="https://t.me/LudmilaBerto"
                  target="_blank" 
                  fontFamily='"Poppins", sans-serif'
                  fontWeight='200'
                  color='#ffffff'
                  fontSize='xs'
                  mx='1'
                  py='1'
                  px='3'
                  border='solid #ffffff 1px'
                  borderRadius='15px'
                  _hover={{ backgroundColor:' #8C8988' }}
                  >
                    Telegram
                  </Link>

              </Flex>

              <Flex 
                className="contenedor-icono-y-enlace"
                align='center'
              >
                 <Box 
                  as='div'
                  color='#ffffff' 
                  fontSize={{base:"lg", sm:"xl",md:"2xl", lg:"3xl", xl:"null"}}
                  p='1'
                >
                  <i 
                  className="fa-brands fa-github contacto"></i>
                </Box>
                

                <Link 
                  href="https://github.com/LudmilaBerto"
                  target="_blank" 
                  fontFamily='"Poppins", sans-serif'
                  fontWeight='200'
                  color='#ffffff'
                  fontSize='xs'
                  mx='1'
                  py='1'
                  px='3'
                  border='solid #ffffff 1px'
                  borderRadius='15px'
                  _hover={{ backgroundColor:' #8C8988' }}
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
        flexBasis={{base:"100%", sm:"null",md:"40%", lg:"null", xl:"30%"}}

        pt={{base:"0", sm:"null",md:"9", lg:"null", xl:"null"}}
      >
        <Image 
          as='img'
          src={imagenPerfil} 
          className='Imagen-De-Perfil'  
          h={{base:"300px", sm:"300px",md:"null", lg:"null", xl:"480px"}}
          m={{base:"10", sm:"10",md:"0", lg:"null", xl:"5"}}

        />

        <Box 
          as='div'
          className="cuadradito2D" 
          bg={colorMode === 'light' ? 'light.textPrimary' : 'dark.textPrimary'} 
          w={{base:"85px", sm:"95px", md:"null", lg:"null", xl:"110px"}}
          h={{base:"80px", sm:"90px", md:"null", lg:"null", xl:"100px"}}
          transform={{base:"translate(230px, -260px)", sm:"null ",md:"translate(180px, -220px)", lg:"translate(185px, -220px)", xl:"translate(300px, -360px)"}}
          fontFamily='"Poppins", sans-serif;' 
          color={colorMode === 'light' ? 'light.primary' : 'dark.primary'}
        >
          <Text 
            as='h4' 
            fontSize={{base:"xl", sm:"null",md:"null", lg:"null", xl:"3xl"}} 
            fontWeight='600' 
            pt='2' 
            px='2.5'
          >
            22+
          </Text>
          
          <Text 
            as='h4'
            fontSize={{base:"xs", sm:"sm",md:"null", lg:"null", xl:"md"}}
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
        flexBasis={{base:"100%", sm:"null",md:"null", lg:"null", xl:"30%"}}
        pt={{base:"0", sm:"null",md:"null", lg:"null", xl:"9"}}
        mb={{base:"40"}}
        transform={{base:"translate(0px, -180px)", md:"translate(0px, -100px)", xl:"none"}}
      
      >
        <Flex 
          as='div'
          display='column'
          className="Figuras-MedioCirculo"
        >
          <Flex 
            as='div'
            justify='end' 
            pb={{base:"20", sm:"null",md:"null", lg:"null", xl:"72"}}

          >
            <Circulo/>
          </Flex>
          
          <Box 
            as='div'
            pl='5'
            mb='96'

          >
            <Text 
              as='p'
              color={colorMode === 'light' ? 'light.textPrimary' : 'dark.textPrimary'} 
              fontFamily='"Barlow", sans-serif' 
              fontWeight='200' 
              lineHeight='16px'
              fontSize='sm'
            >
              Estudiante de Informática y Desarrollo Web Full Stack con interés en la programación y el deseo de seguir ampliando sus conocimientos en este campo.
            </Text>

            <Text 
              as='p'
              color={colorMode === 'light' ? 'light.textPrimary' : 'dark.textPrimary'} 
              fontFamily='"Poppins", sans-serif' 
              fontWeight='300' 
              fontSize={{base:"sm", sm:"null",md:"md", lg:"null", xl:"null"}}
              pt='3.5'
            >
              Descargar mi CV <i className="bi bi-arrow-up-right"></i>
            </Text>
          </Box>
        </Flex>
        {/* Finaliza la Section Uno C */}
      </Box>
    </Flex>
  );
}

export { Hero };
