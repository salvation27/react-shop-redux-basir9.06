import React from 'react'
import data from '../../data'
import Raiting from '../Raiting/Raiting'

const Detail = (props) => {
  const product = data.products.find(item=>item._id === props.match.params.id)
  return (
    
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
    <select name="" id="">
      <option value="">1</option>
      <option value="">2</option>
      <option value="">3</option>
      <option value="">4</option>
    </select>
    </p></div>
  
            <div class="card_btn">Add to cart</div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Detail
