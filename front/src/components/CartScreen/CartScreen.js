import React,{useEffect} from 'react'
import {addToCart}  from '../../actions/cartActions'
import {useDispatch ,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

import MessageBox from '../MessageBox/MessageBox'



const CartScreen = (props) => {


  const productId = props.match.params.id
  const qty = props.location.search ? Number(props.location.search.split('=')[1]):1
  const cart =useSelector(state=>state.cart)
const {cartItems} = cart
  const dispatch = useDispatch()
  useEffect(() => {
    if(productId){
      dispatch(addToCart(productId,qty))
    }
  }, [dispatch,productId,qty])


  const removeFromCartHandler =(id)=>{

  }

  const checkoutHandler =()=>{
props.history.push('/signin?redirect=shippening')
  }
  return (
    <div className="container">
    <div className='row top cart_cart'>
      

      
        <div className="col-5">
          <h1>Корзина</h1>
          {
            cartItems.length === 0 ? 
            // <MessageBox />
            <MessageBox>Корзина пустая<Link to='/'>на главную</Link></MessageBox> 
            : 
            (
            <ul>
              {cartItems.map(x=>(
                <li key={x.product}>
                  <div className="row">
                    <img className='small' src={x.image} alt=""/>
                    <div className="min-30">
                      <Link to ={`/products/${x.product}`}>
                         {x.name}
                      </Link>
                    </div>
                    <div>
                      <select value={x.qty} 
                      onChange=
                      {e=>
                      dispatch(
                        addToCart(x.product,Number(e.target.value))
                      )
                      }>

                      {
                          [...Array(x.countInStock).keys()].map(x=>(
                            <option key ={x+1} value={x+1}>
                              {x+1}
                              </option>
                          ))
                        }
                      </select>
                    </div>
                      <div>${x.price}*{x.qty}</div>
                    <div onClick={()=>removeFromCartHandler(x.poduct)}>Удалить</div>
                  </div>
                </li>
              ))}
            </ul>
            )
          }
        </div>
        <div className="col-5">
          <div className="card card-body">
            <ul>
              <li>
                <h2>
                  Итого({cartItems.reduce((a,c)=>a+c.qty,0)}items): $ {cartItems.reduce((a,c)=>a+c.price * c.qty,0)}
                </h2>
                <h2>
                  В корзине ({cartItems.reduce((a,c)=>a+c.qty,0)}товаров)
                </h2>
                <h2>
                на сумму $ {cartItems.reduce((a,c)=>a+c.price * c.qty,0)}
                </h2>
              </li>
              <li>
                <button onClick={checkoutHandler} className='primary' disabled={cartItems.length === 0}>Оплата</button>
              </li>
            </ul>
          </div>
        </div>
    </div>
    </div>
  )
}

export default CartScreen
