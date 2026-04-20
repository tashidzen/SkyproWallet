import styled from "styled-components";

export const SAuthHeader = styled.header`
    background: #ffffff;
    padding: 0 calc(50% - 600px);
    height: 64px;
    text-align: left;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 767px) {
        padding: 0 20px;
        background: #f4f5f6;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        padding: 0 calc(50% - 300px);
        height: 70px;
    }

    @media (min-width: 1024px) {
        padding: 0 calc(50% - 600px);
        height: 64px;
    }
`;

export const SAuthHeaderLogo = styled.img`
    width: 143.68px;
    height: 19px;
    text-align: center;
    cursor: pointer;

    @media (min-width: 768px) and (max-width: 1023px) {
        width: 160px;
        height: 21px;
    }

    @media (min-width: 1024px) {
        width: 143.68px;
        height: 19px;
        margin-left: 20px;
    }
`;
