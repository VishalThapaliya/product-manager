import { useAppSelector } from "../../hooks/redux"

export const ProductCounter = () => {
    const products = useAppSelector((state) => state.products.items);

    return (
        <section>
            Products 
            <span> {products.length}</span>
        </section>
    )
}