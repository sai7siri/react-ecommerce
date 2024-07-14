

import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App";
import ProductContext from "./ecommerce2/Contexts/ProductContext";

import CrudContext from "./ecommerce2/Contexts/CrudContext"


 const dom = ReactDOM.createRoot(document.getElementById("root"))

 dom.render(
   
   <React.StrictMode>

    <CrudContext>


   <ProductContext>

        <App />

   </ProductContext>
      
   </CrudContext>
   
   </React.StrictMode>
  
 )