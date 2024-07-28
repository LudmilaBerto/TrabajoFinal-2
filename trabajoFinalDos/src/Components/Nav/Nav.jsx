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
                  href="#habilidades" 
                  fontFamily='"Mulish", sans-serif' 
                  fontSize='16px' 
                  fontWeight='200' 
                  ml='45px'
                >
                    Mis Habilidades
                </Link>
            </ScrollLink>
            <Link 
              href="#acercademi" 
              fontFamily='"Mulish", sans-serif' 
              fontSize='16px' 
              fontWeight='200' 
              ml='45px'
            >
                Acerca De Mí
            </Link>

            <Link 
              href="#miexperiencia" 
              fontFamily='"Mulish", sans-serif' 
              fontSize='16px' 
              fontWeight='200' 
              ml='45px'
            >
                Mi Experiencia
            </Link>

            <Link 
              href="#mitrabajo" 
              fontFamily='"Mulish", sans-serif' 
              fontSize='16px' 
              fontWeight='200' 
              ml='45px'
            >
                Mi Trabajo
            </Link>

            <Link 
              href="#contacto" 
              fontFamily='"Mulish", sans-serif' 
              fontSize='16px' 
              fontWeight='200' 
              ml='45px'
            >
                Contacto
            </Link>

        </Flex>
    )
    
}

export {Nav}