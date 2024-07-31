import { Flex, Link, useColorMode} from "@chakra-ui/react";
import { Link as ScrollLink } from 'react-scroll'

function Nav() {
    const { colorMode } = useColorMode();

    return(
        <Flex 
          as='nav' 
          display={{ base: "none", sm: "none",md:"block" }} 
          align='center'
          flexWrap="wrap"
          bg={colorMode === 'light' ? 'light.primary' : 'dark.primary'}
          color={colorMode === 'light' ? 'light.textPrimary' : 'dark.textPrimary'}
        >
            <ScrollLink 
              to="habilidades" 
              smooth={true} 
              duration={500} 
            >
                <Link 
                  fontFamily='"Mulish", sans-serif' 
                  fontSize={{base:"null", sm:"null", md:"xs", lg:"md", xl:"lg"}}
                  fontWeight='200' 
                  mr={{base:"null", sm:"null", md:"4", lg:"null", xl:"8"}}
                >
                    Mis Habilidades
                </Link>
            </ScrollLink>

            <ScrollLink to="acercademi" smooth={true} duration={500}>

                <Link 
                  fontFamily='"Mulish", sans-serif' 
                  fontSize={{base:"null", sm:"null", md:"xs", lg:"md", xl:"lg"}}
                  fontWeight='200' 
                  mr={{base:"null", sm:"null", md:"4", lg:"null", xl:"8"}}
                >
                    Acerca De Mí
                </Link>

            </ScrollLink>

          

            <ScrollLink to="miexperiencia" smooth={true} duration={500}>
                <Link 
                  fontFamily='"Mulish", sans-serif' 
                  fontSize={{base:"null", sm:"null", md:"xs", lg:"md", xl:"lg"}}
                  fontWeight='200' 
                  mr={{base:"null", sm:"null", md:"4", lg:"null", xl:"8"}}
                >
                    Mi Experiencia
                </Link>
            </ScrollLink>



            <ScrollLink to="mitrabajo" smooth={true} duration={500}>
                <Link 
                  fontFamily='"Mulish", sans-serif' 
                  fontSize={{base:"null", sm:"null", md:"xs", lg:"md", xl:"lg"}}
                  fontWeight='200' 
                  mr={{base:"null", sm:"null", md:"4", lg:"null", xl:"8"}}
                >
                    Mi Trabajo
                </Link>
            </ScrollLink>



            <ScrollLink to="contacto" smooth={true} duration={500}>
                <Link 
                  fontFamily='"Mulish", sans-serif' 
                  fontSize={{base:"null", sm:"null", md:"xs", lg:"md", xl:"lg"}}
                  fontWeight='200' 
                  mr={{base:"null", sm:"null", md:"4", lg:"null", xl:"8"}}
                >
                    Contacto
                </Link>
            </ScrollLink>



        </Flex>
    )
    
}

export {Nav}