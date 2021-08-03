import './user.css';
import {Link} from "react-router-dom";

const User = ({id, name, contact_no, userName, password, callback})=>{
    return (
        <div className= 'std'>
            <h3>ID: {id}</h3>
            <h3>Name: {name}</h3>
            <p>Contact No: {contact_no} </p> 
            <p>User Name: {userName}</p>
            <p>Password: {password}</p>
            <button onClick={()=>callback(id)}>Delete</button>
            <Link to={`/update/${id}`}> Update</Link>
        </div>
    );
}

export default User;