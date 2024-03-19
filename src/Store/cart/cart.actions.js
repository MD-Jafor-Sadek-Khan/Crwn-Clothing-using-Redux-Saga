import { createAction } from "../../utils/Reducer-Utils/reducer.utils"
import { CART_ACTION_TYPES } from "./cart.types"

export const setCartIconToggle = (cartState) => {
  return createAction(CART_ACTION_TYPES.Set_Cart_Icon, cartState)
}


const checkAddedItemToCart = (productToAdd, cartItems) => {
  const foundItemsOnCart = cartItems.find((item) => {
    return item.id === productToAdd.id
  })

  if (foundItemsOnCart) {
    return cartItems.map((item) => {
      return item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    })
  } else {
    return [...cartItems, { ...productToAdd, quantity: 1 }]
  }
}

export const addItemsToCart = (productToAdd, cartItems) => {
  const newCartItems = checkAddedItemToCart(productToAdd, cartItems)
  return createAction(CART_ACTION_TYPES.Set_Cart_Items, newCartItems,
  )
}

const checkDecrementedItemFromCart = (cartItemToRemove, cartItems) => {
  const foundItemsOnCart = cartItems.find((item) => {
    return item.id === cartItemToRemove.id
  })

  if (foundItemsOnCart.quantity === 1) {
    return cartItems.filter((item) => {
      return item.id !== cartItemToRemove.id
    })
  }

  return cartItems.map((item) => {
    return item.id === cartItemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  })
}

export const decrementItemFromCart = (cartItemToRemove, cartItems) => {
  const newCartItems = checkDecrementedItemFromCart(cartItemToRemove, cartItems)
  return createAction(CART_ACTION_TYPES.Set_Cart_Items, newCartItems,
  )
}

const checkRemoveCartItem = (cartItemToRemove, cartItems) => {
  return cartItems.filter((item) => item.id !== cartItemToRemove.id)
}

export const removeCartItem = (cartItemToRemove, cartItems) => {
  const newCartItems = checkRemoveCartItem(cartItemToRemove, cartItems)
  return createAction(CART_ACTION_TYPES.Set_Cart_Items, newCartItems
  )
}
