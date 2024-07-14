
import { createContext, useEffect, useState } from "react";

export const CrudStore = createContext();

    function CrudContext ( {children}) {


         const [data , setData] = useState([]);

         const [total , setTotal] = useState(0);

         const [cartTotal , setCartTotal] = useState(0)

         useEffect( ()=>{
            const totalPrice = data.reduce( (prev ,currItem ) => {
              return prev + currItem.price * currItem.amount
            }, 0);
            setTotal(totalPrice)
         }, [data])

        //  cartTotal
        useEffect( ()=> {

          const cartVal = data.reduce ( (prev , curr)=> {

            return prev + curr.amount
          }, 0);

          setCartTotal(cartVal);
          
        } , [data])

        

        //  addItem

         function addItem(p , id){
            const newItem = {...p , amount : 1}

            const cartItem = data.find ( (p)=> p.id === id)

           if(cartItem){
              const newCart = data.map( (item)=> {
                if(item.id === id){
                  return {...item , amount : cartItem.amount + 1 }
                } else {
                  return item ;
                }
              })
              setData(newCart);
           } else {
            setData([...data , newItem])
           }

         }

        //  remove item

        function removeItem(id){
          const item = data.filter ( (p)=> p.id !== id);

          setData(item);
        }

        //  increase item
          function increase(id){
              const existed = data.find( (p)=> p.id === id)

              if(existed.amount < 10){

                addItem(existed , id)
              } 
             
          }

          // decreaseItem

          function decrease(id){
              
            const item = data.find((p)=> p.id === id)

            if(item){
              const newItem = data.map( (p)=> {
                if( p.id === id){
                  return {...p , amount: item.amount -1}
                } else {
                  return p ;
                }
              });

              setData(newItem)
            } 
                if(item.amount < 2){
                 removeItem(id)
                }
        

          }

          // cart empty

          function cartEmpty(){
            setData([])
          }
          



         return(
           <CrudStore.Provider value={{addItem , data , setData , increase , decrease , removeItem , total , cartTotal , cartEmpty}}>

               {children}

           </CrudStore.Provider>
         );

        }

      export default CrudContext;