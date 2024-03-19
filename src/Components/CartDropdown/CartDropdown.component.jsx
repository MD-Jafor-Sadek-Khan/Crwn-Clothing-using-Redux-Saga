import "./cart-dropdown.styles.jsx"
import { Button_Type_ClassName } from "../Button/Buttom.component"
import CartItem from "../Cart-Item/CartItem.component"
import { useNavigate } from "react-router-dom"
import {
  ButtonStyled,
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles.jsx"
import { useSelector } from "react-redux"
import { selectCartItems } from "../../Store/cart/cart.selectors.js"

export const CartDropdown = () => {

  const cartItems = useSelector(selectCartItems)
  const navigate = useNavigate()

  const handleCheckoutNavigation = () => {
    navigate("/checkout")
  }

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length > 0 ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item} />
          })
        ) : (
          <EmptyMessage>Your Cart Is Empty</EmptyMessage>
        )}
      </CartItems>
      <ButtonStyled
        buttonType={Button_Type_ClassName.base}
        onClick={handleCheckoutNavigation}
      >
        Go to Checkout
      </ButtonStyled>
    </CartDropdownContainer>
  )
}
