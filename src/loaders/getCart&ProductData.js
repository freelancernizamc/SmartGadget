import { getStoredCart } from "../utils/fakeDB"


export const productsAndCartData = async () => {
    const productData = await fetch('products.json')
    const products = await productData.json()
    const savedCart = getStoredCart()
    console.log(savedCart);
    let cartArry = []
    for (const id in savedCart) {
        const foundProduct = products.find(product => product.id === id)
        if (foundProduct) {
            foundProduct.quantity = savedCart[id]
            cartArry.push(foundProduct)
        }
    }
    return { cartArry, products }
}

// export dafault productsAndCartData