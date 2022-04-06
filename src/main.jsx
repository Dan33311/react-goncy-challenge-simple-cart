import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'

import App2 from './App2'
import theme from './theme'

import './index.css'

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App2 />
  </ChakraProvider>,
  document.getElementById('root')
)
