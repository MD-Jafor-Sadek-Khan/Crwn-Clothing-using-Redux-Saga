import styled from "styled-components"
import { Button } from "../Button/Buttom.component"

export const ButtonStyled = styled(Button)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`

export const ProductCardImageStyled = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
  &:hover {
    opacity: 0.8;
  }
`

export const ProductCardContainerStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  &:hover ${ButtonStyled} {
    opacity: 0.85;
    display: flex;
  }
`

export const FooterStyled = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`

export const NameStyled = styled.span`
  width: 90%;
  margin-bottom: 15px;
`

export const PriceStyled = styled.span`
  width: 10%;
`
