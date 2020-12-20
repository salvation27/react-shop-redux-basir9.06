import {PRODUCT_lIST_REQUEST,PRODUCT_lIST_SUCCESS,PRODUCT_lIST_FAIL} from '../constants/productConstants'

export const productListReducer = (state={loading:true,products:[]},action) => {
  switch(action.type){
    case PRODUCT_lIST_REQUEST:
      return {loading:true}
    case PRODUCT_lIST_SUCCESS:
      return {loading:false,products:action.payload}
    case PRODUCT_lIST_FAIL:
      return {loading:false,error:action.payload}
    default:
      return state  
  }
}

