
import './App.css';
import { Switch, Route } from 'react-router-dom'
import CategoryList from './components/CategoryList.component';
import HeaderComponent from './components/Header.component';
import FooterComponent from './components/Footer.component';
import AddCategory from './components/AddCategory.component';
import UpdateCategory from './components/UpdateCategory.component';
import ProductList from './components/ProductList.component';
import AddProduct from './components/AddProduct.component';
import updateProduct from './components/updateProduct.component';

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import background from "./img/bg8.jpg";

function App() {
  
  return (
    <div style={{ 
      backgroundImage: `url("${background}")`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: '100vw',
      height: '100vh'
      
    }}>
           
        <HeaderComponent />
          <div className="container">
              <Switch> 
                  <Route exact path={["/", "/home"]} component={Home} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/profile" component={Profile} />
                  {/* <Route path = "/" exact  component={CategoryList}></Route>   */}
                  <Route path = "/categories" exact component={CategoryList}></Route>
                  <Route path = "/addcategory" exact component={AddCategory}></Route> 
                  <Route path = "/updatecategory/:id" exact component={UpdateCategory}></Route> 
                  <Route path = "/categories/products/:id" exact component={ProductList}></Route>
                  <Route path = "/addproducts/:id" exact component={AddProduct}></Route>
                  <Route path = "/updateproduct/:id" exact component={updateProduct}></Route>                    
              </Switch>
          </div>
          <div ><FooterComponent /></div>
              
      
    </div>
  );
}

export default App;
