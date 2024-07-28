import { Flex, Link} from "@chakra-ui/react";
import { Link as ScrollLink } from 'react-scroll'

function Nav() {

    return(
        <Flex 
          as='nav' 
          align='center'
        >
            <ScrollLink to="habilidades" smooth={true} duration={500} >
                <Link 
                  fontFamily='"Mulish", sans-serif' 
                  fontSize='16px' 
                  fontWeight='200' 
                  ml='45px'
                >
                    Mis Habilidades
                </Link>
            </ScrollLink>

            <ScrollLink to="acercademi" smooth={true} duration={500}>

                <Link 
                  fontFamily='"Mulish", sans-serif' 
                  fontSize='16px' 
                  fontWeight='200' 
                  ml='45px'
                >
                    Acerca De Mí
                </Link>

            </ScrollLink>

          

            <ScrollLink to="miexperiencia" smooth={true} duration={500}>
                <Link 
                  fontFamily='"Mulish", sans-serif' 
                  fontSize='16px' 
                  fontWeight='200' 
                  ml='45px'
                >
                    Mi Experiencia
                </Link>
            </ScrollLink>



            <ScrollLink to="mitrabajo" smooth={true} duration={500}>
                <Link 
                  fontFamily='"Mulish", sans-serif' 
                  fontSize='16px' 
                  fontWeight='200' 
                  ml='45px'
                >
                    Mi Trabajo
                </Link>
            </ScrollLink>



            <ScrollLink to="contacto" smooth={true} duration={500}>
                <Link 
                  fontFamily='"Mulish", sans-serif' 
                  fontSize='16px' 
                  fontWeight='200' 
                  ml='45px'
                >
                    Contacto
                </Link>
            </ScrollLink>



        </Flex>
    )
    
}

export {Nav}