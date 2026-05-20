import { useState } from "react"
import { useDispatch } from "react-redux";
import { addProduct } from "../../features/products/productSlice";

export const ProductForm = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

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