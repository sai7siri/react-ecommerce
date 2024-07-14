import React, { useContext } from "react";
import { GoX } from "react-icons/go";
import { GoPlus } from "react-icons/go";
import { GoDash } from "react-icons/go";
import { CrudStore } from "./Contexts/CrudContext";



const Cart = ({ carts }) => {

  const { id, title, thumbnail, price ,amount } = carts;

  // contexts

  const {increase , decrease , removeItem} = useContext(CrudStore)


  return (
    <div className="">

      <div className="w-full max-h-[200px] border-b my-2 ">

        <div className="flex w-full h-full items-center gap-2 p-2 ">

          <div className="max-h-[150px]   flex items-center justify-center mx-auto">
            <img src={thumbnail} className="max-w-[100px] hover:scale-110" alt="" />
          </div>

          <div className="flex flex-col w-full">
            {/* titles */}
            <div className="flex items-center justify-between w-full">
              <div className="max-w-[220px] hover:underline ">
                <p className="text-gray-500 capitalize">{title}</p>
              </div>

              <div className="hover:scale-150 hover:text-red-600">
                <p className="text-2xl"
                onClick={()=> removeItem(id)}
                >
                  <GoX />{" "}
                </p>
              </div>
            </div>

            {/* price & remove buttons */}

            <div className="flex  items-center gap-2 mt-3">

              <div className="flex h-full  min-w-[110px] border">
                
                <div className="flex flex-1 justify-center items-center max-h-full hover:bg-yellow-100"
                onClick={()=> decrease(id)}
                >
                <p className="text-lg"><GoDash /></p>
                </div>

                <div className="flex  items-center justify-center h-full">
                  {amount}
                </div>

                <div className="flex flex-1 items-center justify-center max-h-full hover:bg-yellow-100 "
                onClick={()=> increase(id)}
                >
                  <p className="text-lg"><GoPlus /></p>
                </div>
              </div>

              {/* price */}
              <div className="flex  justify-around text-gray-500">${price}</div>

              {/* total price */}
              <div className="flex flex-1 justify-end">
                <p className="font-medium text-gray-600">Total : $ {parseFloat(price * amount).toFixed(2)}</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Cart;
