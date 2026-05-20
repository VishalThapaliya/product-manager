import { useSelector } from "react-redux"
import type { RootState } from "../../app/store"

export const ProductCounter = () => {
    const products = useSelector((state: RootState) => state.products);

    return (
        <section>
            Products 
            <span> {products.length}</span>
        </section>
    )
}