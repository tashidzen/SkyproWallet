import styled, { keyframes } from "styled-components";

const SDiagramSection = styled.section`
    border-radius: 30px;
    max-height: calc(100vh - 260px);
    box-shadow: 0 20px 67px -12px rgba(0, 0, 0, 0.13);
    background-color: #fff;
    grid-column: span 8;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: clip;
    gap: 21px;
    padding: 32px;
    position: relative;
`;

const SDiagramOverlay = styled.div`
    position: absolute;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    z-index: 1;
    height: stretch;
    width: stretch;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
`;

const SDiagramOverlayError = styled.p`
    font-weight: 400;
    font-size: 14px;
    color: #ff0000;
`;

const grow = keyframes`
    0%,
    100% {
        transform: scaleY(1);
    }
    50% {
        transform: scaleY(1.8);
    }
    `;

const SDiagramOverlayLoading = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`;

const SDiagramOverlayLoadingSpan = styled.span`
    display: inline-block;
    width: 5px;
    height: 20px;
    background-color: #999999;
    animation: ${grow} 1s ease-in-out ${(props) => props.$delay || ""} infinite;
`;

const SDiagramHeader = styled.header`
    display: flex;
    flex-direction: column;
    gap: 12px;
    height: 56px;
    h2 {
        font-weight: 700;
        font-size: 24px;
    }

    p {
        font-weight: 400;
        font-size: 12px;
        color: #999999;
        span {
            font-weight: 600;
        }
    }
`;

const SDiagramContent = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 32px;
`;

const SDiagramElement = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 12px;
    align-items: center;
    height: 100%;
    width: 100%;
`;
const SDiagramElValue = styled.h3`
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    color: #000;
`;

const SDiagramElBlock = styled.div`
    width: 100%;
    height: ${(props) => (props.$value === 0 ? "4px" : `${props.$value}%`)};
    background-color: ${(props) => props.$color};
    border-radius: 12px;
`;

const SDiagramElLabel = styled.p`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
`;

export {
    SDiagramSection,
    SDiagramHeader,
    SDiagramContent,
    SDiagramElement,
    SDiagramElValue,
    SDiagramElBlock,
    SDiagramElLabel,
    SDiagramOverlay,
    SDiagramOverlayError,
    SDiagramOverlayLoading,
    SDiagramOverlayLoadingSpan,
};
