import React  from 'react'
import {useState ,useEffect}  from 'react'
import Card from '../Card/Card'
import axios from 'axios'
import MessageBox from '../MessageBox/MessageBox'
import LoadingBox from '../LoadingBox/LoadingBox'

const HomeScreen = () => {
	
	const [products,setProducts] = useState([])
	const [loading,setLoading] = useState(false)
	const [error,setError] = useState(false)

	useEffect(()=>{
    const fetchData = async () =>{
			try{
				setLoading(true)
				const {data}  = await axios.get('/api/products')
				setLoading(false)
				setProducts(data)
			}
			catch(err){
			 setError(err.message)
			 setLoading(false)
			}
		}
		fetchData()
	},[])

  return (
		<>
		
		{loading ? 
			(<LoadingBox />) : error ? 

			(<MessageBox>{error}</MessageBox>) :
			(
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
   </>
  )
}

export default HomeScreen
