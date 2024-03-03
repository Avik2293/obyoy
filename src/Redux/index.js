import { configureStore } from "./store";

const { store, persistor } = configureStore();

export { store, persistor };