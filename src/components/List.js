import User from './User';
import Product from './Product';

const List = ({type, list, deleteCallback})=>{
   
    return (
        <div>
            <h1>All User List</h1>
            {
                list.map((u)=>{
                    {
                        if(type==='1'){
                            return  <User key={u.id} {...u} callback={deleteCallback}/>
                        }
                        else{
                            return  <Product key={u.id} {...u} callback={deleteCallback}/>
                        }
                    }
                   
                })
            }
        </div>
    );
}

export default List;