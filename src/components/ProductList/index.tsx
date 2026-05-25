import { useEffect } from "react";
import { fetchProducts, removeProduct } from "../../features/products";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { ClearAllButton } from "../ClearAllButton";
import { ProductSkeleton } from "../ProductSkeleton";

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
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">Product List</h3>
                <ClearAllButton />
            </div>

                { loading ? (
                    <ProductSkeleton />
                ) : error ? (
                    <h3 className="text-red-500 font-medium">{error}</h3>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                        {products.map((product) => (
                            <div 
                                key={product.id} 
                                className="bg-white border rounded-xl shadow-sm p-4 hover:shadow-md transition"
                            >
                                <div className="flex justify-between items-start">
                                    <h3 className="font-semibold text-lg">{product.title}</h3>
                                    <button 
                                        onClick={() => dispatch(removeProduct(product.id))}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        🗑️
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            
        </section>
    )
}