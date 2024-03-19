import { createSelector } from "reselect"



const selectCartItemsReducer = (state) => state.cart

export const selectCartItems = createSelector(
    [selectCartItemsReducer],
    (cartSlice)=> cartSlice.cartItems
)



export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((acc, item) => {
        return acc + item.price * item.quantity
      }, 0)
)

export const selectCartCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((acc, item) => {
        return acc + item.quantity
      }, 0)
)

export const selectCartToggle = createSelector(
    [selectCartItemsReducer],
    (cartSlice)=> cartSlice.cartToggle
)




// export const selectCartToggle = (state) =>state.cart.cartToggle 
// export const selectCartItems = (state) =>state.cart.cartItems
// export const selectCartCount = (state) =>state.cart.cartCount
// export const selectCartTotal = (state) =>state.cart.cartTotal

