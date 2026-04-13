import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #FFFFFF;
`;

export const SHeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 120px;
`;

export const SHeaderBlock = styled.div`
  height: 64px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 0;
`;

export const SHeaderLogo = styled.div`
  width: 143.68px;
`;

export const SHeaderLogoLight = styled.img`
  width: 143.68px;
`;

// ИЗМЕНЕНО: ширина увеличена, flex-direction: row
export const SHeaderWrapper = styled.div`  
  width: 350px;  
  display: flex;  
  flex-direction: row;  
  justify-content: space-between;  
  align-items: center;  
`;

export const SHeaderLink = styled(NavLink)`
  width: auto;
  cursor: pointer;
  font-weight: 400;
  text-decoration: none;
  color: #000000;
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 0.3s ease;
  white-space: nowrap;  /* предотвращает перенос текста */

  &:hover {
    color: #7334EA;
    text-decoration: underline;
    font-weight: 600;
  }

  &.active {
    color: #7334EA;
    text-decoration: underline;
    font-weight: 600;
  }
`;

export const SHeaderNavigation = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SHeaderButton = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565EEF;
  color: #FFFFFF;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;

  &:hover {
    background-color: #33399b;
  }
`;

export const SHeaderLogOut = styled.a`
  color: #000000;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;

  &:hover {
    color: #7334EA;
  }
`;