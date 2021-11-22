import React from 'react'
import './Home-Page.css'
import Navbar from '../../Components/Navbar/Navbar'
import CartItems from './CartItems'
import { AiOutlinePlus } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { additionToCart, setToCart } from '../../services/actions'

function HomePage() {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cartReducer.items)
  const addToCartHandler = (item) => {
    const product = { ...item, quantity: 1 }
    var alreadyinCart = cart.find((cartItem) => {
      return cartItem.id === item.id
    })
    if (alreadyinCart) {
      const finalCartProducts = cart.map((cart) =>
        cart.id === item.id ? { ...cart, quantity: cart.quantity + 1 } : cart
      )
      dispatch(setToCart([...finalCartProducts]))
    } else {
      dispatch(additionToCart(product))
    }
  }
  console.log(cart)

  return (
    <div className='home-page'>
      <header>
        <Navbar />
      </header>
      <h1 className='home-header'> Our Items </h1>
      <div className='card-wrapper'>
        {CartItems.map((item) => {
          const { images, brand_name, description, price, id } = item
          return (
            <div className='card' key={id}>
              <div className='card-image'>
                <img src={images} alt='product' />
                <p>{brand_name}</p>
              </div>
              <button
                className='add-btn'
                onClick={() => addToCartHandler(item)}
              >
                <AiOutlinePlus />
              </button>
              <div className='card-content'>
                <p>{description}</p>
                <b>Price:{price}$</b>
              </div>
            </div>
          )
        })}
        {/* <div className="img-wrapper">
                    <img />
                </div> */}
      </div>
    </div>
  )
}
// const mapStateToProps = (state)=>{
//     return {
//       items: state.items
//     }
//   }
// const mapDispatchToProps= (dispatch)=>{

//     return{
//         additionToCart: (id)=>{dispatch(additionToCart(id))}
//     }
// }

export default HomePage

// export default connect(mapStateToProps,mapDispatchToProps) (HomePage);
