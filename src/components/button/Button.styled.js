import styled from "styled-components";


const colors = {
  primary: "#565EEF",
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
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $type }) => colors[$type]};
  ${({ $type }) => ($type === "secondary" ? "color: #565EEF" : "")}
`;

export const PrimaryButton = styled(SButton)`
  background-color: #7334EA;
  width: ${({ width }) => width};
  &:hover {
    background-color: #7334EA;
  }
`;

export const SecondaryButton = styled(SButton)`
  /* background-color: #FFFFFF; */
  background-color: transparent;
  color: #565EEF;
  border: 0.7px solid #565EEF;
  width: ${({ width }) => width};
  &:hover {
    background-color: #33399b;
    color: #FFFFFF;
  }
`;