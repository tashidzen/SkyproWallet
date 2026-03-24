import { SButton, PrimaryButton, SecondaryButton } from "./Button.styled";


export const Button = ({ onClick, text, type = "primary", width="313px", disabled = false }) => {
  if (type === "primary") return <PrimaryButton onClick={onClick} width={width}>{text}</PrimaryButton>;
  if (type === "secondary") return <SecondaryButton onClick={onClick} width={width}>{text}</SecondaryButton>;

  return (
    <SButton onClick={onClick} $type={type} width={width} disabled={disabled}>{text}</SButton>
  )
};