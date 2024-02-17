import AsyncStorage from '@react-native-async-storage/async-storage';
import { 
	createStore,
	applyMiddleware 
} from 'redux';
import { createLogger } from 'redux-logger';
import { 
	persistStore, 
	persistReducer 
} from 'redux-persist';
import { thunk } from 'redux-thunk';
import expireReducer from 'redux-persist-expire';
 
import rootReducer from './Reducer';
 
export const configureStore = () => {
 
	const persistConfig = {
		key: 'root',
		storage: AsyncStorage,
		transforms: [
		// Create a transformer by passing the reducer key and configuration. Values
		// shown below are the available configurations with default values
			expireReducer('preference', {
				// (Optional) Key to be used for the time relative to which store is to be expired
					persistedAtKey: '__persisted_at',
				// (Required) Seconds after which store will be expired
					expireSeconds: 600,
				// (Optional) State to be used for resetting e.g. provide initial reducer state
					expiredState: {},
				// (Optional) Use it if you don't want to manually set the time in the reducer i.e. at `persistedAtKey` 
				// and want the store to  be automatically expired if the record is not updated in the `expireSeconds` time
					autoExpire: false
				}
			)
		// You can add more `expireReducer` calls here for different reducers
		// that you may want to expire
		] 
	};
 
	const persistedReducer = persistReducer(persistConfig, rootReducer);
 
	const store = createStore(
		persistedReducer, 
		applyMiddleware(thunk, createLogger())
	);
 
	/*
	const state = createStore(
		rootReducer, 
		applyMiddleware(thunk, ...middleware)
	);
	*/
 
	const persistor = persistStore(store);
 
	return { store, persistor };
}
 
//export const configureStore;