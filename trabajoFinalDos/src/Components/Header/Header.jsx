import { Nav } from "../Nav/Nav";
import {Divider, Flex, Link, Text} from '@chakra-ui/react'
import CV from '../../assets/document/Ludmila Berto CV.pdf'

function Header(){

    return(
        <Flex 
          as='header'
          w='100%'
          h='90px' 
          pl='60px' 
          pr='60px' 
          bg='color.principal' 
          borderBottom='solid #6a686d94 1px' 
          justify='space-between' 
          align='center'>
            <Flex 
              color='color.secundario' 
              align='center'
            >
                {/* Logo */}
                <Text 
                  fontFamily='"Barlow", sans-serif'
                  fontWeight='500' 
                  fontSize='35px'
                  mr='10'
                >
                    L.
                </Text>

                {/* Menu */}
                <Nav/>

            </Flex> 

            {/* BOTONES EN LA ESQUINA DERECHA */}

            <Flex 
              className='botones' 
              align='center'
            >
                <Link 
                  href='#' 
                 className='tema-oscuro' 
                 color='color.secundario' 
                 border='solid #ffffff 1px' 
                 borderRadius='50%' 
                 fontSize='13px' 
                 py='6px' 
                 px='7px' 
                 _hover={{backgroundColor: '#535283'}}
                >
                    <i className="bi bi-moon"></i>
                </Link>

                <Divider 
                  orientation='vertical'
                 py='7px' 
                 m='10px'
                />

                <Link 
                  href={CV} 
                  download='Ludmila Berto CV' 
                  className='boton-descarga' 
                  bg='color.secundario' 
                  py='7px' 
                  px='9px' 
                  borderRadius='50%' 
                  fontSize='13px'
                  _hover={{backgroundColor: '#d4d2d2'}}
                >
                    <i className="fa-solid fa-arrow-down"></i>
                </Link>
                
                <Link 
                  href={CV} 
                  download='Ludmila Berto CV' 
                  className='texto-descarga' 
                  color='color.secundario' 
                  fontFamily='"Mulish", sans-serif' 
                  fontWeight='200' 
                  fontSize='16px' 
                  pl='10px'
                >
                    Descargar CV
                </Link>
            </Flex>
        </Flex>
    )
}

export {Header}