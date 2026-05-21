import { removeProduct } from "../../features/products/productSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

export const ProductList = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.products);

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