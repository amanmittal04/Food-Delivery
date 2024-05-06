import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className='place-order'>
        <div className="place-order-left">
            <p className='title'>Delivery Information</p>
            <div className="multi-field">
                <input type="text" placeholder='First name' required />
                <input type="text" placeholder='Last name' required />
            </div>
            <input type="email" placeholder='Email address' required />
            <input type="text" placeholder='Street' required />
            <div className="multi-field">
                <input type="text" placeholder='City' required />
                <input type="text" placeholder='State' required />
            </div>
            <div className="multi-field">
                <input type="text" placeholder='Zip code' required />
                <input type="text" placeholder='Country' required />
            </div>
            <input type="text" placeholder='Phone' required />
        </div>
        <div className="place-order-right">
            <div className="cart-total">
                <h2>Cart Totals</h2>
                <div>
                    <div className="cart-total-details"><p>Subtotal</p><p>${getTotalCartAmount()}</p></div>
                    <hr />
                    <div className="cart-total-details"><p>Delivery Fee</p><p>${getTotalCartAmount() === 0 ? 0 : 5}</p></div>
                    <hr />
                    <div className="cart-total-details"><b>Total</b><b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5}</b></div>
                </div>
            </div>
            <button className='place-order-submit' type='submit'>Proceed To Payment</button>
        </div>
    </form>
  )
}

export default PlaceOrder