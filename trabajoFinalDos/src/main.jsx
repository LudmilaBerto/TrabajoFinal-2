import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraProvider} from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react"
import './index.css'
import { Header } from './Components/Header/Header'
import { Main } from './Components/Main/Main'

const theme = extendTheme({
  colors: {
    color: {
      principal:"#201f51",
      // ...
      secundario: "#FDFCFE",
      // ...
      terciario:"#F0F1EE",
      // ...
      letragris:"#64657D",
      // ...
      hover:"#555486",
      // ...
      lineagris:"#b9b7b7a2"
      
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ChakraProvider theme={theme}>
      <Header/>
      <Main/>
      
     </ChakraProvider>
  </React.StrictMode>,
)
