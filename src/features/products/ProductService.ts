export const getProducts = async () => {
    const response = await fetch(`https://dummyjson.com/products`);

    if(!response.ok) {
        throw new Error("Failed to get response from the API");
    }

    const data = await response.json();
    return data.products;
}