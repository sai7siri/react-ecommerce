
import { TbHanger2 } from "react-icons/tb";
import {BsBag} from "react-icons/bs"
import { useContext } from "react";
import { ContextStore } from "./Contexts/ProductContext";
import { CrudStore } from "./Contexts/CrudContext";
import { useState , useEffect } from "react";



export default function Header(){

const {setToggle , toggle} = useContext(ContextStore);

const [active , setActive] = useState(false)

//  quantity

  const {cartTotal} = useContext(CrudStore)
  
      useEffect( ()=> {
         window.addEventListener('scroll' , ()=>{
            
            window.scrollY > 60 ? setActive(true) : setActive(false);
         })
      })

   return(

        
<header className={` ${active ? 'bg-white shadow-md py-4 ' : 'bg-blue-400 py-4 text-white'} fixed w-full top-0 z-20 px-4`}>

<div className="container mx-auto">

      <div className="flex justify-between items-center">

         <div>
         <h1 className="text-3xl"> <TbHanger2 /></h1>
         </div>

            <div className=" relative">

           <div onClick={()=> setToggle(!toggle)}>
           <h1 className="text-xl cursor-pointer hover:scale-150"> <BsBag /> </h1> 
           </div>
           
           <div className="px-[4px] py-0 rounded-full bg-red-500 flex items-center justify-center absolute -right-2 -bottom-2">
               <p className="text-[11px] text-white" >{cartTotal}</p>
           </div>

            </div>

      </div>
  
</div>
</header>

         
      
   )
}