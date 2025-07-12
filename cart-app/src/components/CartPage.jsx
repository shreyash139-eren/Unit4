import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {add,remove} from "../cartSlice"

export default function CartPage(){
    const {items,total}=useSelector((state)=>state.cart)
    const dispatch=useDispatch()


    function handleRemove(ele){
        dispatch(remove(ele))
    }

return (
    <>
            <h1 className="text-center text-xl font-bold m-5">Cart</h1>
            <h1 className="text-center font-semibold mb-4">{total===0?`Add Items!` :`Total : $ ${total}`}</h1>
         <div className="grid grid-cols-3 m-auto w-[90%]">
            {items? (items.map((ele)=>(
                 <div key={ele.id} className="grid place-items-center w-100 border-1 rounded-3xl p-5 ">
                 <img src={ele.image} alt="" className="w-60 max-w-full max-h-full"/>
                 <p className="text-center"> {ele.title}</p>
                 <p className="text-center">{ele.category}</p>
                 <p className="text-center">Price : ${ele.price}</p>
                 <button className="bg-green-600" onClick={()=>handleRemove(ele)}>Remove</button>
             </div>
            ))):(<h1>Add Products!</h1>)}
        </div>
    </>
)
}