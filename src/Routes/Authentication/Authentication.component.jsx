import SignInForm from "../../Components/SignInForm/SignInForm.component"
import SignUpForm from "../../Components/SignUpForm/SignUpForm.component"
import "./authentication.styles.jsx"
import { AuthFormContainerStyled } from "./authentication.styles.jsx"

const Authentication = () => {
  return (
    <AuthFormContainerStyled>
      <SignInForm />
      <SignUpForm />
    </AuthFormContainerStyled>
  )
}

export default Authentication
