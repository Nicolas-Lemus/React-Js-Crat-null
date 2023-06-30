import React from 'react'
import Checkout from '../cart/Checkout'
import Headers from '../components/Headers/Headers'



const Cart = () => {
    return (
        <div>
            <Headers HeadersH1="ShoppingCart"/>
            <Checkout/>
        </div>
    )
}
export default Cart