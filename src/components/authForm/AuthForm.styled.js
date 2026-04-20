import styled from "styled-components";
import { Link } from "react-router-dom";

export const SPageBackground = styled.div`
    width: 100vw;
    min-height: calc(100vh - 64px);
    background-color: #f4f5f6;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 767px) {
        background-color: #ffffff;
        padding: 0 16px;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        min-height: calc(100vh - 70px);
        padding: 20px;
    }

    @media (min-width: 1024px) {
        padding: 0;
    }
`;

export const SWrapper = styled.div`
    width: 379px;
    background-color: #ffffff;
    border: 0.7px solid #d4dbe5;
    border-radius: 30px;
    padding: 32px;
    box-shadow: 0px 4px 67px -12px #00000021;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 24px 0px;
    min-height: fit-content;
    transform: translateY(-32px);

    @media (max-width: 767px) {
        width: 343px;
        border: none;
        box-shadow: none;
        padding: 0;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        transform: translateY(-32px);
    }

    @media (min-width: 1024px) {
        width: 379px;
        padding: 32px;
        transform: translateY(-32px);
        margin: 0 auto;
    }
`;

export const STitle = styled.p`
    font-size: 24px;
    font-weight: 700;
`;

export const SForm = styled.form``;

export const SInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 24px;

    @media (max-width: 767px) {
        width: 343px;
    }
`;

export const InputWrapper = styled.div`
    position: relative;
    ${(props) =>
        props.$hasError &&
        `
    background-color: #ffe6e6; 
    border: 1px solid #cc0000; 
    border-radius: 8px;
    padding: 4px;
  `}

    @media (max-width: 767px) {
        width: 343px;
    }
`;

export const SInput = styled.input`
    width: 100%;
    padding: 12px 16px;
    border: none;
    border-radius: 6px;
    font-size: 14px;
    outline: none;
    transition: all 0.3s ease;
    background: transparent;

    /* Стиль для состояния ошибки */
    ${(props) =>
        props.$hasError &&
        `
    background-color: transparent;
    color: #333;
  `}

    &:focus {
        ${(props) =>
            !props.$hasError &&
            `
      background-color: #f9f9f9;
      border: 1px solid #7334EA;
    `}
    }

    @media (max-width: 767px) {
        width: 343px;
    }
`;

export const SFooterWrapper = styled.div`
    width: 313px;
    height: 39px;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 150%;
    margin-top: 24px;

    @media (max-width: 767px) {
        width: 343px;
    }
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
`;

export const SErrorMessageText = styled.p`
    font-size: 12px;
    font-weight: 400;
    color: #cc0000;
    text-align: center;
    line-height: 150%;
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    max-width: 315px;
    word-wrap: break-word;
`;
