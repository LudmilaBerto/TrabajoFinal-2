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
      h='90vh' 
      px='14' 
      justify='space-between'
      wrap='wrap' 
      id="acercademi"
    >
      {/* Comienzo de Section Uno A */}
      <Box 
        as='div'
        className="SectionUno-A" 
        fontFamily='"Poppins", sans-serif' 
        flexBasis='35%'
      >
        <Text 
          as='h2'
          color={colorMode === 'light' ? 'light.textPrimary' : 'dark.textPrimary'} 
          fontWeight='200'
          fontSize='4xl'
          lineHeight='50px' 
          pt='9'
          pb='48'
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
            fontSize='2xl'
            pb='2.5'
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
                  fontSize='3xl' 
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
                  py='1.5'
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
                  fontSize='3xl' 
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
                  py='1.5'
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
                  fontSize='3xl' 
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
                  py='1.5'
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
        flexBasis='30%'
        pt='9'
      >
        <Image 
          as='img'
          src={imagenPerfil} 
          className='Imagen-De-Perfil'  
          h='480px' 
          m='5'
        />

        <Box 
          as='div'
          className="cuadradito2D" 
          bg={colorMode === 'light' ? 'light.textPrimary' : 'dark.textPrimary'} 
          w='110px' 
          h='100px' 
          transform='translate(300px, -360px)' 
          fontFamily='"Poppins", sans-serif;' 
          color={colorMode === 'light' ? 'light.primary' : 'dark.primary'}
        >
          <Text 
            as='h4' 
            fontSize='3xl' 
            fontWeight='600' 
            pt='2' 
            px='2.5'
          >
            22+
          </Text>
          
          <Text 
            as='h4'
            fontSize='md' 
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
        flexBasis='30%' 
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
            <Circulo/>
          </Flex>
          
          <Box 
            as='div'
            pl='5'
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
              fontSize='md'
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
