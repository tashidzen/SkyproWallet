import styled from "styled-components";

const borderColors = {
    standard: "rgba(148, 166, 190, 0.4)",
    error: "rgba(204, 0, 0, 1)", // тёмно‑красная обводка
};

const backgroundColors = {
    standard: "#ffffff", // белый фон
    error: "#ffe6e6", // светло‑красный фон
};

const textColors = {
    standard: "#333333", // стандартный цвет текста
    error: "#cc0000", // цвет текста при ошибке
};

// Контейнер для input + звёздочка
export const InputWrapper = styled.div`
    position: relative;
    display: inline-block;
    width: 313px;

  @media (max-width: 767px) {
    width: 343px; 
  }

  /* Стили для звёздочки */
  &::after {
    content: "${props => props.$hasError ? '*' : ''}";
    color: ${borderColors.error};
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    font-weight: bold;
    font-size: 18px;
    pointer-events: none;
    z-index: 2;
  }
`;

export const SInput = styled.input`
    width: 100%;
    height: 39px;
    padding: 12px;
    border: 0.7px solid ${borderColors.standard};
    border-radius: 8px;
    background-color: ${backgroundColors.standard};
    color: ${textColors.standard};
    font-size: 16px;
    box-sizing: border-box;
    transition: all 0.2s ease-in-out;

    /* Стили для ошибки */
    ${(props) =>
        props.$hasError &&
        `
    background-color: ${backgroundColors.error};
    border-color: ${borderColors.error};
    color: ${textColors.error};
  `}

    /* Фокус */
  &:focus {
        outline: none;
        border-color: #6699cc;
        box-shadow: 0 0 0 2px rgba(102, 153, 204, 0.2);
    }

    /* Неактивное состояние */
    &:disabled {
        background-color: #f5f5f5;
        color: #999999;
        cursor: not-allowed;
    }

    @media (max-width: 767px) {
        width: 343px;
    }
`;
