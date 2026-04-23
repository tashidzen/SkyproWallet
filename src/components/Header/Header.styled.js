import styled from "styled-components";
import { NavLink } from "react-router-dom";

// Общие стили
export const SHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #FFFFFF; 
`;

export const SHeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;

   @media (min-width: 1024px) and (max-width: 1439px) {
    max-width: 100%;
    padding: 0 16px; /* Уменьшаем отступы на больших экранах */
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 0 10px;
  }

  @media (max-width: 767px) {
    padding: 0 16px;
    background-color: #F4F5F6;
  }
`;

export const SHeaderBlock = styled.div`
  height: 64px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 0 12px;
  }

  @media (max-width: 767px) {
    padding: 0; 
    height: 54px;
  }
`;

export const SHeaderLogoLight = styled.img`
  width: 143.68px;
  height: auto;

  @media (min-width: 320px) and (max-width: 767px) {
    width: 109px;
    margin-right: auto;
  }

  @media (min-width: 768px) and (max-width: 1023px) { 
    width: 120px;
  }
`;

export const SHeaderWrapper = styled.div`
  width: 350px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  @media (max-width: 1024px) {
    width: 320px;
    gap: 16px;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

// ✅ SHeaderLink — корректно закрыт, без посторонних export
export const SHeaderLink = styled(NavLink)`
  font-weight: 400;
  text-decoration: none;
  color: #000000;
  padding: 8px 12px;
  border-radius: 4px;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    color: #7334EA;
    text-decoration: underline;
    font-weight: 600;
  }

  @media (max-width: 1024px) {
    padding: 6px 10px;
    font-size: 14px;
  }
`;

// ✅ Единственный SHeaderLogOut — вне других стилей
export const SHeaderLogOut = styled.a`
  color: #000000;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  background: none;
  border: none;

  &:hover {
    color: #7334EA;
  }

  @media (max-width: 1024px) {
    font-size: 14px;
    padding: 6px 10px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 12px 0;
  }

  @media (max-width: 375px) {
    font-size: 13px;
    padding: 6px 0 6px 0;
  }
`;

// Кнопка-гамбургер для мобильных (< 768px)
export const SHeaderMenuButton = styled.button`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    color: #7334EA; 
    gap: 8px;
    text-decoration: underline;
    text-underline-offset: 4px;
    padding: 12px 20px;
    text-align: center;
    white-space: nowrap;
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 375px) {
    padding: 8px;
    font-size: 12px;
  }
`;

// Выпадающее меню для мобильных (< 768px)
export const SHeaderDropdown = styled.div`
  position: absolute;
  top: 47px;
  right: 78px;
  background: #FFFFFF; 
  border: 0.5px solid #999999; 
  box-shadow: 0px 20px 67px -12px #00000021;
  border-radius: 6px;
  display: none;
  flex-direction: column; 
  gap: 6px;
  min-width: 138px; 
  padding: 10px;
  z-index: 1000;

  @media (max-width: 767px) {
    display: flex;
  } 

  @media (max-width: 375px) { 
    margin: 0;
  } 
`;

// Стиль для ссылок в выпадающем меню
export const SHeaderDropdownLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  padding: 7px 14px;
  margin: 0 auto 0 0;
  border: none;
  border-radius: 30px;
  background: #F4F5F6;
  color: #000000; 
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px; 
  font-weight: 400;
  text-decoration: none;
  transition: all 0.3s ease;
  white-space: nowrap;
  min-width: min-content; 

  &:hover { 
    background-color: #f0f0f0; 
  }

  &.active {
    font-weight: 600;
    background-color: #F1EBFD; 
    color: #7334EA;
  }
`;
