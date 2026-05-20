import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Product = {
    id: string;
    name: string;
}

type ProductState = Product[];

const initialState: ProductState = [];

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.push(action.payload);
        },
        removeProduct: (state, action: PayloadAction<string>) => {
            return state.filter((product) => product.id !== action.payload);
        },
        clearAllProducts: () => {
            return [];
        }
    }
});

export const { addProduct, removeProduct, clearAllProducts } = productSlice.actions;
export const productReducer = productSlice.reducer;