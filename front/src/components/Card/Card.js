import React from 'react'
import {Link} from 'react-router-dom'

const Card = ({product}) => {
// const{product} = props
  return (
    <div className="product_card">
    <Link to={`/products/${product._id}`}>	
      <div className="card_foto">
        <img src={product.image} alt=""/>
      </div>
    </Link>
    <div className="card_articl">
      <span className="card_articl_title">Category:</span>
      <span className="card_articl_num">{product.category} </span>
    </div>
    <div className="card_articl">
      <span className="card_articl_title">Brand:</span>
      <span className="card_articl_num">{product.brand} </span>
    </div>
    <Link to={`/products/${product._id}`}>		
      <div className="card_title">
        {product.name}
      </div>
      </Link>
    <div className="card_price">
      {product.price} <span>$</span>
    </div>
    <div className="card_btn">
      Add to cart
    </div>
  </div>
  )
}

export default Card
