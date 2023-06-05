import { createSlice } from "@reduxjs/toolkit"
const initialState={
    numOfIcecreams:20
}
const iceCreamSlice=createSlice
({
    name:'icecream',
    initialState,
    reducers:{
        ordered:(state,actions)=>
        {
          state.numOfIcecreams-=actions.payload
        },
        restocked:(state,actions)=>
        {
            state.numOfIcecreams +=actions.payload
        },
    },
})

export default iceCreamSlice.reducer
export const {ordered,restocked}=iceCreamSlice.actions
