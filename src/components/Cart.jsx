
import { getStoredCart } from '../utils/fakeDB';
import { useLoaderData } from 'react-router-dom';
import CartItem from './Cards/CartItem';

const Cart = () => {
    // const [cart, setCart] = useState([])
    const { cartArry } = useLoaderData()
    let total = 0;
    if (cartArry.length) {
        for (const product of cartArry) {
            total = total + product.price * product.quantity
        }
    }
    // useEffect(() => {
    //     const savedCart = getStoredCart()
    //     let newArr = []
    //     for (const id in savedCart) {
    //         const foundProduct = pData.find(product => product.id === id)
    //         if (foundProduct) {
    //             foundProduct.quantity = savedCart[id]
    //             newArr.push(foundProduct)
    //         }
    //     }
    //     setCart(newArr)
    // }, [])

    // console.log(cartArray);


    return (
        <div className='flex min-h-screen items-start justify-center bg-gray-100 text-gray-900'>
            <div className='flex flex-col max-w-3xl p-6 space-y-4 am:p-10'>
                <h2 className='text-xl font-semibold'>
                    {cartArry.length ? 'Review Cart Item' : 'Cart is Empty'}</h2>
                <ul className='flex flex-col divide-y divide-gray-700'>
                    {cartArry.map(product => <CartItem key={product.id} product={product} />)}
                </ul>
                <p>{total}</p>
            </div>
        </div>
    );
};

export default Cart;