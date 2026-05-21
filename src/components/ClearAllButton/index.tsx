import { clearAllProducts } from "../../features/products/productSlice";
import { useAppDispatch } from "../../hooks/redux";

export const ClearAllButton = () => {
    const dispatch = useAppDispatch();

    return (
        <button
            onClick={() => dispatch(clearAllProducts())}
        >
            Clear All
        </button>
    )
}