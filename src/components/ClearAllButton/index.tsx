import { useDispatch } from "react-redux"
import { clearAllProducts } from "../../features/products/productSlice";

export const ClearAllButton = () => {
    const dispatch = useDispatch();

    return (
        <button
            onClick={() => dispatch(clearAllProducts())}
        >
            Clear All
        </button>
    )
}