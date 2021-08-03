import { useState } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router";
import React from 'react';

const CreateUser = ({status, addNewproduct, updatecallback})=>{
    const {id:eid} = useParams();
    const [product, setProduct] = useState({id:'',productName: '', quantity:'', price:''});
    const history = useHistory();

    const change = (e)=>{
        const attr = e.target.name;
        const val = e.target.value;
        setProduct({...product, [attr]: val})
    };

    const onsubmit = (e)=>{
        e.preventDefault();
        console.log(product); 
        
        if(status==='add'){
            addNewproduct(product);  
        }
        else if (status==='edit') {
            updatecallback(eid, product);
        }   
        history.push('/list');
    }

    return(
        <>
            <br/>
            <h3>{status==='add'?'Add New ':'Edit '} Product</h3>
            <form onSubmit={onsubmit}>
                Product Name: <input type='text' name='productName' value={product.productName} onChange={change} /> <br/>
                ID: <input type='text' name='id' value={product.id} onChange={change} /> <br/>
                Quantity: <input type='text' name='quantity' value={product.quantity} onChange={change} /><br/>
                Price: <input type='text' name='price' value={product.price} onChange={change} /><br/> 
                <input type='submit' value={status==='add'?'Add':'Edit '}/>
            </form>
        </>
    );
}

export default CreateUser;