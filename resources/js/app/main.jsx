import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import { SidebarProvider } from './context/sidebarContext.jsx';
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
import chakraTheme from '@chakra-ui/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraBaseProvider>
    <SidebarProvider>
      <App />
    </SidebarProvider>
    </ChakraBaseProvider>
  
)
