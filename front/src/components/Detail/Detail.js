import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
// import data from '../../data'
import Raiting from '../Raiting/Raiting'
import LoadingBox from '../LoadingBox/LoadingBox'
import MessageBox from '../MessageBox/MessageBox'
import { detailsProduct } from '../../actions/productActions'

const Detail = (props) => {
  const dispatch = useDispatch()
  const productId = props.match.params.id

  const[qty,setQty] = useState(1)

  const productDetails = useSelector(state=>state.productDetails)
  const {error,loading,product} = productDetails

  useEffect(() => {
    dispatch(detailsProduct(productId))
  },[dispatch,productId])

const addTooCartHandler =()=>{
  props.history.push(`/cart/${productId}?qty=${qty}`)
}

  return (
    <>
    {loading ? 
			(<LoadingBox />) : error ? 

			(<MessageBox>{error}</MessageBox>) :
			(
        <div className='detail'>
        <div className="container">
          <div className="row">
            <div className="col">
            <div className='detail_wrap'>
              <div className="detail_wrap_foto">
                <img src={product.image} alt=""/>
              </div>
              <div className="detail_info">
              <div className="detail_title"><h2>{product.name}</h2></div>
              <div className="detail_title flex"><p>{product.description}</p></div>
              <div className="detail_title flex">category: <p>{product.category}</p></div>
              <div className="detail_title flex">brend:<p>{product.brand}</p></div>
              <div className="detail_title flex">Цена:<p><strong>{product.price}$</strong></p></div>
              <div className="detail_title flex">Сатус:<p>
                <strong>
                {product.countInStock > 0 ? <div> есть в наличии</div>:<div>товара нет</div>}
                </strong></p></div>
              <Raiting rating ={product.rating} numReviews={product.numReviews} />
    <div className="detail_title flex">Колличество:<p>
      <select value={qty} onChange={e=>setQty(e.target.value)} name="" id="">
        {/* <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
        <option value="">4</option> */}
        {
          [...Array(product.countInStock).keys()].map(x=>(
            <option key ={x+1} value={x+1}>{x+1}</option>
          ))
        }
      </select>
      </p></div>
    {
      product.countInStock > 0 && (
          <div class="card_btn" onClick={addTooCartHandler}>Add to cart</div>
      )
    }
              
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
			)
		}
    </>
  )
}

export default Detail
