import { useEffect } from "react";
import { fetchProducts, removeProduct } from "../../features/products";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

export const ProductList = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.products.items);
    const loading = useAppSelector((state) => state.products.loading);
    const error = useAppSelector((state) => state.products.error);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <section>
            <h3>Product List</h3>

            { loading ? (
                <h3>Loading products...</h3>
            ) : error ? (
                <h3>{error}</h3>
            ) : (
                products.map((product) => (
                    <div key={product.id} style={{ width: 400, display: "flex", justifySelf: "center", justifyContent: "space-around", gap: "10px"}}>
                        <h3>{product.title}</h3>
                        <button onClick={() => dispatch(removeProduct(product.id))}>🗑️</button>
                    </div>
                ))
            )}
        </section>
    )
}