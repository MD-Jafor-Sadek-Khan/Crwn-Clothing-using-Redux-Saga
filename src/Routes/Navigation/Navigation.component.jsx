import { Outlet } from "react-router-dom"
import { Fragment } from "react"

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"
import CartIcon from "../../Components/Cart-Icon/CartIcon.component"
import { CartDropdown } from "../../Components/CartDropdown/CartDropdown.component"
import {
  LogoContainerStyled,
  NavLinkStyled,
  NavLinksContainerStyled,
  NavigationStyled,
} from "./navigation.styles"
import { useDispatch, useSelector } from "react-redux"
import { userSelector } from "../../Store/user/user.selector"
import { selectCartToggle } from "../../Store/cart/cart.selectors"
import { signOutStart } from "../../Store/user/user.actions"

const Navigation = () => {
  const dispatch = useDispatch()

  const currentUser = useSelector(userSelector)

  const cartToggle = useSelector(selectCartToggle)

  const handleSignOut = ()=>{
    dispatch(signOutStart())
  }
  return (
    <Fragment>
      <NavigationStyled>
        <LogoContainerStyled to={"/"}>
          <CrwnLogo />
        </LogoContainerStyled>
        <NavLinksContainerStyled>
          <NavLinkStyled to={"/shop"}>SHOP</NavLinkStyled>
          {currentUser ? (
            <NavLinkStyled as={"span"} onClick={handleSignOut}>
              SIGN OUT
            </NavLinkStyled>
          ) : (
            <NavLinkStyled to={"/auth"}>SIGN IN</NavLinkStyled>
          )}
          <CartIcon />
        </NavLinksContainerStyled>
        {cartToggle && <CartDropdown />}
      </NavigationStyled>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
