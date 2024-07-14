import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ContextStore } from "./Contexts/ProductContext";
import { CrudStore } from "./Contexts/CrudContext";
import { SlHome } from "react-icons/sl";
import {Link} from 'react-router-dom'

export default function ProductDetails() {
  const { apiData } = useContext(ContextStore);

  const {addItem ,  setData} = useContext(CrudStore);

  const { id } = useParams();

  const newId = apiData.find((p) => p.id === parseInt(id));

  
  if (!newId) {
    return <div className="text-center flex items-center">Product not found</div>;
  }

  //   destructure the getting data
  const { thumbnail , title , price , brand , description} = newId;

  
  return (
   <section className="h-screen  pt-16 items-center flex ">
      
      <div className="container mx-auto ">
               <Link to="/" className="flex justify-end text-xl">
                  <SlHome />
               </Link>
         <div className=" flex flex-col  lg:flex-row  items-center ">

         <div className="flex flex-1 items-center justify-center">
            <img src={thumbnail} className="max-w-[200px] lg:max-w-sm" />
         </div>

         {/* text */}

         <div className="flex-1 text-center lg:text-start">
            <h1 className="font-medium text-gray-500 text-xl">{title}</h1>
            <div className="text-gray-400  my-2 font-medium">
             Price : $  {price}
            </div>
            <p className="text-gray-400 my-2 max-w-[450px]">{description}</p>
            
            <button className="px-6 py-3 mt-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600"
            
            onClick={()=>addItem(newId , newId.id)}
            >Add to cart</button>
         </div>


         </div>
       
      </div>
      
   </section>
  );

}