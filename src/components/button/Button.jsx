import { SButton } from "./Button.styled";

export const Button = ({ onClick, text, type = "primary", disabled = false, isLoading = false, style }) => {
  return (
    <SButton
      onClick={onClick}
      $type={type}
      disabled={disabled || isLoading}
      style={style}
    >
      {isLoading ? "Загрузка..." : text}
    </SButton>
  );
};

export default Button;