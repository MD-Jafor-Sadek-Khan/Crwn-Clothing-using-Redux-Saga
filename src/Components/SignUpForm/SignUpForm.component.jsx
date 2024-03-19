import { useState } from "react"

import {
  createAuthUserFromEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/Firebase-Utils/firebase.utils"
import FormInput from "../Form-Input/FormInput.component"
import { Button, Button_Type_ClassName } from "../Button/Buttom.component"
import {
  SignUpFormContainerStyled,
  SignupFormTitleStyled,
} from "./signup-form.styles.jsx"
import { useDispatch } from "react-redux"
import { signUpStart } from "../../Store/user/user.actions.js"

const initialFormFieldValues = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

const SignUpForm = () => {
  const dispatch = useDispatch()

  const [formFields, setFormFields] = useState(initialFormFieldValues)
  const { displayName, email, password, confirmPassword } = formFields

  const clearFormFields = () => {
    setFormFields(initialFormFieldValues)
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

    if (password !== confirmPassword) {
      alert("Passwords doesn't match")
      return
    }

    try {
      dispatch(signUpStart(email, password, displayName ))
      clearFormFields()
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("User Already Exists")
        return
      } else {
        console.log("Encountered Error while Creating User! ", error)
      }
    }
  }
  return (
    <SignUpFormContainerStyled>
      <SignupFormTitleStyled>Don't Have an Account?</SignupFormTitleStyled>
      <span>SignUp with Email & Password</span>
      <form onSubmit={(event) => handleSubmit(event)}>
        <FormInput
          label="Name"
          required
          type="text"
          value={displayName}
          name="displayName"
          onChange={handleFormFields}
        />

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

        <FormInput
          label="Confirm Password"
          required
          type="password"
          value={confirmPassword}
          name="confirmPassword"
          onChange={handleFormFields}
        />
        <Button buttonType={Button_Type_ClassName.base} type="submit">
          Sign Up
        </Button>
      </form>
    </SignUpFormContainerStyled>
  )
}

export default SignUpForm
