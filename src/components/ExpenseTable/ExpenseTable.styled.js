import styled from "styled-components";

export const Stable = styled.table`
    max-width: 789px;
    width: 100%;
    height: 618px;
    font-size: 12px;
    box-shadow: 0px 20px 67px -12px #00000021;
    margin-right: 0;
    border-spacing: 32px 14px;
    position: relative;
    display: block;

    @media (max-width: 767px) {
        height: auto;
    }

    thead {
        position: relative;
        max-width: 789px;
        width: 100%;
        display: table;
        margin-bottom: -18px;

        &::after {
            content: "";
            position: absolute;
            top: 114px;
            left: 0px;
            right: 0px;
            height: 0.5px;
            background-color: #999999;

            @media (min-width: 769px) and (max-width: 1017px) {
                top: 125px;
            }
        }

        th {
            word-break: break-word;
            white-space: normal;

            &:nth-child(1) {
                width: 19.5%;
            }
            &:nth-child(2) {
                width: 19.5%;
            }
            &:nth-child(3) {
                width: 19.14%;
            }
            &:nth-child(4) {
                width: 22.35%;
            }
            &:nth-child(5) {
                width: 1.8%;
            }
        }
    }

    td {
        word-break: break-word;
        white-space: normal;

        &:nth-child(1) {
            width: 23.9%;
        }
        &:nth-child(2) {
            width: 23.9%;
        }
        &:nth-child(3) {
            width: 24.2%;
        }
        &:nth-child(4) {
            width: 27%;
        }
        &:nth-child(5) {
            width: 1%;
        }
    }

    @media (max-width: 767px) {
        border-spacing: 0 14px;
        font-size: 10px;
        /* Настройка отступов для ячеек */
        th,
        td {
            padding: 0;
        }
        /* Горизонтальные промежутки между столбцами */
        th:not(:last-child),
        td:not(:last-child) {
            padding-right: 16px;
        }
        /* Отступ слева у первой ячейки */
        th:first-child,
        td:first-child {
            padding-left: 16px;
        }
        /* Отступ справа у последней ячейки */
        th:last-child,
        td:last-child {
            padding-right: 16px;
        }
    }

    @media (max-width: 767px) {
        box-shadow: none;
        margin-top: -14px;

        thead {
            max-width: 767px;

            &::after {
                top: 34px;

                @media (max-width: 341px) {
                    top: 43px;
                }
            }

            th {
                &:nth-child(1) {
                    width: 21.574%;
                    text-align: left;
                }
                &:nth-child(2) {
                    width: 21.574%;
                    text-align: left;
                }
                &:nth-child(3) {
                    width: 21.283%;
                    text-align: right;
                }
                &:nth-child(4) {
                    width: 21.574%;
                    text-align: right;
                }
            }
        }

        td {
            &:nth-child(1) {
                width: 21.574%;
                text-align: left;
            }
            &:nth-child(2) {
                width: 21.574%;
                text-align: left;
            }
            &:nth-child(3) {
                width: 21.283%;
                text-align: right;
            }
            &:nth-child(4) {
                width: 21.574%;
                text-align: right;
            }
        }
    }
`;

export const SheaderTable = styled.th`
    font-size: 24px;
    font-weight: 700;
    padding-top: 18px;
    padding-bottom: 18px;
    text-align: left;
`;

export const SnameColumn = styled.tr`
    color: #999999;
    text-align: left;
    th {
        font-weight: normal;
    }
`;

export const StBody = styled.tbody`
    display: block;
    height: 479px;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-thumb {
        background: #d9d9d9;
        border-radius: 30px;
        min-height: 100px;
    }

    @media (max-width: 767px) {
        padding-bottom: 50px;
        &::-webkit-scrollbar {
            display: none;
        }
    }
`;

export const SButtonContainer = styled.div`
    @media (max-width: 767px) {
        position: fixed;
        bottom: 0px; // прижимаем к низу
        left: 0;
        right: 0;
        height: 87px;
        background: #ffffff;
        box-shadow: 0px -20px 67px -12px #00000021;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
