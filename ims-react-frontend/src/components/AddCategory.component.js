import React, { Component } from 'react';
import CategoryService from '../services/CategoryService';

export default class AddCategory extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
           
            category_name:'',
            quantity:'',
            status:false
     
        }
        this.changeCategoryNameHandler = this.changeCategoryNameHandler.bind(this);
        this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.saveCategory = this.saveCategory.bind(this);
    }

        changeCategoryNameHandler(event){
        this.setState({category_name: event.target.value});
    }

    changeQuantityHandler(event){
        this.setState({quantity: event.target.value});
    }

    changeStatusHandler(event){
        this.setState({status: event.target.value});
    }

    saveCategory = (e) => {
        e.preventDefault();
        let category = {
            category_name: this.state.category_name,
            quantity: this.state.quantity,
            status: this.state.status
         };
        console.log('category => ' + JSON.stringify(category));      
        
        CategoryService.createCategory(category).then(res =>{
            this.props.history.push('/categories');
           
        });
    }

        cancel(){
        this.props.history.push('/categories');
    }
    
    
    render() {
        return (
            <div>
            <br></br>
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h1>Add Category</h1>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Category Name: </label>
                                        <input placeholder="Category Name" name="category_name" className="form-control" 
                                            value={this.state.category_name} onChange={this.changeCategoryNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Quantity: </label>
                                        <input placeholder="Quantity" name="quantity" className="form-control" 
                                            value={this.state.quantity} onChange={this.changeQuantityHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Status: </label>
                                        <input placeholder="Status" name="status" className="form-control" 
                                            value={this.state.status} onChange={this.changeStatusHandler}/>
                                    </div>
                                

                                    <button className="btn btn-success" onClick={this.saveCategory}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

               </div>
        </div>
        )
    }
}
