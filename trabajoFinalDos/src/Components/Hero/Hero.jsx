import {Box, Flex, Text, Link, Image} from "@chakra-ui/react"
import imagenPerfil from '../../assets/img/foto perfil.png'
import imagenMedioCirculo from '../../assets/img/forma-mediocirculo+circulo.png'


const Hero=()=>{

    return(
        <Flex bg='#201f51'w='100%' h='100vh' px='60px' wrap='wrap' id="acercademi">

            {/* Divido la section uno(HERO) en 3. */}

            <Box className="SectionUno-A" fontFamily='"Poppins", sans-serif' flexBasis='33%'>

                <Text color='#f2f0ef' fontWeight='200'
                fontSize='35px'
                lineHeight='50px' 
                pt='35px'
                pb='230px'
                >Hola, Soy Ludmila Berto,
                <Text as='span'
                fontFamily='"Poppins", sans-serif'
                fontWeight='400'
                className="Span-Section-Uno-A"> Una desarrolladora Front-End
                </Text></Text>
                
                <Box className='contenedor-texto-iconsContact'>
                    
                    <Text color='#ffffff' fontWeight='300'
                    fontSize='22px'
                    pb='10px'>Por Favor Conéctate Conmigo</Text>

                    <Flex className="conteiner-en-linea">

                        <Flex className="contenedor-icono-y-enlace" align='center'>
                            
                            <Box color='#f2f0ef' fontSize='30px' p='5px'><i className="fa-brands fa-linkedin contacto"></i></Box>
                            

                            <Link href="https://www.linkedin.com/in/ludmila-berto/" target="_blank" className="linkContacto" fontFamily='"Poppins", sans-serif'
                            fontWeight='200'
                            color='#f2f0ef'
                            fontSize='13px'
                            mx='3px'
                            py='7px'
                            px='13px'
                            border='solid #ffffff 1px'
                            borderRadius='15px' _hover={{backgroundColor: '#555486'}}>LinkedIn</Link>

                        </Flex>

                        <Flex className="contenedor-icono-y-enlace" align='center'> 

                            <Box color='#f2f0ef' fontSize='30px' p='5px'><i className="fa-brands fa-telegram contacto"></i></Box>

                            <Link href="https://t.me/LudmilaBerto" target="_blank" className="linkContacto" fontFamily='"Poppins", sans-serif'
                            fontWeight='200'
                            color='#f2f0ef'
                            fontSize='13px'
                            mx='3px'
                            py='7px'
                            px='13px'
                            border='solid #ffffff 1px'
                            borderRadius='15px' _hover={{backgroundColor: '#555486'}}>Telegram</Link>

                        </Flex>

                        <Flex className="contenedor-icono-y-enlace" align='center'>

                            <Box color='#f2f0ef' fontSize='30px' p='5px'><i className="fa-brands fa-github contacto" ></i></Box>
                            
                            <Link href="https://github.com/LudmilaBerto" target="_blank" className="linkContacto" fontFamily='"Poppins", sans-serif' fontWeight='200' color='#f2f0ef' fontSize='13px' mx='3px' py='7px' px='13px' border='solid #ffffff 1px' borderRadius='15px' _hover={{backgroundColor: '#555486'}}>GitHub</Link>

                        </Flex>

                    </Flex>
                </Box>    
            </Box>

            <Box className="SectionUno-B" flexBasis='33%' pt='35px'>

                <Image src={imagenPerfil} className='Imagen-De-Perfil'  h='450px' m='20px'/>

                <Box className="cuadradito2D" bg='#f2f0ef' w='110px' h='100px' transform='translate(300px, -360px)' fontFamily='"Poppins", sans-serif;' color='#201f51'>

                    <Text  fontSize='30px' fontWeight='600' pt='8px' px='10px'>22+</Text>
                    <Text fontSize='16px' fontWeight='500' px='12px' lineHeight='18px' >Semanas De Clases</Text>

                </Box>

            </Box>

            <Box className="SectionUno-C" flexBasis='33%' pt='35px'>

                <Flex display='column' className="Figuras-MedioCirculo">
                    
                    <Flex justify='end' mt='35px' mr='40px' pb='225px'>

                        <Image src={imagenMedioCirculo} alt="imagen de forma de medio circulo con circulo rosa" className="imagen-medio-circulo" w='115px' h='115px'/>

                    </Flex>
                    
                    <Box pl='20px'>
                        <Text color='#ffffff' fontFamily='"Barlow", sans-serif' fontWeight='200' fontSize='13px'>Estudiante de Informática y Desarrollo Web Full Stack con interés en la programación y el deseo de seguir ampliando sus conocimientos en este campo.</Text>

                        <Text color='#ffffff' fontFamily='"Poppins", sans-serif' fontWeight='300' fontSize='15px' pt='15px' >Descargar mi CV <i className="bi bi-arrow-up-right"></i></Text>

                    </Box>

                </Flex>

            </Box>
        
        </Flex>
    )
}

export {Hero}