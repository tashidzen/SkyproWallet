import { useState, useEffect } from "react";
import { PopUser } from "../popups/popUser/PopUser";
import { SHeader, SHeaderContainer, SHeaderBlock, SHeaderLogo, SHeaderLogoLight, SHeaderNavigation, SHeaderWrapper, SHeaderLogOut, SHeaderLink } from "./Header.styled";
 
 
export function Header() { 
      const [isPopUserOpen, setIsPopUserOpen] = useState(false);

  // const handleClick = () => {
  //   setIsPopUserOpen(!isPopUserOpen);
  // };


  return (
    <SHeader>
      <SHeaderContainer>
        <SHeaderBlock>
          <SHeaderLogo>
            <a href="" target="_self">
              <SHeaderLogoLight src="images/logo.svg" alt="logo" />
            </a>
          </SHeaderLogo>  
          <SHeaderWrapper> 
            <SHeaderLink href="#">Мои расходы</SHeaderLink> 
            <SHeaderLink href="#">Анализ расходов</SHeaderLink>
          </SHeaderWrapper>
          <SHeaderNavigation>   
            <SHeaderLogOut href="#">Выйти</SHeaderLogOut>
            {isPopUserOpen && <PopUser />}
          </SHeaderNavigation>
        </SHeaderBlock>
      </SHeaderContainer>
    </SHeader >
  );

}

export default Header;
 
// onclick{handleClick}