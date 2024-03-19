import { CART_ACTION_TYPES } from "./cart.types"
// 
const CART_INITIAL_VALUES = {
    cartToggle: false,
    cartItems: [],
  }


export const cartReducer = (state =CART_INITIAL_VALUES, action={}) => {
    const { type, payload } = action
  
    switch (type) {
      case CART_ACTION_TYPES.Set_Cart_Items:
        return {
          ...state,
          cartItems:payload,
        }
  
      case CART_ACTION_TYPES.Set_Cart_Icon:
        return {
          ...state,
          cartToggle:payload
        }
      default:
        return state
    }
  }