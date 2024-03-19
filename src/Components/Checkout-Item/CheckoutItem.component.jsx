import {
  Arrow,
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Price,
  Quantity,
  RemoveButton,
  Value,
} from "./checkout-item.styles.jsx"
import { useDispatch, useSelector } from "react-redux"
import { selectCartItems } from "../../Store/cart/cart.selectors.js"
import {
  addItemsToCart,
  decrementItemFromCart,
  removeCartItem,
} from "../../Store/cart/cart.actions.js"

const CheckoutItem = ({ cartItem }) => {
  const { name, price, quantity, imageUrl } = cartItem

  const previousCartItems = useSelector(selectCartItems)
  const dispatch = useDispatch()

  const handleRemoveCartItemClick = () => {
    dispatch(removeCartItem(cartItem, previousCartItems))
  }

  const handleAddToCart = () => {
    dispatch(addItemsToCart(cartItem, previousCartItems))
  }

  const handleRemoveFromCart = () => {
    dispatch(decrementItemFromCart(cartItem, previousCartItems))
  }

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow onClick={handleRemoveFromCart}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={handleAddToCart}>&#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={handleRemoveCartItemClick}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem
