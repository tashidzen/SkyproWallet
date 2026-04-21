
 
 
  
   
import styled from "styled-components";

export const Swrapper = styled.div`
  padding: 0 16px;
  box-sizing: border-box;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 1440px) {
    padding: 0; /* Убираем отступы слева и справа */
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

  @media (max-width: 1024px) {
    font-size: 28px;
    margin-left: 16px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    margin-top: 24px;
    margin-bottom: 20px;
    margin-left: 16px;
  }

  @media (min-width: 1440px) {
    margin-left: calc(50% - 600px); /* Сохраняем центрирование относительно 1200px */
  }
`;

export const TablesContainer = styled.div`
  display: flex;
  gap: 34px;
  box-sizing: border-box;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    justify-content: flex-start;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }

  @media (min-width: 1440px) {
    padding: 0; /* Убираем отступы слева и справа */
    max-width: none; /* Снимаем ограничение по ширине */
  }
`;
 
 
  
     
// import styled from "styled-components";

// export const Swrapper = styled.div`
//   padding: 0 16px;
//   box-sizing: border-box;
//   max-width: 1200px;
//   margin: 0 auto;
// `;

// export const Stitle = styled.h1`
//   text-align: left;
//   font-size: 32px;
//   font-weight: 700;
//   line-height: 150%;
//   margin-bottom: 32px;
//   margin-top: 36px;
//   margin-left: calc(50% - 600px);


//   @media (max-width: 1024px) {
//     font-size: 28px;
//     margin-left: 16px;
//   }

//   @media (max-width: 768px) {
//     font-size: 24px;
//     margin-top: 24px;
//     margin-bottom: 20px;
//     margin-left: 16px;
//   }
// `;

// export const TablesContainer = styled.div`
//   display: flex;
//   gap: 34px;
//   padding: 0 16px;
//   box-sizing: border-box;
//   max-width: 1200px;
//   margin: 0 auto;

//   @media (max-width: 1024px) {
//     padding: 0 16px;
//     justify-content: flex-start;
//   }

//   @media (max-width: 768px) {
//     flex-direction: column;
//     gap: 24px;
//   }
// `;
 
  
  
   
// import styled from "styled-components";

// export const Swrapper = styled.div`
//   max-width: 100%;
//   width: 100vw;
//   min-height: 100vh;
//   overflow: hidden;
//   position: relative; 
// `;

// export const Stitle = styled.h1`
//     text-align: left;
//     font-size: 32px;
//     font-weight: 700;
//     line-height: 150%;
//     margin-bottom: 32px;
//     margin-top: 36px;
//     margin-left: calc(50% - 600px);
// `;

// export const TablesContainer = styled.div`
//   display: flex;
//   gap: 34px; /* Расстояние между таблицами */
//   /* padding-left: 120px;
//   padding-right: 120px; */
//   box-sizing: border-box;
//   max-width: 1200px;
//   margin: 0 auto; /* Центрирование контейнера */

// `;