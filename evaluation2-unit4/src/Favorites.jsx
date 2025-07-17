import { useContext } from "react";
import { favoriteContext } from "./App";

export default function Favorites(){
    const {favorite,setFavorite}=useContext(favoriteContext)

{console.log(favorite)}
    return(
        <div>
         {favorite.length===0 && <p className="text-3xl text-center mt-70 font-bold">Please add products!</p>}
         {favorite.map((ele)=>(
            <div>
            <img src={ele.thumbnail} alt="" />
            <p>{favorite.title}</p>
            <p>Price : ${favorite.price}</p>
            </div>
         ))}
         
        </div>
    )
}