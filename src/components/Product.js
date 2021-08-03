import './user.css';
import {Link} from "react-router-dom";

const Product = ({id, productName, quantity, price, callback})=>{
    return (
        <div className= 'std'>
            <h3>ID: {id}</h3>
            <h3>product Name: {productName}</h3>
            <p>quantity: {quantity} </p> 
            <p>price: {price}</p>
            <button onClick={()=>callback(id)}>Delete</button>
            <Link to={`/edit/${id}`}> Update</Link>
        </div>
    );
}

export default Product;