import React  from 'react'
import {useEffect}  from 'react'
import {useSelector,useDispatch} from 'react-redux'

import Card from '../Card/Card'
// import axios from 'axios'
import MessageBox from '../MessageBox/MessageBox'
import LoadingBox from '../LoadingBox/LoadingBox'
import { listProducts } from '../../actions/productActions'

const HomeScreen = () => {
	

  const dispatch = useDispatch()
	const productList = useSelector(state=>state.productList)
	const {loading,error,products} = productList

	useEffect(()=>{
    dispatch(listProducts())
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
