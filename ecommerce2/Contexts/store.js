

import {configureStore} from "@reduxjs/toolkit";
import methods from "./methods"

export const store =configureStore({
reducer : {

   cart : methods
}
   
})