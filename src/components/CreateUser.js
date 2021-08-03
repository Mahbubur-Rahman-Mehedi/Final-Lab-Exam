import { useParams } from "react-router";
import { useState } from "react";
import { useHistory } from "react-router";
import React from 'react';

const CreateUser = ({status, addNewUser, updatecallback})=>{
    const {id:eid} = useParams();
    //const eu = catchUser(eid);
    //console.log(eu);
    const [user, setUser] = useState({id:'',name: '', contact_no:'', userName:'',password:''});
    //const [user, setUser] = useState(eu);
    const history = useHistory();

    const change = (e)=>{
        const attr = e.target.name;
        const val = e.target.value;
        setUser({...user, [attr]: val})
    };

    const onsubmit = (e)=>{
        e.preventDefault();
        console.log(user);
        if(status==='add'){
            addNewUser(user);
        }
        else if (status==='edit') {
            updatecallback(eid, user);
        }
        history.push('/list');
    }

    return(
        <>
            <br/>
            <h3>{status==='add'?'Register New ':'Update '} Employee</h3>
            <form onSubmit={onsubmit}>
                Name: <input type='text' name='name' value={user.name} onChange={change} /> <br/>
                ID: <input type='text' name='id' value={user.id} onChange={change} /> <br/>
                Contact No: <input type='text' name='contact_no' value={user.contact_no} onChange={change} /><br/>
                User Name: <input type='text' name='userName' value={user.userName} onChange={change} /><br/>
                Password: <input type='text' name='password' value={user.password} onChange={change} /><br/>
                <input type='submit' value={status==='add'?'Create':'Update'}/>
            </form>
        </>
    );
}

export default CreateUser;