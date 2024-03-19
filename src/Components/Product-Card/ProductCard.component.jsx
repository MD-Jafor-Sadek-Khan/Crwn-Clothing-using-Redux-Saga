import { Button_Type_ClassName } from "../Button/Buttom.component"
import "./product-card.styles.jsx"
import {
  ButtonStyled,
  FooterStyled,
  NameStyled,
  PriceStyled,
  ProductCardContainerStyled,
  ProductCardImageStyled,
} from "./product-card.styles.jsx"
import { useDispatch, useSelector } from "react-redux"
import { selectCartItems } from "../../Store/cart/cart.selectors.js"
import { addItemsToCart } from "../../Store/cart/cart.actions.js"

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product

  const dispatch = useDispatch()
  const previousCartItems = useSelector(selectCartItems)
  const addProductToCart = () => {
    dispatch(addItemsToCart(product, previousCartItems))
  }
  return (
    <ProductCardContainerStyled>
      <ProductCardImageStyled src={imageUrl} alt={name} />
      <FooterStyled>
        <NameStyled>{name}</NameStyled>
        <PriceStyled>{price}</PriceStyled>
      </FooterStyled>
      <ButtonStyled
        buttonType={Button_Type_ClassName.inverted}
        onClick={addProductToCart}
      >
        Add to Cart
      </ButtonStyled>
    </ProductCardContainerStyled>
  )
}

export default ProductCard
