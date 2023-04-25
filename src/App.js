import './App.css';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import {
  Switch,
  Route, Routes
} from "react-router-dom";
import Products from './Products';
import Users from './Users';
import CreateUser from './CreateUser';
import Edituser from './EditUser';
// import { UserProvider } from './UsersContext';
// import { ProductProvider } from './ProductsContext';
import CreateProducts from './CreateProducts';
import Editproducts from './Editproducts';
import { UserProvider } from './UsersContext';


function App() {
  return (

    <div className="App wrapper">
      <Sidebar />
      <div className="content-wrapper d-flex flex-column">
        <div className="content">
          <Topbar />
          
{/* <Switch> */}
<Routes>
            <Route path="/users" element={ <Users/>} >
            </Route>
            <Route path="/products" element={ <Products/>} >
             </Route>
<Route path='/' element={<Dashboard/>} ></Route>
<Route path='/createuser' element={<CreateUser/>} ></Route>
 <Route path='/createproducts' element={<CreateProducts/>}>
</Route>

<>
  <Route path='/users/edit/:id' element={<Edituser/>} ></Route>
<Route path='/products/edit/:id' element={<Editproducts/>}>
</Route>
</>
</Routes>
 {/* </Switch> */}


           

       
        </div>
      </div>
    </div>
  );
}

export default App;