import { Box, Link } from "@chakra-ui/react"



const ContactoFooter=()=>{


    return(
        <Box
            className="contenedor-contacto-footer"
            ml='7'
        >
            <Link
                as='a'
                href="https://www.linkedin.com/in/ludmila-berto/"
                target="_blank"
                fontFamily='"Mulish", sans-serif' 
                fontSize='16px' 
                fontWeight='200' 
                ml='45px'
            >
                LinkedIn
            </Link>

            <Link
                as='a'
                href="https://github.com/LudmilaBerto"
                target="_blank"
                fontFamily='"Mulish", sans-serif' 
                fontSize='16px' 
                fontWeight='200' 
                ml='45px'
            >
                GitHub
            </Link>

            <Link
                as='a'
                href="https://t.me/LudmilaBerto"
                target="_blank"
                fontFamily='"Mulish", sans-serif' 
                fontSize='16px' 
                fontWeight='200' 
                ml='45px'
            >
                Telegram
            </Link>

        </Box>
    )
}

export {ContactoFooter}