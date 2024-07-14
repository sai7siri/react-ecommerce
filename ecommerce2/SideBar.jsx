// import {} from "react-icons/fs"
import { HiArrowCircleRight } from "react-icons/hi";
import {useContext} from "react";
import { CrudStore } from "./Contexts/CrudContext";
import Cart from "./Cart";
import { TbTrashOff } from "react-icons/tb";

import { ContextStore } from "./Contexts/ProductContext";

export default function SideBar() {
   const {handleToggle , toggle } = useContext(ContextStore);

  //  added items
  const {data , cartTotal , total , cartEmpty} = useContext(CrudStore);

 

  return (

      <div className={`fixed ${ toggle ? 'right-0' : "-right-full"} top-0 bg-white w-full h-full z-30 px-4 md:max-w-[45vw] xl:max-w-[40vw] lg:px-6 transition-all duration-500 overflow-auto max-h-lvh`}>

        <div className="">
          

          <div className="flex items-center justify-between border-b py-3">
                       
            <div>
               <p className=" uppercase text-gray-400">Shopping-Bag( {cartTotal} )</p>
               </div>

            <div className="cursor-pointer" onClick={handleToggle}>
              <p className="text-2xl hover:scale-150 ">
                <HiArrowCircleRight />
              </p>
            </div>

          </div>

          {/* items */}
            
            {cartTotal === 0 && <div className="text-center text-red-400 font-semibold "> No items in Cart</div>}
           
           <div className=" h-[400px] overflow-y-auto my-3 py-2 border-b" >
            {
              data.map ( (p)=> (
               
                <Cart key={p.id} carts={p}/>

              ))
            }
           </div>

           <div>
            {/* total amount */}

            <div className="w-full bg-gray-100 flex justify-between p-2">

            <div className="text-gray-600 font-semibold font-mono text-lg">
              CartTotal : $ {parseFloat(total).toFixed(2)}
            </div>
            <div className="w-8 h-8 bg-red-600
             flex justify-center items-center"
             
              onClick={cartEmpty}

             >
              <p className="text-xl text-white">
              <TbTrashOff />
              </p>

            </div>

            </div>

            {/* chechout */}
                <div className="bg-black my-2 p-3 flex justify-center items-center">
                   <p className="text-white font-medium">Checkout</p>
                </div>
           </div>

        </div>



      </div>

  );
}
