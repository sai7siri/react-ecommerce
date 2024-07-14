
import {createSlice} from "@reduxjs/toolkit";


export const methodSlice = createSlice({

   name : "cart",

   initialState : {
      product : [],
      quantity : 0,
      total : 0
   },

   reducers : {
      addItem : (state , action)=> {
       state.quantity += 1;
       state.product.push(action.payload);
       state.total += action.payload.price

         
      }
   }
});

export const {addItem} = methodSlice.actions;

export default methodSlice.reducer;