import { Nav } from "../Nav/Nav";
import { Divider, Flex, IconButton, Link, Text, useColorMode } from '@chakra-ui/react';
import CV from '../../assets/document/Ludmila Berto CV.pdf';
import { SunIcon, MoonIcon, ArrowDownIcon } from '@chakra-ui/icons';

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as='header'
      w='100%'
      h='90px'
      pl='60px'
      pr='60px'
      bg={colorMode === 'light' ? 'light.primary' : 'dark.primary'}
      color={colorMode === 'light' ? 'light.textSecondary' : 'dark.textSecondary'}
      borderBottom='solid #6a686d94 1px'
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
          fontSize='35px'
          mr='10'
        >
          L.
        </Text>

        {/* Menu */}
        <Nav />
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
          variant='solid'
          size='md'
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
          py='7px'
          m='10px'
        />

        <Link
          href={CV}
          download='Ludmila Berto CV'
          className='boton-descarga'
          bg='light.secondary'
          py='7px'
          px='9px'
          border='solid #ffffff 1px'
          borderRadius='50%'
          fontSize='13px'
          _hover={{ backgroundColor: '#d4d2d2' }}
        >
           <ArrowDownIcon
            boxSize='20px'
            borderRadius='50%'
            border={`solid ${colorMode === 'light' ? 'light.textPrimary' : 'dark.textPrimary'} 1px`}
            color={colorMode === 'light' ? 'light.primary' : 'dark.primary'}
            p='2px'
          />
        </Link>

        <Link
          href={CV}
          download='Ludmila Berto CV'
          className='texto-descarga'
          color='light.secondary'
          fontFamily='"Mulish", sans-serif'
          fontWeight='200'
          fontSize='16px'
          pl='10px'
        >
          Descargar CV
        </Link>
      </Flex>
    </Flex>
  );
}

export { Header };
