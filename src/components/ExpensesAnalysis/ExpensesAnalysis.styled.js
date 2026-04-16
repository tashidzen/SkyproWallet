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
    display: flex;
    flex-direction: column;
    gap: 32px;
    @media (max-width: 1232px) {
        padding-inline: 16px;
    }
`;

const SanalysTitle = styled.h1`
    margin-top: 36px;
    margin-bottom: 32px;
    font-weight: 700;
    font-size: 32px;
    line-height: 150%;
    color: #000;
    align-self: stretch;
`;

const SsectionWrapper = styled.div`
    display: flex;
    gap: 32px;
`;

export { Swrapper, Smain, SanalysTitle, SsectionWrapper };
