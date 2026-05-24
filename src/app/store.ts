import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "../features/products";


// Create Redux store
export const store = configureStore({
    reducer: {
        products: productReducer
    }
})

// Infer the RootState type from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Infer the AppDispatch type from the store itself
export type AppDispatch = typeof store.dispatch;