import React  from 'react'
import {useState ,useEffect}  from 'react'
import Card from '../Card/Card'
// import data from '../../data' 
import axios from 'axios'

const HomeScreen = () => {
	// const {products}= data
	
	const [products,setProducts] = useState([])

	useEffect(()=>{
    const fetchData = async () =>{
			const {data}  = await axios.get('/api/products')
			setProducts(data)
		}
		fetchData()
	},[])

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
