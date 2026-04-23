import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
  
    body {
        font-family: 'Montserrat', sans-serif;
        font-size: 15px;
        background-color: #f4f5f6;
        color: #000000; 
         
    @media (max-width: 767px) {
     background-color: #ffffff;
    }
    }
    
    table {
        border-radius: 30px;
        background-color: #FFFFFF;
    }`;
