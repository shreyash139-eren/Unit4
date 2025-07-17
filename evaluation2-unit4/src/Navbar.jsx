import { useContext } from "react";
import { Link } from "react-router-dom";
import { favoriteContext } from "./App";

export default function Navbar(){
//    const {favorite,setFavorite}=useContext(favoriteContext)
    return(
        <div className="ml-170 mt-2">
        <Link className="mr-10 font-semibold hover:text-green-500" to={"/"}>Home</Link>
        <Link className="mr-10 font-semibold hover:text-green-500" to={"/favorites"}>Favorites </Link>
        </div>
    )
}