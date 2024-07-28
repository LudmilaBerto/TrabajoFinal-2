import { Box, Button, Divider, Flex, Text } from '@chakra-ui/react'

const SectionTresB=()=>{



    return(
        <Box 
            flexBasis='50%'
            px='60px'
        >
            <Text 
                as='p'
                fontFamily='"Barlow", sans-serif'
                fontWeight='200'
                fontSize='13px'
                textAlign='center'
                color='color.secundario'
                w='150px'
                border='solid #fff 1px'
                borderRadius='14px'
                p='5px'
            ></Text>

            <Text 
                as='h3'
                fontFamily='"Poppins", sans-serif'
                fontWeight='500'
                fontSize='25px'
                color='color.secundario'
                py='15px'
            ></Text>

            <Divider
                position='horizontal'
                border='none'
                pt='1px' 
                bg='color.lineagris'

            />

            <Text 
                as='h4'
                fontFamily='"Poppins", sans-serif'
                fontWeight='200'
                fontSize='20px'
                color='color.secundario'
                py='20px'
            >

            </Text>

            <Flex justify='end'>

                <Button
                   fontFamily='"Poppins", sans-serif'
                   fontWeight='400'
                   fontSize='sm'
                   color='#ffffff96'
                   bg='color.principal'
                   mr='15px'
                   p='10px'
                   _hover={{
                    bg: "#181641cc",
                    borderRadius: "12px"}}  
                >
                    Anterior
                </Button>
                <Button
                    fontFamily='"Poppins", sans-serif'
                    fontWeight='400'
                    fontSize='sm'
                    color='color.secundario'
                    bg='color.principal'
                    p='10px'
                    _hover={{
                     bg: "#181641cc",
                     borderRadius: "12px"}}  
                >
                    Próximo
                </Button>

            </Flex>


        </Box>
    )
}

export {SectionTresB}