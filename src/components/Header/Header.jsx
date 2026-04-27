import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import {
  SHeader,
  SHeaderContainer,
  SHeaderBlock,
  SHeaderLogoLight,
  SHeaderWrapper,
  SHeaderLink,
  SHeaderLogOut,
  SHeaderMenuButton,
  SHeaderDropdown,
  SHeaderDropdownLink
} from './Header.styled';

export default function Header() {
  const { isLoading, clearAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
 
  // Закрытие меню при клике вне его области
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (isLoading) {
    return null;
  }

  const isAuthPage = ['/login', '/registration'].includes(location.pathname);
  if (isAuthPage) {
    return null;
  }

  const handleLogout = () => {
    clearAuth();
    navigate('/login', { replace: true });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  // Определяем текущую активную страницу для отображения в заголовке выпадающего меню
  const getCurrentPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Мои расходы';
      case '/new-expense':
        return 'Новый расход';
      case '/analysis':
        return 'Анализ расходов';
      default:
        return 'Меню';
    }
  };

  return (
    <SHeader>
      <SHeaderContainer>
        <SHeaderBlock>
          {/* Логотип — теперь просто изображение, без ссылки */}
          <SHeaderLogoLight src="images/logo.svg" alt="logo" />

          {/* Меню для десктопа и планшетов (видно на экранах ≥ 768px) — только две ссылки */}
          <SHeaderWrapper>
            <SHeaderLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Мои расходы
            </SHeaderLink>
            <SHeaderLink
              to="/analysis"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Анализ расходов
            </SHeaderLink>
          </SHeaderWrapper>

          {/* Кнопка-гамбургер для мобильных (< 768px) */}
          <SHeaderMenuButton onClick={toggleMobileMenu}>
            {getCurrentPageTitle()}  
            <svg width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.03101 5.25L-8.29875e-05 -9.41288e-08L6.0621 4.35844e-07L3.03101 5.25Z" fill="black"/>
            </svg>

          </SHeaderMenuButton>

          {/* Выход — виден на всех устройствах */}
          <SHeaderLogOut onClick={handleLogout}>Выйти</SHeaderLogOut>
        </SHeaderBlock>

        {/* Выпадающее меню для мобильных — отображается только при ширине < 768px */}
        {isMobileMenuOpen && (
          <SHeaderDropdown ref={dropdownRef}>
            <SHeaderDropdownLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setMobileMenuOpen(false)}
            >
              Мои расходы
            </SHeaderDropdownLink>
            <SHeaderDropdownLink
              to="/new-expense"
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setMobileMenuOpen(false)}
            >
              Новый расход
            </SHeaderDropdownLink>
            <SHeaderDropdownLink
              to="/analysis"
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setMobileMenuOpen(false)}
            >
              Анализ расходов
            </SHeaderDropdownLink>
          </SHeaderDropdown>
        )}
      </SHeaderContainer>
    </SHeader>
  );
}