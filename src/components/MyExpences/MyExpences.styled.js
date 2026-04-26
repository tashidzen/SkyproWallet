import styled from "styled-components";

export const Swrapper = styled.div`
    overflow: hidden;
    position: relative; 
    padding-top: 64px; 
     
    @media (max-width: 767px) {
        padding-top: 54px; 
    }

    @media (min-width: 768px) and (max-width: 1023px) {
        overflow: visible; 
        margin: 0 16px; 
    }
`;

export const SmobileTitle = styled.div`
    @media (max-width: 767px) {
        display: flex;
        flex-wrap: nowrap;
        gap: 58px;
        flex-direction: row; 
        background-color: #FFFFFF;
        justify-content: space-between;
    } 
         
     @media (min-width: 768px) and (max-width: 1023px) {
        display: flex;
        flex-wrap: nowrap;
        gap: 58px;
        flex-direction: row;
    }
`; 
 
export const SmobileNewExpenseFormTitle = styled.div`
    @media (max-width: 767px) {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column-reverse; 
        background-color: #FFFFFF; 
        padding-left: 16px;
    } 
         
     @media (min-width: 768px) and (max-width: 1023px) {
        display: flex;
        flex-wrap: nowrap;
        gap: 58px;
        flex-direction: row;
    }
`;

export const Stitle = styled.h1`
    text-align: left;
    font-size: 32px;
    font-weight: 700;
    line-height: 150%;
    margin-bottom: 32px;
    margin-top: 36px;
    margin-left: calc(50% - 600px);

    @media (max-width: 767px) {
        letter-spacing: 0px;
        font-size: 24px;
        line-height: 100%;
        margin-left: 16px;
        margin-bottom: 22px;
        margin-top: 24px;
    }  
         
     @media (min-width: 768px) and (max-width: 1023px) { 
        letter-spacing: 0px;
        font-size: 24px;
        line-height: 100%;
        margin-left: 0;
        margin-bottom: 22px;
        margin-top: 24px; 
    }
         
    @media (min-width: 1024px) and (max-width: 1439px) {
    max-width: 100%; 
    margin-left: 16px;
  }
`; 
 
export const SNewExpenseFormtitle = styled.h1`
    text-align: left;
    font-size: 32px;
    font-weight: 700;
    line-height: 150%;
    margin-bottom: 32px;
    margin-top: 36px;
    margin-left: calc(50% - 600px);

    @media (max-width: 767px) {
        letter-spacing: 0px;
        font-size: 24px;
        line-height: 100%;
        margin-left: 0;
        margin-bottom: 24px;
        margin-top: 0;
    }  
         
     @media (min-width: 768px) and (max-width: 1023px) { 
        letter-spacing: 0px;
        font-size: 24px;
        line-height: 100%;
        margin-left: 0;
        margin-bottom: 22px;
        margin-top: 24px; 
    }
         
    @media (min-width: 1024px) and (max-width: 1439px) {
    max-width: 100%; 
    margin-left: 16px;
  }
`;

export const SNewExpenseFormLink = styled.a`
    display: flex;
    gap: 6px;
    margin-top: 32px;
    margin-right: 14px;
    margin-bottom: 25px;
    font-size: 12px;
    font-weight: 600;
    color: #000000;
    text-decoration: none;
    align-items: center; 
`; 
 
export const SExpenseTableLink = styled.a`
    display: flex;
    gap: 6px;
    margin-top: 32px;
    margin-bottom: 25px;
    font-size: 12px;
    color: #999999;
    text-decoration: none;
    align-items: center; 
     
    @media (max-width: 767px) {
     margin-top: 24px;
     margin-bottom: 12px;
    }
`;

export const TablesContainer = styled.div`
    display: flex;
    gap: 34px; /* Расстояние между таблицами */
    /* padding-left: 120px;
  padding-right: 120px; */
    box-sizing: border-box;
    max-width: 1200px;
    margin: 0 auto; /* Центрирование контейнера */ 
     
    @media (min-width: 1024px) and (max-width: 1232px) {
     margin: 0 16px;
    } 
   `;   
