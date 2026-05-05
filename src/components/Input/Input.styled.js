import styled from "styled-components";

const borderColors = {
  standard: "rgba(148, 166, 190, 0.4)",
  error: "rgba(204, 0, 0, 1)",
};

const backgroundColors = {
  standard: "#ffffff",
  error: "#ffe6e6",
  valid: "#F1EBFD",
};

const textColors = {
  standard: "#000000", 
  error: "#cc0000",
};

export const InputWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;

  &::after {
    content: "${(props) => (props.$hasError ? "*" : "")}";
    color: ${borderColors.error};
    position: absolute;
    right: 12px;
    top: 30%;
    transform: translateY(-50%);
    font-weight: bold;
    font-size: 18px;
    pointer-events: none;
    z-index: 2;
  }
`;

export const SInput = styled.input`
  width: 100%;
  height: 39px;
  padding: 12px;
  border: 0.7px solid ${borderColors.standard};
  border-radius: 8px;
  background-color: ${backgroundColors.standard};
  color: ${textColors.standard};
  font-size: 12px; 
  font-family: "Montserrat", sans-serif;
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
  outline: none;
  box-shadow: none;    

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: ${textColors.standard} !important;
    caret-color: ${textColors.standard} !important;
    -webkit-box-shadow: 0 0 0 30px ${backgroundColors.standard} inset !important;
    transition: background-color 5000s ease-in-out 0s;
  }

  &:-internal-autofill-selected {
    background-color: ${backgroundColors.standard} !important;
    background-image: none !important;
    color: ${textColors.standard} !important;
  }

  ${(props) =>
    props.$hasError &&
    `
    && {
      background-color: ${backgroundColors.error} !important;
      border-color: ${borderColors.error} !important;
      color: ${textColors.error} !important;
    }

    &:focus,
    &:-webkit-autofill:focus {
      border-color: ${borderColors.error} !important;
      background-color: ${backgroundColors.error} !important;
      -webkit-box-shadow: 0 0 0 30px ${backgroundColors.error} inset !important;
    }
  `}

  ${(props) =>
    !props.$hasError &&
    props.$isValid &&
    `
    && {
      background-color: ${backgroundColors.valid} !important;
      border-color: #7334EA !important;
      color: ${textColors.standard} !important;
    }

    &:focus,
    &:-webkit-autofill:focus {
      border-color: #7334EA !important;
      background-color: ${backgroundColors.valid} !important;
      -webkit-box-shadow: 0 0 0 30px ${backgroundColors.valid} inset !important;
    }

    &:not(:focus),
    &:-webkit-autofill:not(:focus) {
      border-color: #7334EA !important;
      background-color: ${backgroundColors.valid} !important;
      -webkit-box-shadow: 0 0 0 30px ${backgroundColors.valid} inset !important;
    }
  `}

  &:focus:not([data-has-error='true']):not([data-is-valid='true']),
  &:-webkit-autofill:focus:not([data-has-error='true']):not([data-is-valid='true']) {
    border-color: #7334EA !important;
    background-color: ${backgroundColors.standard} !important;
    -webkit-box-shadow: 0 0 0 30px ${backgroundColors.standard} inset !important;
    box-shadow: 0 0 0 2px rgba(115, 52, 234, 0.2);
  }
`;