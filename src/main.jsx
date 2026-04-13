import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </StrictMode>
);
 
 
  
   
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// import { BrowserRouter } from "react-router-dom";
// import { GlobalStyle } from "./GlobalStyle.js";

// createRoot(document.getElementById("root")).render(
//     <StrictMode>
//         <BrowserRouter>
//             <GlobalStyle />
//             <App />
//         </BrowserRouter>
//     </StrictMode>,
// );
