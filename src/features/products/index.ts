import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getProducts } from "./ProductService";

type Product = {
    id: number;
    title: string;
}

type ProductState = {
    items: Product[],
    loading: boolean,
    error: string | null
};

type RejectError = string;

const initialState: ProductState = {
    items: [],
    loading: false,
    error: null
};

export const fetchProducts = createAsyncThunk<Product[], void, { rejectValue: RejectError }>(
    'products/fetchProducts',
    async (_, thunkAPI) => {
        try {
            return await getProducts();
        } catch (err) {
            return thunkAPI.rejectWithValue( 
                `Failed to get response from the API: ${err}`
            );
        }
    } 
);

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.items.push(action.payload);
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((product) => product.id !== action.payload);
        },
        clearAllProducts: (state) => {
            state.items = [];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
        });

        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
        });

        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload ?? "Something went wrong";
        })
    }
});

export const { addProduct, removeProduct, clearAllProducts } = productSlice.actions;
export const productReducer = productSlice.reducer;