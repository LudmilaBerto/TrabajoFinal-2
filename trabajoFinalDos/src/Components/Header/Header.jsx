import { Nav } from "../Nav/Nav";
import { Divider, Flex, IconButton, Link, Text, useColorMode } from '@chakra-ui/react';
import CV from '../../assets/document/Ludmila Berto CV.pdf';
import { SunIcon, MoonIcon, ArrowDownIcon } from '@chakra-ui/icons';

const Header=()=> {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as='header'
      w='100%'    
      h='90px'
      px={{base:"10", sm:"12", md:"6",lg:"14"}}
      bg={colorMode === 'light' ? 'light.primary' : 'dark.primary'}
      color={colorMode === 'light' ? 'light.textSecondary' : 'dark.textSecondary'}
      borderBottom={{
        base: "0px",
        sm: "solid #6a686d94 1px",
      }}    
      justify='space-between'
      align='center'
    >
      <Flex
        color='light.secondary'
        align='center'
      >
        {/* Logo */}
        <Text
          as='h2'
          fontFamily='"Barlow", sans-serif'
          fontWeight='500'
          fontSize={{base:"3xl", lg:"4xl"}}
          mr={{base:"0", md:"5", lg:"10"}}
        >
          L.
        </Text>

        {/* Menu */}
        <Nav/>
      </Flex>

      {/* BOTONES EN LA ESQUINA DERECHA */}
      <Flex
        as='div'
        className='botones'
        align='center'
      >
          <IconButton
          onClick={toggleColorMode}
          aria-label={colorMode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          flexBasis={{base:"null", sm:"null",md:"20%"}}
          variant='solid'
          size={{base:"sm", sm:"md"}}
          mr='1'
          bg={colorMode === 'light' ? 'light.primary' : 'dark.primary'}
          color={colorMode === 'light' ? 'light.textPrimary' : 'dark.textPrimary'}
          border='solid #ffffff 1px'
          borderRadius='50%'
          _hover={{ backgroundColor:' #8C8988' }}
          _active={{
            bg: colorMode === 'light' ? 'light.textSecondary' : 'dark.textSecondary',
          }}
        />

        <Divider
          as='hr'
          orientation='vertical'
          py='3'
          m='2.5'
        />

        <Link
          display={{base:"none", sm:"none", md:"block"}} 
          href={CV}
          download='Ludmila Berto CV'
          className='boton-descarga'
          bg='light.secondary'
          py='2'
          px='2'
          border='solid #ffffff 1px'
          borderRadius='50%'
          fontSize='xs'
          _hover={{ backgroundColor: '#d4d2d2' }}
        >
           <ArrowDownIcon
            fontSize={{base:"null", sm:"null", md:"xs",lg:"xl"}}
            borderRadius='50%'
            border={`solid ${colorMode === 'light' ? 'light.textPrimary' : 'dark.textPrimary'} 1px`}
            color={colorMode === 'light' ? 'light.primary' : 'dark.primary'}
          />
        </Link>

        <Link
          href={CV}
          download='Ludmila Berto CV'
          className='texto-descarga'
          display='flex'
          color='light.secondary'
          fontFamily='"Mulish", sans-serif'
          fontWeight='200'
          fontSize={{base:"null", sm:"null", md:"xs", lg:"md", xl:"lg"}}
          pl='2.5'
        >
          <Text 
            display={{base:"none", md:"block"}} // Este texto no se va a mostrar en una resolucion menor a 480px
            pr='2'
          >
            Descargar
          </Text>

          <Text>
            CV
          </Text>
          
        </Link>
      </Flex>
    </Flex>
  );
}

export { Header };
