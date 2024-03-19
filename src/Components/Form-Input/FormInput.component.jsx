import "./form-input.styles.jsx"
import { FormInputLabelStyled, FormInputStyled, GroupStyled } from "./form-input.styles.jsx"

const FormInput = ({ label, ...otherProps }) => {
  return (
    <GroupStyled>
      <FormInputStyled {...otherProps} />
      {label && (
        <FormInputLabelStyled shrink={otherProps.value.length}>
          {label}
        </FormInputLabelStyled>
      )}
    </GroupStyled>
  )
}

export default FormInput
