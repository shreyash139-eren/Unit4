import React, {useState} from "react"

const useToggleItems=(initialValue,initialPosition=0)=>{
    const [pos,setPos]=useState(initialPosition)

    function toggle(){

        setPos((prev)=>(prev+1)%initialValue.length)
    }

    return [initialValue[pos],toggle]

}
export default useToggleItems