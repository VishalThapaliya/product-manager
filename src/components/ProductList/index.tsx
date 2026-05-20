import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "../../app/store";
import { removeProduct } from "../../features/products/productSlice";

export const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.products);

    return (
        <section>
            <h3>Product List</h3>

            {products.map((product) => (
                <div key={product.id} style={{ width: 400, display: "flex", justifySelf: "center", justifyContent: "space-around", gap: "10px"}}>
                    <h3>{product.name}</h3>
                    <button onClick={() => dispatch(removeProduct(product.id))}>🗑️</button>
                </div>
            ))}
        </section>
    )
}