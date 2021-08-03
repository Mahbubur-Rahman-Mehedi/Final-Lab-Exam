import { Link } from "react-router-dom"


const Navbar = ({type})=>{

    return (
        <div>
            
            <Link to={type==="1"?"/register":"/addNewProduct"}>{type==="1"?"Register New Employee":"Add New Product"}</Link> | 
            <Link to='/list'>{type==="1"?"User List":"Product List"}</Link>
        </div>
    );
}

export default Navbar;