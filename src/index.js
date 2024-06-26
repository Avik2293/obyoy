import React from 'react';
import ReactDOM from 'react-dom/client';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Toaster } from 'react-hot-toast';

// for mirage 
// import { makeServer } from "./server"

// if (process.env.NODE_ENV === "development") {
// 	makeServer({ environment: "development" })
// }

const colors = {
	brand: {
		900: '#1a365d',
		800: '#153e75',
		700: '#2a69ac',
	},
}

const theme = extendTheme({ colors })

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<Toaster position="top-center" reverseOrder={false} />

			<App />
		</ChakraProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
