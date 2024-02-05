import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "../reducer/todoslice";

export const store = configureStore({
    reducer: todoReducer
});