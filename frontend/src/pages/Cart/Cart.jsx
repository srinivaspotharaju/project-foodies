import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
import LoginPopup from '../../components/LoginPopup/LoginPopup'

const Cart = ({setShowLogin}) => {

  const { cartItems, food_list, removeFromCart,getTotalCartAmount,url,token} = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {

          if (cartItems[item._id] > 0) {

            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={url+"/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>X</p>
                </div>
                <hr />
              </div>

            )

          }

        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Summary</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() ? 10 : 0}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() ? getTotalCartAmount() + 10 : 0}</b>
            </div>
          </div>
          <button onClick={()=> {
            if(token) {
              navigate('/order')
            } else {
              setShowLogin(true)
            }}}>
            PROCEED TO CHECKOUT
          </button>
      </div>
      <div className="cart-promocode">
        <div>
          <p>If you have a promo code, Enter it here </p>
          <div className="cart-promocode-input">
            <input type="text" placeholder='promocode' />
            <button>Apply</button>
          </div>
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default Cart