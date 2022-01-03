import React, { Component } from 'react';
import CategoryService from '../services/CategoryService';
import AuthService from "../services/auth.service";
import {Table} from "react-bootstrap";

class ProductList extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            id: this.props.match.params.id,
            products:[],
            currentUser: undefined
       }
        // this.addProducts = this.addProducts.bind(this);
        this.updateProduct = this.updateProduct.bind(this);
        // this.deleteCategory = this.deleteCategory.bind(this);

   }
   addProducts()
   {
     this.props.history.push(`/addproducts/${this.state.id}`);    
    
   }

   updateProduct(id){
      this.props.history.push(`/updateproduct/${id}`);

   }

   deleteProduct(id){
    CategoryService.deleteProduct(id).then( res => {
        this.setState({products: this.state.products.filter(product => product.id !== id)});
    });
    }

   componentDidMount(){
       CategoryService.getProducts(this.state.id).then((res)=>{
           this.setState({products:res.data});
          
       })
       const user = AuthService.getCurrentUser();
       if (user) {
        this.setState({
          currentUser: user.username,
          
        });
        
      }
   }  
   
    
    render() {
        const { currentUser} = this.state;
        return (
            <div>
                <h2 className="text-center">Product List</h2>
                {currentUser === 'admin' ? (<div>
                    <button className="btn btn-primary" onClick={this.addProducts.bind(this)}> Add Product</button>
                 </div>):null}
                 
                 <br></br>
                
                <div className ="row">
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                            <th> Product Id</th>
                            <th> Product Name</th>					                           
                            <th> Price</th>
                            <th> Available Quantity</th>
                            {currentUser === 'admin' ? (
                                <th> Actions</th>
                            ):null}
                            
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.products.map(
                                product =>
                                <tr key = {product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td> 
                                    {currentUser === 'admin' ? (                              
                                    <td><button style={{marginLeft: "10px"}} onClick = {() => this.updateProduct(product.id) } className="btn btn-info">Update</button>
                                    <button style={{marginLeft: "10px"}} onClick = {() => { if (window.confirm('Are you sure you wish to delete this product?')) this.deleteProduct(product.id) } } className="btn btn-info">Delete</button></td>
                                    ):null}
                                </tr>
                               
                            )}                    
                            
                            
                        </tbody>
                    </Table>
                </div>
                
            </div>
        )
    }
}

export default ProductList;