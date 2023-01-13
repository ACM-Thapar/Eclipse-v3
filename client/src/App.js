import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Home from './pages/Home'
import { Route, Router } from 'react-router-dom'

function App() {
  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  )  
}

export default App;
