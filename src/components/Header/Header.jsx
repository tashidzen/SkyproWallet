import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import {
  SHeader,
  SHeaderContainer,
  SHeaderBlock,
  SHeaderLogo,
  SHeaderLogoLight,
  SHeaderNavigation,
  SHeaderWrapper,
  SHeaderLogOut,
  SHeaderLink
} from './Header.styled';

export default function Header() {
  const { token, isLoading, clearAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  if (isLoading) {
    return null;
  }

  const isAuthPage = ['/login', '/registration'].includes(location.pathname);

  // Не отображаем полноценный Header на страницах авторизации
  if (isAuthPage) {
    return null;
  }

  const handleLogout = () => {
    clearAuth();
    navigate('/login', { replace: true });
  };

  return (
    <SHeader>
      <SHeaderContainer>
        <SHeaderBlock>
          <SHeaderLogo>
            <SHeaderLink to="/">
              <SHeaderLogoLight src="images/logo.svg" alt="logo" />
            </SHeaderLink>
          </SHeaderLogo>

          {token && (
            <>
              <SHeaderWrapper>
                <SHeaderLink to="/">Мои расходы</SHeaderLink>
                <SHeaderLink to="/analysis">Анализ расходов</SHeaderLink>
              </SHeaderWrapper>
              <SHeaderNavigation>
                <SHeaderLogOut onClick={handleLogout}>Выйти</SHeaderLogOut>
              </SHeaderNavigation>
            </>
          )}
        </SHeaderBlock>
      </SHeaderContainer>
    </SHeader>
  );
}