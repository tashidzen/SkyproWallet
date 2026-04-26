import styled from "styled-components";

const colors = {
  primary: "#7334EA",
  secondary: "#FFFFFF",
  tertiary: "#94A6BE",
};

export const SButton = styled.button`
  width: 100%;
  height: 39px;
  padding: 12px;
  border: none;
  outline: none;
  line-height: 21px;
  letter-spacing: -0.14px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600; 
  color: #ffffff;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.disabled ? "#999999" : colors[props.$type] || colors.primary}; 
  margin-top: 24px;
  transition: background-color 0.2s ease;

  &:hover:not(:disabled) {
    background-color: #7334ea;
  }

  @media (min-width: 375px) and (max-width: 767px) {
    width: 343px;
  }  
     
  @media (max-width: 374px) {
    width: 303px;
  }
`;