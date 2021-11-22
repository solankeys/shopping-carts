import React, { useMemo, useState } from 'react'
import './MyCart.css'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../Components/Navbar/Navbar'
import { additionToCart, removeItem, setToCart } from '../../services/actions'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'

function MyCart() {
  const [total, setTotal] = useState(0)
  const dispatch = useDispatch()

  const cartItem = useSelector((state) => state.cartReducer.items)
  console.log(cartItem)
  //function for removing items from cart
  const removalFromCartHandler = (item) => {
    const filteredItem = cartItem.filter(({ id }) => id !== item.id)
    dispatch(removeItem(filteredItem))
  }

  //increase and decrease
  const quantityChangeHandler = (operator, product) => {
    if (operator === '+') {
      const finalCartProduct = cartItem.map((item) =>
        item.id == product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
      dispatch(setToCart(finalCartProduct))
    } else {
      const finalCartProduct = cartItem.map((item) =>
        item.id == product.id ? { ...item, quantity: item.quantity - 1 } : item
      )
      const removeCartItem = finalCartProduct.filter(
        ({ quantity }) => quantity !== 0
      )

      dispatch(setToCart(removeCartItem))
    }
  }

  //calculate total price
  useMemo(() => {
    var total = 0
    cartItem.map(({ price, quantity }) => (total += price * quantity))
    setTotal(total)
  }, [cartItem])

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className='cartitems'>
        <h5 className='cart-header'>
          You have ordered: {cartItem.length === 0 && <p>Nothing.</p>}
        </h5>
        {cartItem?.map((item) => {
          const { images, brand_name, description, price, id } = item
          return (
            <>
              <div className='cartitem-container' key={id}>
                <div className='image-wrapper'>
                  <img src={images} alt='products' />
                </div>
                <div className='product-body'>
                  <h3 className='brand-name'>{brand_name}</h3>
                  <p>{description}</p>
                  <b>Price:{price}$</b>
                  <br />
                  <b>Quantity:{item?.quantity}</b>
                  <br />
                  <button
                    className='decrease-btn'
                    onClick={() => quantityChangeHandler('-', item)}
                  >
                    <AiFillCaretDown />{' '}
                  </button>
                  <button
                    className='increase-btn'
                    onClick={() => quantityChangeHandler('+', item)}
                  >
                    <AiFillCaretUp />
                  </button>
                  <br />
                  <button
                    onClick={() => removalFromCartHandler(item)}
                    className='rmv-btn'
                  >
                    Remove
                  </button>
                </div>
              </div>
            </>
          )
        })}
        <h4 className='total-price'>Total: {total} $</h4>
      </div>
    </div>
  )
}

export default MyCart
