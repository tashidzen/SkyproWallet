import styled from "styled-components";

export const Swrapper = styled.div`
    max-width: 100%;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    position: relative;

    @media (max-width: 768px) {
        overflow: visible;
    }
`;

export const SmobileTitle = styled.div`
    @media (max-width: 376px) {
        display: flex;
        flex-wrap: nowrap;
        gap: 58px;
        flex-direction: row;
    }
`;

export const Stitle = styled.h1`
    text-align: left;
    font-size: 32px;
    font-weight: 700;
    line-height: 150%;
    margin-bottom: 32px;
    margin-top: 36px;
    margin-left: calc(50% - 600px);

    @media (max-width: 376px) {
        letter-spacing: 0px;
        font-size: 24px;
        line-height: 100%;
        margin-left: 16px;
        margin-bottom: 22px;
        margin-top: 24px;
    }
`;

export const SNewExpenseFormLink = styled.a`
    display: flex;
    gap: 6px;
    margin-top: 32px;
    margin-bottom: 25px;
    font-size: 12px;
    font-weight: 600;
    color: #000000;
    text-decoration: none;
    align-items: center;
`;

export const TablesContainer = styled.div`
    display: flex;
    gap: 34px; /* Расстояние между таблицами */
    /* padding-left: 120px;
  padding-right: 120px; */
    box-sizing: border-box;
    max-width: 1200px;
    margin: 0 auto; /* Центрирование контейнера */
`;
