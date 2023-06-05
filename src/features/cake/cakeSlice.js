import { createSlice } from "@reduxjs/toolkit"
const initialState={
    numOfCakes:10
}
const cakeSlice=createSlice({
    name:'cake',
    initialState,
    reducers:{
        ordered : (state,actions) =>
        {
            state.numOfCakes-=actions.payload
        },
        restocked : (state,action)=>
        {
          state.numOfCakes += action.payload
        }
    },
})

export default cakeSlice.reducer
export const {ordered,restocked}=cakeSlice.actions