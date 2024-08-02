import { Box, Flex, Image, Text, Link, useColorMode } from '@chakra-ui/react'
import proyectoSeis from '../../assets/img/Proyecto Seis.png'
import proyectoCinco from '../../assets/img/Proyecto Cinco.jpg'
import proyectoCuatro from '../../assets/img/Imagen Proyecto Cuatro.png'
import proyectoTres from '../../assets/img/Imagen Proyecto 3.2.png'

const SectionCuatro=()=>{

    const { colorMode } = useColorMode();
    // Establesco el color del borde dependiendo de si esta en el tema Claro o Oscuro. Lo mismo con el Hover bg del Link
    const borderColor = colorMode === 'light' ? '#211e51' : '#ffffff';
    const hoverBgColor = colorMode === 'light' ? '#55548648' : '#bcbcbc';


    return(
        <Flex
          id='mitrabajo'
          className='SectionCuatro'
          as='section'
          color={colorMode === 'light' ? 'light.textSecondary' : 'dark.textSecondary'}
          bg={colorMode === 'light' ? 'light.secondary' : 'dark.secondary'}
          flexWrap='wrap'
          py='10'
          px={{base:"12", sm:"null", md:"10",lg:"14", xl:"16"}}

        >
            <Box
              as='div'
              flexDir='column'
              className='SectionCuatroA'
              flexBasis={{base:"100%", sm:"null",md:"50%"}}
              pt='7'
              pb='12'
              pr={{base:"0",md:"14"}}

              >
                <Text
                  as='h2'
                  fontFamily='"Poppins", sans-serif'
                  fontWeight='500'
                  fontSize={{base:"2xl", sm:"null",md:"null", lg:"null", xl:"4xl"}}
                  color={colorMode === 'light' ? 'light.textSecondary' : 'dark.textSecondary'}
                  >
                    Mis últimos trabajos
                </Text>

                <Text
                  as='p'
                  fontFamily='"Roboto", sans-serif'
                  fontWeight='400'
                  lineHeight='4'
                  fontSize='sm'
                  color={colorMode === 'light' ? 'light.textSecondary' : 'dark.textSecondary'}
                  pt='2.5'
                >
                     Aquí podrás visualizar mis proyectos hasta la fecha, ordenados de manera cronológica, comenzando por el más reciente. Cada proyecto incluye un enlace para visualizarlo en vivo, junto con su documentación correspondiente. ¡Explora y descubre mi trabajo!
                </Text>

                {/* PROYECTO  SEIS*/}

                <Flex 
                  className='Contenedor-imagen-link-proyecto-A'
                  flexDir='column'
                  mt='24'
                  ml={{base:"0",md:"10", lg:"20", xl:"36"}}

                  
                >

                    <Link 
                        
                        href='https://ludmilaberto.github.io/ProyectoSeis/' 
                        target='_blank'
                    >
                    
                        <Image 
                            src={proyectoSeis} 
                            alt='imagen de una pagina interactiva de star wars'
                            w='350px'
                        />
                    
                    </Link>

                    <Link 
                         className='link-proyecto-github'
                        href='https://github.com/LudmilaBerto/ProyectoSeis' 
                        target='_blank'
                        fontFamily='"Poppins", sans-serif'
                        textAlign='center'
                        fontSize='sm'
                        color={colorMode === 'light' ? 'light.textSecondary' : 'dark.textSecondary'}
                        p='1'
                        my='5'
                        w='60px'
                        borderRadius='13px'
                        border={`solid ${borderColor} 1px`}                        
                        _hover={{backgroundColor:  hoverBgColor}}

                    >
                        github
                    </Link>

                    <Text 
                        as='h3'
                        fontFamily='"Poppins", sans-serif'
                        fontWeight='500'
                        fontSize='3xl'
                        color={colorMode === 'light' ? 'light.textSecondary' : 'dark.textSecondary'}
                    >
                        Proyecto 6
                    </Text>
                    
                    <Text 
                        as='p'
                        fontFamily='"Roboto", sans-serif'
                        lineHeight='4'
                        fontWeight='400'
                        fontSize='xs'
                        color={colorMode === 'light' ? 'light.textSecondary' : 'dark.textSecondary'}
                        pt='2.5'
                        
                    >
                        Desarrollo de una página web interactiva que utiliza la API de Star Wars para mostrar información detallada sobre personajes, naves espaciales y películas. Incluye un buscador para facilitar la búsqueda de elementos específicos, ofreciendo una experiencia de usuario fluida y emocionante en el universo de Star Wars.
                    </Text>

                </Flex >


                {/* PROYECTO CINCO*/}
                
                <Flex 
                  as='div'
                  className='Contenedor-imagen-link-proyecto-A'
                  flexDir='column'
                  mt='24'
                  ml={{base:"0",md:"10", lg:"20", xl:"36"}}
                >

                    <Link
                        href='https://ludmilaberto.github.io/ProyectoCinco-Men-/#seguidos'
                        target='_blank'
                    >
                    
                        <Image 
                            as='img'
                            src={proyectoCinco} 
                            alt='imagen de un menú'
                            w='300px'
                            h='330'

                        />
                    
                    </Link>
                    
                    <Link 
                         className='link-proyecto-github'
                        href='https://github.com/LudmilaBerto/ProyectoCinco-Men-' 
                        target='_blank'
                        fontFamily='"Poppins", sans-serif'
                        textAlign='center'
                        fontSize='sm'
                        color={colorMode === 'light' ? 'light.textSecondary' : 'dark.textSecondary'}
                        p='1'
                        my='5'
                        w='60px'
                        border={`solid ${borderColor} 1px`}                        
                        _hover={{backgroundColor:  hoverBgColor}}
                        borderRadius='13px'
                    >
                        github
                    </Link>

                    <Text 
                        as='h3'
                        fontFamily='"Poppins", sans-serif'
                        fontWeight='500'
                        fontSize='3xl'
                        color={colorMode === 'light' ? 'light.textSecondary' : 'dark.textSecondary'}
                    >
                        Proyecto 5
                    </Text>

                    <Text 
                        as='p'
                        fontFamily='"Roboto", sans-serif'
                        fontWeight='400'
                        lineHeight='4'
                        fontSize='xs'
                        color={colorMode === 'light' ? 'light.textSecondary' : 'dark.textSecondary'}
                        pt='2.5'
                    >
                        Creación de un menú de navegación responsivo basado en un diseño proporcionado. Utilizando HTML y CSS, el menú se adapta a dispositivos móviles y de escritorio, garantizando una experiencia de usuario fluida y atractiva en todas las plataformas.
                    </Text>


                </Flex>

            </Box>

            <Box 
              as='div'
              className='SectionCuatroB' 
              flexBasis={{base:"100%", sm:"null",md:"40%", lg:"45%"}}
              pt='7'
              pl={{base:"0",md:"10", lg:"16"}}

            >

                {/* PROYECTO  CUATRO*/}

                <Flex 
                  as='div'
                  className='Contenedor-imagen-link-proyecto-B'
                  flexBasis={{base:"100%", sm:"null",md:"45%"}}
                  flexDir='column'
                  pb='24'
                >
                    <Link 
                         href="https://ludmilaberto.github.io/ProyectoCuatro/" 
                        target="_blank"
                    >
                        
                        <Image 
                          src={proyectoCuatro} 
                          alt='imagen de un componente'
                          w='300px'
                          h='330px'
                        />
                    
                    </Link>

                    <Link 
                        className='link-proyecto-github'
                        href="https://github.com/LudmilaBerto/ProyectoCuatro" 
                        target="_blank" 
                        fontFamily='"Poppins", sans-serif'
                        textAlign='center'
                        fontSize='sm'
                        color={colorMode === 'light' ? 'light.textSecondary' : 'dark.textSecondary'}
                        p='1'
                        my='5'
                        w='60px'
                        borderRadius='13px'
                        border={`solid ${borderColor} 1px`}                        
                        _hover={{backgroundColor:  hoverBgColor}}                        
                    >
                            github
                    </Link>

                    <Text 
                        as='h3'
                        fontFamily='"Poppins", sans-serif'
                        fontWeight='500'
                        fontSize='3xl'
                        color={colorMode === 'light' ? 'light.textSecondary' : 'dark.textSecondary'}
                    >
                        Proyecto 4
                    </Text>

                    <Text 
                        as='p'
                        fontFamily='"Roboto", sans-serif'
                        fontWeight='400'
                        lineHeight='4'
                        fontSize='xs'
                        color={colorMode === 'light' ? 'light.textSecondary' : 'dark.textSecondary'}
                        pt='2.5'
                    >
                        Proyecto sobre un componente (Sección de una pagina web) con 4 cajas (boxes). Cada caja contiene información sobre los servicios que ofrecen y los beneficios del mismo.         
                    </Text>

                </Flex>


                {/* PROYECTO  TRES-2*/}

                <Flex 
                  as='div'
                  className='Contenedor-imagen-link-proyecto-B'
                  flexDir='column'
                  
                >
                    <Link 
                        href='https://ludmilaberto.github.io/image-based-web-project-2/' 
                        target='_blank'
                    >
                        
                        <Image 
                          src={proyectoTres} 
                          alt='imagen de un componente'
                          w='350px'
                          />
                    
                    </Link>

                    <Link
                        className='link-proyecto-github'
                        href='https://github.com/LudmilaBerto/image-based-web-project-2'
                        target='_blank'
                        fontFamily='"Poppins", sans-serif'
                        textAlign='center'
                        fontSize='sm'
                        color={colorMode === 'light' ? 'light.textSecondary' : 'dark.textSecondary'}
                        p='1'
                        my='5'
                        w='60px'
                        borderRadius='13px'
                        border={`solid ${borderColor} 1px`}                        
                        _hover={{backgroundColor:  hoverBgColor}}
                    >
                        github
                    </Link>

                    <Text 
                        as='h3'
                        fontFamily='"Poppins", sans-serif'
                        fontWeight='500'
                        fontSize='3xl'
                        color={colorMode === 'light' ? 'light.textSecondary' : 'dark.textSecondary'}
                    >
                        Proyecto 3.2
                    </Text>

                    <Text 
                        as='p'
                        fontFamily='"Roboto", sans-serif'
                        fontWeight='400'
                        lineHeight='4'
                        fontSize='xs'
                        color={colorMode === 'light' ? 'light.textSecondary' : 'dark.textSecondary'}
                        pt='2.5'
                    >
                        Proyecto es sobre un componente (sección) de una página web. Contiene un formulario para inicio de sesión o registrarse para ingresar a una cuenta en un sitio web sobre una agencia de viajes.
                    </Text>

                    <Link
                        className='link-repositorio'
                        href='https://github.com/LudmilaBerto?tab=repositories'
                        target='_blank'
                        fontFamily='"Poppins", sans-serif'
                        fontWeight='500'
                        fontSize='sm'
                        color={colorMode === 'light' ? 'light.textSecondary' : 'dark.textSecondary'}
                        mt={{base:"28",md:"72"}}

                    
                    >
                        Ver Más <i className="bi bi-arrow-up-right"></i>
                    </Link>

                </Flex>

            </Box>

        </Flex>
    )
}

export {SectionCuatro}