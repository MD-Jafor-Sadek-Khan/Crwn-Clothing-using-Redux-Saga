import { useState } from "react"
import { Button, Button_Type_ClassName } from "../Button/Buttom.component"
import FormInput from "../Form-Input/FormInput.component"
import {
  ButtonsContainerStyled,
  SignInFormContainerStyled,
  SignInTitleStyled,
} from "./sign-in-form.styles.jsx"
import { useDispatch } from "react-redux"
import {
  emailSignInStart,
  googleSignInStart,
} from "../../Store/user/user.actions.js"

const initialFormFieldValues = {
  email: "",
  password: "",
}

const SignInForm = () => {
  const dispatch = useDispatch()

  const [formFields, setFormFields] = useState(initialFormFieldValues)
  const { email, password } = formFields

  const logGoogleUser = async () => {
    dispatch(googleSignInStart())
  }

  const handleFormFields = (event) => {
    const { name, value } = event.target

    setFormFields({
      ...formFields,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      dispatch(emailSignInStart(email, password))
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-credential":
          alert("Invalid User/Password")
          break

        default:
          alert("An error Occourd")
          break
      }
    }
  }

  return (
    <SignInFormContainerStyled>
      <SignInTitleStyled>I Already Have an Account!</SignInTitleStyled>
      <span>Sign In with your Email & Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          required
          type="email"
          value={email}
          name="email"
          onChange={handleFormFields}
        />
        <FormInput
          label="Password"
          required
          type="password"
          value={password}
          name="password"
          onChange={handleFormFields}
        />
        <ButtonsContainerStyled>
          <Button buttonType={Button_Type_ClassName.base} type="submit">
            SignIn
          </Button>

          <Button
            type="button"
            buttonType={Button_Type_ClassName.google}
            onClick={logGoogleUser}
          >
            SignIn with Google
          </Button>
        </ButtonsContainerStyled>
      </form>
    </SignInFormContainerStyled>
  )
}

export default SignInForm
