import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { extendTheme } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'


const styles = {
  global: (props) => ({
    body: {
      bg: "#000", // Dark mode background color
      color: "whiteAlpha.900", // Dark mode text color
    },
  }),
  html: {
    "@media (prefers-color-scheme: light)": {
      background: "#000", // Light mode background color (same as dark mode)
      color: "whiteAlpha.900", // Light mode text color (same as dark mode)
    },
    "@media (prefers-color-scheme: dark)": {
      background: "#000", // Dark mode background color
      color: "whiteAlpha.900", // Dark mode text color
    },
  },
};


const config = {
	initialColorMode: "dark",
	useSystemColorMode: false,
};

const theme = extendTheme({ config,styles })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider theme={theme}>

    <App />
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
