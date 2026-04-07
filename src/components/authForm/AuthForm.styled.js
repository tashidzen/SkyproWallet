import styled from "styled-components";
import { Link } from "react-router-dom";


export const SPageBackground = styled.div`
    width: 100vw;
    height: 736px;
    background-color: #F4F5F6;
    display: flex;
    justify-content: center;
    align-items: center; 
    `;

export const SWrapper = styled.div`
  width: 379px;
  background-color: #FFFFFF;
  border: 0.7px solid #D4DBE5;
  border-radius: 30px;
  padding: 32px;
  box-shadow: 0px 4px 67px -12px #00000021;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px 0px; 
  

`;

export const STitle = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

export const SForm = styled.form`
  /* font-size: 12px;
  font-weight: 400; */
`;

export const SInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-bottom: 20px;
`;

export const SFooterWrapper = styled.div` 
  width: 313px;
  height: 39px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 7px; */
  line-height: 150%;
  margin-top: 20px;
`;

export const SFooterText = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #999999; 
`;

export const SFooterLink = styled(Link)`
  font-size: 12px;
  font-weight: 400;
  text-decoration: underline;
  color: #999999;
  cursor: pointer;
  /* &:visited {
    color: #999999;
  } */
`;

export const SErrorMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
`;

export const SErrorMessageText = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #F84D4D;
  text-align: center;
  line-height: 150%;
`;