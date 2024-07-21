import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChakraProvider} from '@chakra-ui/react'
import './index.css'
import { Header } from './Components/Header/Header'
import { Main } from './Components/Main/Main'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ChakraProvider>
      <Header/>
      <Main/>
      
     </ChakraProvider>
  </React.StrictMode>,
)
