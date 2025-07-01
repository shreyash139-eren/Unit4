import { Link } from "react-router-dom";

const NavBar=()=>{
    return(
        <div style={{display:"flex",justifyContent:"space-between", width:"200px",margin:"auto",marginBottom:"10px"}}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        </div>
    )
}
export default NavBar