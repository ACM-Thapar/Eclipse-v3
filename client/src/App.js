import * as React from 'react'
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Home from './pages/Home/Home'
import { Route, Router } from 'react-router-dom'
import About from './pages/About';
import AuthModal from './components/AuthModal/AuthModal';

function App() {
  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  )  
}

export default App;
