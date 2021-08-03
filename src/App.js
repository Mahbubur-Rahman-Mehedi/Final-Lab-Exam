import List from './components/List';
import {users} from './usersData';
import {products} from './productdata';
import {useState, useEffect} from 'react';
import CreateUser from './components/CreateUser';
import AddProduct from './components/AddProduct';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  const [userlist, setUserList] = useState(users);
  const [productlist, setProductList] = useState(products);
  

  // useEffect(()=>{
  //   getData(url).then(data=>setUserList(data));
  //   //getData(url);
  // },[]);
  const deleteuser = (id)=>{
    const list = userlist.filter((user)=>user.id !== id);
    setUserList(list);
  }

  const deleteproduct = (id)=>{
    const list = productlist.filter((product)=>product.id !== id);
    setProductList(list);
  }

  // const createnewUser = (newUser)=>{
  //   userlist.push(newUser);
  // }

  const createnewUser = (user)=>{
    setUserList([...userlist, user]);
    }

    const createnewProduct = (product)=>{
      setProductList([...productlist, product]);
      }
  
  const catchUser = (id)=>{
    userlist.forEach(u => {
      if(u.id === id ){
        console.log(u);
        return u;
      }
    });
  }

  const updateuser = (id,newUser)=>{
    
    const list = userlist.filter((user)=>user.id !== id);

    setUserList([...list, newUser]);
  }

  const updateproduct = (id,newproduct)=>{
    
    const list = productlist.filter((product)=>product.id !== id);

    setProductList([...list, newproduct]);
  }
  const type='1'; // 0 for employee 1 for admin

  return (
   
    <Router>
      <Navbar type={type}/>
      <Switch>
          <Route exact path='/'> 
              <h1>Welcome Home!</h1>
          </Route>
          <Route path='/list'>
            <div>
                <List type={type} list={type==='1'?userlist:productlist} deleteCallback={type==='1'?deleteuser:deleteproduct}/>
            </div>
          </Route>
          <Route path='/register'>
              <CreateUser status={'add'} addNewUser={createnewUser}/>
          </Route>
          <Route path='/addNewProduct'>
              <AddProduct status={'add'} addNewproduct={createnewProduct}/>
          </Route>
          
          <Route path='/update/:id' children={<CreateUser status={'edit'} updatecallback={updateuser}/>}>   
          </Route>

          <Route path='/edit/:id' children={<AddProduct status={'edit'} updatecallback={updateproduct}/>}>   
          </Route>

          <Route path='*'>
              404 not found
          </Route>          
      </Switch>
  </Router>
  );
}


// <Route path='/edit/' children={<h1>Edit form</h1>}></Route>

export default App;
