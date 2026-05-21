import { useState } from "react"
import { addProduct } from "../../features/products/productSlice";
import { useAppDispatch } from "../../hooks/redux";

export const ProductForm = () => {
    const [name, setName] = useState('');
    const dispatch = useAppDispatch();

    const handleAddProduct = () => {
        if(!name.trim()) return;

        const product = {
            id: Date.now().toString(),
            name
        };

        dispatch(addProduct(product));
        setName("");
    }

    return (
        <section>
            <h3>Add a product</h3>

            <div>
                <label>
                    Product name
                    <input 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>

                <button onClick={handleAddProduct}>+ Add</button>
            </div>
        </section>
    )
} 