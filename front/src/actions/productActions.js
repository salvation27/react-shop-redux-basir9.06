import Axios from 'axios'
import {PRODUCT_lIST_REQUEST, PRODUCT_lIST_SUCCESS,PRODUCT_lIST_FAIL} from '../constants/productConstants'

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