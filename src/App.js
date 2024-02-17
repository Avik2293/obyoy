import './App.css';
import { RouterProvider, } from 'react-router-dom';
import { ChakraBaseProvider, } from '@chakra-ui/react';
// import { store, persistor } from "./Redux/store";
import { Provider } from 'react-redux';

import { routes } from './Routes/Routes';
import { configureStore } from './Redux/store';

function App() {
  const { store, persistor } = configureStore();

  return (
    <Provider store={store}>
       {/* <ChakraBaseProvider theme={theme}> */}
      <ChakraBaseProvider>
        {/* <div className="App"> */}
        <RouterProvider router={routes} />
      </ChakraBaseProvider >
    </Provider>
  )
}

export default App;

{/*<PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>*/ }
