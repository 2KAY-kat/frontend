import React, { useContext } from 'react'
import './CartItems.css'
import { StoreContext } from '../../Context/StoreContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {getTotalCartAmount,all_product,CartItems,removeFromCart} = useContext(StoreContext);

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
                if (CartItems[e.id] > 0) 
                    {
                    return <div>
                        <div className="cartitems-format cartitems-format-main">
                            <img className='carticon-product-icon' src={e.image} alt="" />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity'>{CartItems[e.id]}</button>
                            <p>${e.new_price*CartItems[e.id]}</p>
                            <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                        </div>
                        <hr />
                    </div>
                }

                return null;

            })}

            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Sub-Total</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />

                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>

                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                {/*{/* */}
                
                {/*// this the promo code input box */}

                 <div className="cartitems-promocode">
                    <p>If you have a promo code enter it here (this feature is under development)</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder="promo code" disabled />
                        <button disabled>Submit</button>
                    </div> 
                </div>
               {/* */}
            </div>

        </div>
    )
}

export default CartItems