import React, { createContext, useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet, useLoaderData } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import Modal from './components/Modal'

export const ProductContext = createContext([])
export const CartContext = createContext([])
const App = () => {

  const { products, cartArry } = useLoaderData()
  const [cart, setCart] = useState(cartArry)
  let [isOpen, setIsOpen] = useState(false)
  console.log(useLoaderData());

  const cartAlert = sessionStorage.getItem('alert')

  if (cartArry.length > 0 && cartAlert !== 'true') {
    setIsOpen(true)
    sessionStorage.setItem('alert', true)
  }

  return (
    <ProductContext.Provider value={products}>
      <CartContext.Provider value={[cart, setCart]}>
        <Header />
        <div className='md:min-h-[calc(100vh-341px)]'>
          <Outlet />
        </div>
        <Footer />
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      </CartContext.Provider>
    </ProductContext.Provider>
  )
}

export default App
