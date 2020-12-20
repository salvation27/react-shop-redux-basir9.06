import Axios from 'axios'
import {
  PRODUCT_lIST_REQUEST,
  PRODUCT_lIST_SUCCESS,
  PRODUCT_lIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL
} from '../constants/productConstants'



export const listProducts = () => async (dispatch) =>{
  dispatch({
    type:PRODUCT_lIST_REQUEST,
  })
  try{
    const {data}= await Axios.get('/api/products')
    dispatch({type:PRODUCT_lIST_SUCCESS,payload:data})
  } catch(error){
    dispatch({type:PRODUCT_lIST_FAIL,payload:error.message})
  }
}

export const detailsProduct = (productId)=> async (dispatch)=>{
  dispatch({
    type:PRODUCT_DETAILS_REQUEST,
    payload:productId
  })
  try{
    const{data} = await Axios.get(`/api/products/${productId}`)
    dispatch({
      type:PRODUCT_DETAILS_SUCCESS,
      payload:data
    })
  } catch(error){
    dispatch({
      type:PRODUCT_DETAILS_FAIL,
      payload:error.response && error.response.data.message ?
      error.response.data.message : error.message
    })
  }
}