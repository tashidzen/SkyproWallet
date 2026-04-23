import styled from "styled-components";

const colors = {
  primary: "#7334EA",
  secondary: "#FFFFFF",
  tertiary: "#94A6BE",
};

export const SButton = styled.button`
  width: 313px;
  height: 39px;
  padding: 12px;
  border: none;
  outline: none;
  line-height: 21px;
  letter-spacing: -0.14px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #FFFFFF;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $type, disabled }) =>
    disabled ? '#CCCCCC' : colors[$type]
  };
  transition: background-color 0.2s ease;

  &:hover:not(:disabled) {
    background-color: #7334EA;
  }

  @media (max-width: 767px) {
    width: 343px;
  }
`;

export const PrimaryButton = styled(SButton)`
  background-color: ${({ disabled }) => disabled ? '#CCCCCC' : '#7334EA'};
  width: ${({ width }) => width};

  &:hover:not(:disabled) {
    background-color: #7334EA;
  }

  @media (max-width: 767px) {
    width: 343px; 
  }
`;

export const SecondaryButton = styled(SButton)`
  background-color: ${({ disabled }) => disabled ? 'transparent' : 'transparent'};
  color: ${({ disabled }) => disabled ? '#94A6BE' : '#7334EA'};
  border: ${({ disabled }) => disabled ? '0.7px solid #94A6BE' : '0.7px solid #7334EA'};
  width: ${({ width }) => width};

  &:hover:not(:disabled) {
    background-color: #7334EA;
    color: #FFFFFF;
  }

  @media (max-width: 767px) {
    width: 343px;
  }
`;