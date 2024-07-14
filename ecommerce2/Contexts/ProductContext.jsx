   import { createContext, useEffect, useState } from "react";
   

   export const ContextStore = createContext();

export default function ProductContext( {children}){
   const [apiData , setApiData] = useState([]);

   const [toggle , setToggle] = useState(false);


   function handleToggle(){
      setToggle(false);
   }

   useEffect( ()=>{
      async function fetchData(){
          const res = await fetch("https://dummyjson.com/products");
            const result = await res.json();
           setApiData(result.products);
      }

      fetchData();
   }, [])

   return(
     <ContextStore.Provider value={{apiData , toggle , setToggle , handleToggle}}>
         {children}
     </ContextStore.Provider>
   );
}