import React, { useContext } from 'react'
import './CartItems.css'
import { StoreContext } from '../../Context/StoreContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {all_product,CartItems,removeFromCart} = useContext(StoreContext)

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (CartItems[e.id] > 0 )
                {
                    return <div>
                    <div className="cartitems-format">
                        <img className='carticon-product-icon' src={e.image} alt="" />
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className='cartitems-quantity'>{CartItems[e.id]}</button>
                        <p>{e.new_price * CartItems[e.id]}</p>
                        <img src={remove_icon} onClick={() => {removeFromCart(e.id)}} alt="" />
                    </div>
                    <hr />
                    </div>
                }
            })}
            </div>
    )
}

export default CartItems