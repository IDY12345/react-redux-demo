import React from 'react'
import { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { ordered,restocked } from './iceCreamSlice'
const IceCreamView = () => {
    const noOfIcecreams=useSelector((state)=> state.icecream.numOfIcecreams)
    const dispatch=useDispatch()
    const [value,setValue]=useState(1)
  return (
    <div><h2>Number of Icecreams -{noOfIcecreams} </h2>
    <button onClick={()=>dispatch(ordered(value))}> Order Icecreams </button>
    <input 
    type='number'
    value={value}
    onChange={(e) => setValue(parseInt(e.target.value))} />
    <button onClick={()=>dispatch(restocked(value))}> Restock Icecreams </button></div>
  )
}

export default IceCreamView