import React from 'react'
import Card from '../Card/Card'
import data from '../../data' 

const HomeScreen = () => {
  const {products}= data
  return (
    
    <div id="shop_products_blok" className="shop_products_blok">
	<div className="container">
		<div className="row">
			<div className="col">

					<div className="shop_product">
                {
                  products.map((product,i)=><Card key={i} product={product} />)
                }
					</div>
		
			</div>
		</div>
	</div>
</div>
  )
}

export default HomeScreen
