import { configureStore } from "@reduxjs/toolkit";
import counterRd from './Createslice'
const store = configureStore({
    reducer:{
        counter:counterRd
    }
})

export default store;