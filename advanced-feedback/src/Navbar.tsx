import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <>
        <Link to={"/"}>Form</Link>
        <Link to={"/feedbacks"}>Feedbacks</Link>
        </>
    )
}