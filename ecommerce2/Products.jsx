import { ContextStore } from "./Contexts/ProductContext";
import { useContext } from "react";
import ProItems from "./ProItems";
import Hero from "./Hero";
export default function Products(){

   const {apiData} = useContext(ContextStore);

     
   return(
      <div>

         <Hero />

         <div className="mt-4">
          <h1 className="text-center font-semibold text-sky-600 text-xl mb-2">New Arrivals</h1>

            <div className="container  mx-auto">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-sm mx-auto md:max-w-none ">
                  {
                     apiData.map( (p)=> (
                        <ProItems key={p.id} products={p} />
                     ))
                  }
               </div>
            </div>


      </div>
         
      </div>
      
   );
}