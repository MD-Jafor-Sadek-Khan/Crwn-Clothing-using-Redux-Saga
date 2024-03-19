import "./cart-icon.styles.jsx"
import CART_ICON from "../../assets/shopping-bag.svg"
import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from "./cart-icon.styles.jsx"

import { useDispatch, useSelector } from "react-redux"
import {
  
  selectCartCount,
  selectCartToggle,
} from "../../Store/cart/cart.selectors.js"
import { setCartIconToggle } from "../../Store/cart/cart.actions.js"
const CartIcon = () => {
  const cartCount = useSelector(selectCartCount)
  const dispatch = useDispatch()

  const cartToggle = useSelector(selectCartToggle)
  const handleCartIconToggle = () => {
    dispatch(setCartIconToggle(!cartToggle))
  }

  return (
    <CartIconContainer onClick={handleCartIconToggle}>
      <ShoppingIcon src={CART_ICON} alt="cart-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
