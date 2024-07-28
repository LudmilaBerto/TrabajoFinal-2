import { Box, Flex, Image, Link, Text } from "@chakra-ui/react"
import CirculoRosaHablemos from '../../assets/img/Circulo Rosa Hablemos.svg'




const SectionFooterUno=()=>{


    return(
        <Flex
            as='section'
            className="section-uno-footer"
            justify='space-between'
            borderBottom='solid #6a686d94 1px'
            py='14'    
        >
            <Box
                className="contenedor-h2-p-footer"
                flexBasis='60%'
            >
                <Text 
                  as='h2'
                  fontFamily='"Poppins", sans-serif'
                  fontWeight='300'
                  fontSize='28px'
                  >
                    ¿Es interesante <Text 
                                        as='span'

                                    >
                                        trabajar conmigo?
                                    </Text>
                  </Text>
                
                <Text 
                    as='p'
                    fontFamily='"Roboto", sans-serif'
                    fontWeight='400'
                    fontSize='13px'
                    >
                        Para colaborar, haga clic en los enlaces de contacto al inicio o al pie de esta página web, o en el círculo rosa a la derecha. ¡Espero con interés nuestra colaboración!
                </Text>
            </Box>

            <Link
                as='p'
                href="https://t.me/LudmilaBerto"
                flexBasis='10%'
            >
                <Image 
                    src={CirculoRosaHablemos} 
                    alt="circulo rosa hablemos" 
                    w='120px'
                />
            </Link>

        </Flex>
    )
}

export {SectionFooterUno}