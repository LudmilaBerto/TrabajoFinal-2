import { extendTheme } from '@chakra-ui/react';

// Configuración del tema
const theme = extendTheme({
  // Configuración del modo de color
  config: {
    initialColorMode: 'light',  // Modo inicial, puede ser 'light', 'dark' o 'system'
    useSystemColorMode: false,  // Si se debe usar el modo de color del sistema
  },
  // Definición de colores
  colors: {
    light: {
      primary: '#211e51',
      secondary: '#f2f1ee',
      textPrimary: '#ffffff',
      textSecondary: '#211e51',
      textTertiary: '#1c1b4f',
    },
    dark: {
      primary: '#222326',
      secondary: '#0B0C0D',
      textPrimary: '#ffffff',
      textSecondary: '#ffffff',
      textTertiary: '#222326',
    },
    background: {
      light: '#f0f0f0',
      dark: '#181818',
    },
  },
  // Estilos globales
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'light' ? 'background.light' : 'background.dark',
        color: props.colorMode === 'light' ? 'light.textPrimary' : 'dark.textPrimary',
      },
    }),
  },
  // Configuración de componentes
  components: {
    Button: {
      variants: {
        outline: (props) => ({
          borderColor: props.colorMode === 'light' ? 'light.primary' : 'dark.primary',
          color: props.colorMode === 'light' ? 'light.primary' : 'dark.primary',
          _hover: {
            borderColor: props.colorMode === 'light' ? 'light.textTertiary' : 'dark.textTertiary',
            color: props.colorMode === 'light' ? 'light.textTertiary' : 'dark.textTertiary',
          },
        }),
      },
    },
    // Otros componentes personalizados pueden ir aquí
  },
});

export {theme}