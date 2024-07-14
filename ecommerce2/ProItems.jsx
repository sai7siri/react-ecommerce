
import React, { useContext } from 'react';
import {BsEyeFill} from "react-icons/bs";
import {CrudStore} from "./Contexts/CrudContext"
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function ProItems ( {products}) {

   // const [disable , setDisable] = useState(false)

      const {id, title , thumbnail , category , price} = products;

      const {addItem , data} = useContext(CrudStore);

      // if cheching data id matching 

      const cartItem = data.find ( (p)=> p.id === id);

      const disable = cartItem ? cartItem.amount >=10 : false ;


  return (
    <div>
         <div className='w-full min-h-[300px] border rounded group transition duration-200 flex items-center relative shadow-sm'>

            <div className='w-full min-h-[200px] mx-auto flex items-center justify-center '>

               <div>
               <img src={thumbnail} alt="" className='max-w-[160px] h-full  object-cover hover:scale-110'/>
               </div>
               
               <Link to={`/product/${id}`} 

               className='absolute top-2 -right-1 p-3 border flex justify-center items-center opacity-0 
               group-hover:opacity-100  group-hover:right-2 transition-all'
         
               >
                  <BsEyeFill className='text-xl'/>
               </Link>

               <div className='-bottom-1 absolute opacity-0 group-hover:opacity-100 group-hover:bottom-2 transition-all'>
                  <button className={`py-1 px-3 rounded-md bg-green-400 text-white hover:bg-green-600 ${disable ? "cursor-not-allowed opacity-50 " :""}`}

                  disabled={disable}
                 
                  onClick={()=>addItem(products , id)}

                  >Add-Cart</button>
               </div>
            </div>  

           </div>

         <div>

            <div>
               <h4 className='text-lg text-gray-300 '>{category}</h4>
            </div>
            <div>
               <p className='text-gray-400 capitalize hover:underline cursor-pointer'>{title}</p>
            </div>
            <div>
               <p className='text-gray-500 font-mono'>price : ${price}</p>
            </div>
         </div>
    </div>
  )
}
