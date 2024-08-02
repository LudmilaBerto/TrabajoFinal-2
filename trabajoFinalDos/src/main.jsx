import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraProvider, ColorModeScript} from '@chakra-ui/react'
import { Header } from './Components/Header/Header'
import { Main } from './Components/Main/Main'
import { Footer } from './Components/Footer/Footer'
import {theme} from './theme'


  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ChakraProvider theme={theme} >
     <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Header/>
      <Main/>
      <Footer/>
     </ChakraProvider>
  </React.StrictMode>,
)
