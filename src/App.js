import './App.css';
import { RouterProvider, } from 'react-router-dom';
import { ChakraBaseProvider, } from '@chakra-ui/react';

import { routes } from './Routes/Routes';

// import {
//   ChakraBaseProvider,
//   extendBaseTheme,
//   theme as chakraTheme,
// } from '@chakra-ui/react';

// const { Button } = chakraTheme.components

// const theme = extendBaseTheme({
//   components: {
//     Button,
//   },
// })

function App() {
  return (
    // <ChakraBaseProvider theme={theme}>
    <ChakraBaseProvider>
      {/* <div className="App"> */}
      <div>
        <RouterProvider router={routes}></RouterProvider>
      </div>
    </ChakraBaseProvider >
  )
}

export default App;