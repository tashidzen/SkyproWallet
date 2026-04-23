
  
  
   
import styled from 'styled-components';

export const Stable = styled.table`
  width: 379px;
  height: 618px;
  font-size: 12px;
  box-shadow: 0px 20px 67px -12px #00000021;
  position: relative;
  display: block;
  word-wrap: break-word;
  table-layout: fixed;
  padding: 32px;
  overflow: visible;

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    padding: 20px;
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 0 16px 87px;
    box-shadow: none;
    border-radius: 0;
    background-color: #FFFFFF;
    height: auto;
   
  }

  thead th {
    padding: 0;
    width: 100%;

    @media (min-width: 768px) and (max-width: 1023px) {
      padding: 0 0 0 8px;
    }

    @media (max-width: 767px) {
      display: none;
    }
  }

  tbody tr {
    vertical-align: top;
  }

  /* ✅ Скрываем кнопки в таблице на мобильных */
  .desktop-buttons {
    @media (max-width: 767px) {
      display: none;
    }
  }
`;

export const FormTitle = styled.h3`
  font-weight: 700;
  font-size: 22px;
  line-height: 100%;
  margin: 0 0 24px 0;
  color: #333;
  font-family: 'Montserrat', sans-serif;
  text-align: left;
`;

export const FieldLabel = styled.div`
  font-weight: 600;
  font-size: 14px;
  margin: 0 0 16px 0;
  color: #333;
  font-family: 'Montserrat', sans-serif;

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 0 0 0 8px;
  }

  @media (max-width: 767px) {
    padding: 0;
    font-size: 16px;
    color: #000000;
  }
`;

export const FormInput = styled.input`
  display: block;
  width: 313px;
  height: 39px;
  padding: 10px;
  margin: 0 0 24px 0;
  border: 0.5px solid #999999;
  border-radius: 6px;
  background: transparent;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  transition: all 0.3s ease;
  box-sizing: border-box;
  outline: none;

  &:focus {
    background: ${props => props.$valid ? '#F1EBFD' : '#fff'};
    border-color: ${props => props.$valid ? '#F1EBFD' : '#999999'};
  }

  ${props => props.$error && `
    background-color: #ffe6e6;
    border-color: #cc0000;
    &:focus {
      background-color: #ffe6e6;
      border-color: #cc0000;
    }
  `}

  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 290px;
    height: 36px;
    padding: 8px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    margin: 0 0 24px 8px;
  }

  @media (max-width: 767px) {
    width: 100%;
    margin: 0 0 24px 0;
  }
`;

export const DateInput = styled.input`
  display: block;
  width: 313px;
  height: 39px;
  padding: 10px;
  margin: 0 0 24px 0;
  border: 0.5px solid #999999;
  border-radius: 6px;
  background: transparent;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  transition: all 0.3s ease;
  box-sizing: border-box;
  outline: none;

  &:focus {
    background: ${props => props.$valid ? '#F1EBFD' : '#fff'};
    border-color: ${props => props.$valid ? '#F1EBFD' : '#999999'};
  }

  ${props => props.$error && `
    background-color: #ffe6e6;
    border-color: #cc0000;
    &:focus {
      background-color: #ffe6e6;
      border-color: #cc0000;
    }
  `}

  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 100%;
    height: 36px;
    padding: 8px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    margin: 0 0 24px 8px;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const CategoryButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 8px 15px;
  margin: 5px;
  border: none;
  border-radius: 30px;
  background: #F4F5F6;
  color: #333;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  min-width: min-content;

  svg {
    margin-right: 6px;

    @media (max-width: 767px) {
      margin-right: 10px;
    }
  }

  &:hover {
    background: #e0e0e0;
  }

  ${({ selected }) =>
    selected &&
    `
    background: #F1EBFD;
    color: #7334EA;
    svg path {
      fill: #7334EA;
    }
    &:hover {
      background: #F1EBFD;
    }
  `}

  @media (min-width: 1024px) and (max-width: 1439px) {
    padding: 8px 15px;
    font-size: 12px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 6px 12px;
    font-size: 12px;
  }

  @media (max-width: 767px) {
    padding: 8px 20px;
    font-size: 12px;
    margin: 6px 0 0 6px;
  }
`;

export const FormButton = styled.button`
  width: 313px;
  height: 39px;
  border-radius: 6px;
  padding: 10px;
  background: ${props => props.disabled ? '#cccccc' : '#7334EA'};
  color: ${props => props.disabled ? '#666666' : '#fff'};
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 11px;
  line-height: 100%;
  text-align: center;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: background 0.3s ease;
  box-sizing: border-box;

  &:hover {
    background: ${props => props.disabled ? '#cccccc' : '#622aa8'};
  }

  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 290px;
    padding: 8px;
    font-size: 10px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    height: 36px;
    padding: 8px 12px;
    font-size: 10px;
    margin: 0 0 24px 8px;
  }

  @media (max-width: 767px) {
    width: 100%;
    height: 36px;
    padding: 8px 12px;
    font-size: 10px;
    margin: 0 0 24px 0;
  }
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -5px;
  width: calc(100% - 40px);
  overflow-x: auto;
  padding-bottom: 24px;
  box-sizing: border-box;

  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 100%;
    padding-bottom: 20px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    padding-bottom: 16px;
    justify-content: flex-start;
    padding-left: 8px;
  }

  @media (max-width: 767px) {
    padding-bottom: 24px;
    justify-content: flex-start; 
    width: auto;
  }
`;

export const SFixedBottom = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 87px;
  background-color: #ffffff; 
  box-shadow: 0px -20px 67px -12px #00000021;
  padding: 12px 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1000;

  /* Показываем только на мобильных */
  @media (min-width: 768px) {
    display: none;
  }

  /* Учитываем безопасную зону (iPhone) */
  padding-bottom: max(12px, env(safe-area-inset-bottom));
`;