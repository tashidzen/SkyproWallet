import { useNavigate, useLocation } from "react-router-dom";
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
} from "./Header.styled";

export function Header({ setIsAuth }) { 
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthPage = location.pathname.includes('/login') || location.pathname.includes('/registration');

  const handleLogout = () => {
    setIsAuth(false);
    navigate("/login", { replace: true });
  };

  return (
    <SHeader>
      <SHeaderContainer>
        <SHeaderBlock>
          <SHeaderLogo>
            <a href="" target="_self">
              <SHeaderLogoLight src="images/logo.svg" alt="logo" />
            </a>
          </SHeaderLogo>  
          
          {!isAuthPage && (
            <>
              <SHeaderWrapper> 
                <SHeaderLink href="#">Мои расходы</SHeaderLink> 
                <SHeaderLink href="#">Анализ расходов</SHeaderLink>
              </SHeaderWrapper>
              <SHeaderNavigation>   
                <SHeaderLogOut 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogout();
                  }}
                >
                  Выйти
                </SHeaderLogOut>
              </SHeaderNavigation>
            </>
          )}
        </SHeaderBlock>
      </SHeaderContainer>
    </SHeader>
  );
}

export default Header;