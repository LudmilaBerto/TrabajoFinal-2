import { Box, Link, useColorMode } from "@chakra-ui/react"



const ContactoFooter=()=>{

    const { colorMode } = useColorMode();

    return(
        <Box
            className="contenedor-contacto-footer"
            pl={{base:"0",md:"1", xl:"7"}}
            bg={colorMode === 'light' ? 'light.primary' : 'dark.primary'}
            color={colorMode === 'light' ? 'light.textPrimary' : 'dark.textPrimary'}
        >
            
            <Link
                href="https://www.linkedin.com/in/ludmila-berto/"
                target="_blank"
                fontFamily='"Mulish", sans-serif' 
                fontSize='md' 
                fontWeight='200' 
                ml={{base:"6",md:"3", lg:"4", xl:"12"}}

            >
                LinkedIn
            </Link>

            <Link
                href="https://github.com/LudmilaBerto"
                target="_blank"
                fontFamily='"Mulish", sans-serif' 
                fontSize='md' 
                fontWeight='200' 
                ml={{base:"6",sm:"14",md:"3", lg:"4", xl:"12"}}
            >
                GitHub
            </Link>

            <Link
                href="https://t.me/LudmilaBerto"
                target="_blank"
                fontFamily='"Mulish", sans-serif' 
                fontSize='md' 
                fontWeight='200' 
                ml={{base:"6",sm:"14",md:"3", lg:"4", xl:"12"}}
            >
                Telegram
            </Link>

        </Box>
    )
}

export {ContactoFooter}