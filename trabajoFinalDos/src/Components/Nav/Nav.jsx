import { Flex, Link, Menu } from "@chakra-ui/react";


function Nav() {

    return(
        <Flex align='center'>
            <Link href="#habilidades" fontFamily='"Mulish", sans-serif' fontSize='16px' fontWeight='200' ml='45px'>Mis Habilidades</Link>
            <Link href="#acercademi" fontFamily='"Mulish", sans-serif' fontSize='16px' fontWeight='200' ml='45px'>Acerca De Mí</Link>
            <Link href="#miexperiencia" fontFamily='"Mulish", sans-serif' fontSize='16px' fontWeight='200' ml='45px'>Mi Experiencia</Link>
            <Link href="#mitrabajo" fontFamily='"Mulish", sans-serif' fontSize='16px' fontWeight='200' ml='45px'>Mi Trabajo</Link>
            <Link href="#contacto" fontFamily='"Mulish", sans-serif' fontSize='16px' fontWeight='200' ml='45px'>Contacto</Link>

        </Flex>
    )
    
}

export {Nav}