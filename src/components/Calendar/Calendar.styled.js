import styled, { keyframes } from "styled-components";

const Ssection = styled.section`
    border-radius: 30px;
    max-height: calc(100vh - 260px);
    box-shadow: 0 20px 67px -12px rgba(0, 0, 0, 0.13);
    background-color: #fff;
    grid-column: span 4;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: clip;
    position: relative;
`;

const SCalendarOverlay = styled.div`
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

const SCalendarOverlayError = styled.p`
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

const SCalendarOverlayLoading = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`;

const SCalendarOverlayLoadingSpan = styled.span`
    display: inline-block;
    width: 5px;
    height: 20px;
    background-color: #999999;
    animation: ${grow} 1s ease-in-out ${(props) => props.$delay || ""} infinite;
`;

const ScalendarHeader = styled.div`
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    height: 113px;
    width: 100%;
    border-bottom: 1px solid #999;
    padding: 32px 32px 0px 32px;
`;

const ScalendarTitle = styled.h2`
    font-weight: 700;
    font-size: 24px;
    color: #000;
`;

const ScalendarDayNames = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 24px;
`;

const ScalendarDayName = styled.div`
    width: 40px;
    height: 27px;
    color: #999;
    font-weight: 400;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ScalendarMounths = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px 25px;
    overflow-y: auto;
    scrollbar-gutter: stable both-edges;
    @supports (-moz-appearance: none) {
        scrollbar-width: thin;
        scrollbar-color: #d9d9d9 transparent;
        padding: 24px 31px;
    }
    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-thumb {
        background: #d9d9d9;
        border-radius: 30px;
        /* min-height: 100px; */
    }
`;

const ScalendarMounth = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const ScalendarMounthTitle = styled.h3`
    font-weight: 600;
    font-size: 16px;
`;

const ScalendarMounthDays = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 6px;
`;

const ScalendarMounthDay = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 12px;
    color: ${(props) => (props.$isActive ? "#7334ea" : "#000")};
    background-color: ${(props) => (props.$isActive ? "#f1ebfd" : "#f4f5f6")};
    border-radius: 50%;
    opacity: ${(props) => (props.$isOtherMonth ? 0 : 1)};
    cursor: ${(props) => (props.$isOtherMonth ? "default" : "pointer")};
    pointer-events: ${(props) => (props.$isOtherMonth ? "none" : "auto")};
`;

export {
    Ssection,
    ScalendarHeader,
    ScalendarTitle,
    ScalendarDayNames,
    ScalendarDayName,
    ScalendarMounths,
    ScalendarMounth,
    ScalendarMounthTitle,
    ScalendarMounthDays,
    ScalendarMounthDay,
    SCalendarOverlay,
    SCalendarOverlayError,
    SCalendarOverlayLoading,
    SCalendarOverlayLoadingSpan,
};
