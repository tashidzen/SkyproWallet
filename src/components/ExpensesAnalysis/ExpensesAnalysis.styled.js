import styled from "styled-components";

const Swrapper = styled.div`
    max-width: 100%;
    width: 100vw;
    overflow: hidden;
    background-color: #f4f5f6;
    position: relative;
`;

const Smain = styled.main`
    padding-inline: calc(50% - 600px);
    height: calc(100vh - 64px);
    padding-bottom: 80px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-top: 64px;

    @media (max-width: 1232px) {
        padding-inline: 16px;
        padding-bottom: 16px;
    }
    @media (max-width: 767px) {
        background-color: #fff;
        height: calc(100vh - 54px);
        padding: 0;
        gap: 0px;
        margin-top: 54px;
    }
`;

const SanalysTitle = styled.h1`
    margin-top: 36px;
    font-weight: 700;
    font-size: 32px;
    line-height: 150%;
    color: #000;
    align-self: stretch;

    @media (max-width: 1100px) {
        font-size: 28px;
        margin-top: 28px;
    }
    @media (max-width: 767px) {
        font-size: 24px;
        margin-top: 24px;
        padding: 0 16px;
    }
`;

const SsectionWrapper = styled.div`
    display: flex;
    gap: 32px;
    flex: 1;
    min-height: 0;
    @media (max-width: 1100px) {
        gap: 16px;
    }
`;

const SbuttonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;
    background-color: #fff;
    height: 87px;
    box-shadow: 0 -20px 67px -12px rgba(0, 0, 0, 0.13);
    position: relative;
    z-index: 2;
`;

export { Swrapper, Smain, SanalysTitle, SsectionWrapper, SbuttonWrapper };
