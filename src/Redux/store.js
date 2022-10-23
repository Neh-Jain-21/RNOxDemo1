import { configureStore } from "@reduxjs/toolkit";
import reducers from "@src/Redux/reducers";

const store = configureStore({ reducer: reducers });

export default store;
