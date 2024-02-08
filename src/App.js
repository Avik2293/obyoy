import { RouterProvider } from 'react-router-dom';
import { ChakraBaseProvider } from '@chakra-ui/react';

import { routes } from './Routes/Routes';

function App() {
  return (
    // <ChakraBaseProvider theme={theme}> 
    <ChakraBaseProvider>
    	<RouterProvider router={routes}></RouterProvider>
    </ChakraBaseProvider >
  )
}

export default App;