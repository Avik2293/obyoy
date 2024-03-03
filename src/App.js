import './App.css';
import { RouterProvider, } from 'react-router-dom';
import { ChakraBaseProvider, } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { Text } from '@chakra-ui/react'

import { routes } from './Routes/Routes';
import { configureStore } from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
	const { store, persistor } = configureStore();

	return (
		<Provider store={store}>
			<PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
				{/* <ChakraBaseProvider theme={theme}> */}
				<ChakraBaseProvider>
					<RouterProvider router={routes} />
				</ChakraBaseProvider>
			</PersistGate>
		</Provider>
	)
}

export default App;

{/*<PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>*/ }
