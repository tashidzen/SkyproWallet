import styled from "styled-components";

const Swrapper = styled.div`
    max-width: 100%;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    background-color: #f4f5f6;
    position: relative;
`;

const Smain = styled.main`
    padding-inline: calc(50% - 600px);
    height: calc(100vh - 64px);
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto 1fr;
    column-gap: 32px;
`;

const SanalysTitle = styled.h1`
    margin-top: 36px;
    margin-bottom: 32px;
    font-weight: 700;
    font-size: 32px;
    line-height: 150%;
    color: #000;
    grid-row: 1;
    grid-column: 1 / -1;
    justify-self: stretch;
`;

export { Swrapper, Smain, SanalysTitle };
