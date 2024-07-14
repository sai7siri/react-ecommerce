import Products from "./ecommerce2/Products";
import Footer from "./ecommerce2/Footer";
import Header  from "./ecommerce2/Header";

import {BrowserRouter , Routes , Route} from "react-router-dom";
import SideBar from "./ecommerce2/SideBar";
import ProductDetails from "./ecommerce2/ProductDetails"; 

export default function App(){

 

  return(
   
      <BrowserRouter>
    <Header />

        <Routes>

          <Route path="/" element={ <Products />} />
          <Route  path="/product/:id" element={ <ProductDetails /> } />
        </Routes>
        
        <SideBar />
        <Footer />
      </BrowserRouter>
       
   
  );
}