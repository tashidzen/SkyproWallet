import { SInput, InputWrapper } from "./Input.styled"; 

export const Input = ({ type, placeholder, name, value, onChange, $hasError, $isValid }) => {
  return (
    <InputWrapper $hasError={$hasError}>
      <SInput
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        $hasError={$hasError}
        $isValid={$isValid}
        data-has-error={$hasError ? "true" : "false"}
        data-is-valid={$isValid ? "true" : "false"}
      />
    </InputWrapper>
  );
}; 
 
export default Input;