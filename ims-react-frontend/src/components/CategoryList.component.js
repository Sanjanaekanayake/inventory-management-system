import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import CategoryService from '../services/CategoryService'
import AuthService from "../services/auth.service";
import {Table} from "react-bootstrap";


class CategoryList extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            categories:[],
            currentUser: undefined,
       }
        this.addCategory = this.addCategory.bind(this);
        this.updateCategory = this.updateCategory.bind(this);
        this.deleteCategory = this.deleteCategory.bind(this);

   }
   addCategory()
   {
     this.props.history.push('/addcategory');    
    
   }

   updateCategory(id){
      this.props.history.push(`/updatecategory/${id}`);

   }


   deleteCategory(id){
    CategoryService.deleteCategory(id).then( res => {
        this.setState({categories: this.state.categories.filter(category => category.id !== id)});
    });
    }

   componentDidMount(){
       CategoryService.getCategories().then((res)=>{
           this.setState({categories:res.data});
          
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
            <div >
                <h2 className="text-center">Category List</h2>
                {currentUser === 'admin' ? (<div>
                    <button className="btn btn-primary" onClick={this.addCategory.bind(this)}> Add Category</button>
                 </div>):null}
                 
                 <br></br>
                
                <div className ="row">
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                            <th> Category Id</th>
                            <th> Category Name</th>						
                            <th> Available Quantity</th>
                            <th> Status</th>
                            {currentUser === 'admin' ? (
                                <th> Actions</th>
                            ):null}
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.categories.map(
                                category =>
                                <tr key = {category.id}>
                                    <td>{category.id}</td>
                                    <td><Link   to={{
                                                pathname: `/categories/products/${category.id}`,
                                                state: { category },
                                            }}>{category.category_name}</Link></td>
                                    <td>{category.quantity}</td>                                
                                    <td>{category.status ? "Available" : "Sold out"}</td>
                                    {currentUser === 'admin' ? (
                                        <td><button style={{marginLeft: "10px"}} onClick = {() => this.updateCategory(category.id) } className="btn btn-info">Update</button>
                                        <button style={{marginLeft: "10px"}} onClick = {() => { if (window.confirm('Are you sure you wish to delete this category?')) this.deleteCategory(category.id) } } className="btn btn-info">Delete</button></td>

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

export default CategoryList;