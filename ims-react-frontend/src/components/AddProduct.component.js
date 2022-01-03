import React, { Component } from 'react';
import CategoryService from '../services/CategoryService';

export default class AddProduct extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            category_id: this.props.match.params.id,
            name:'',
            price:'',
            quantity:'',
            
     
        }
        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.changeQuantityHandler = this.changeQuantityHandler.bind(this);
        this.saveProduct = this.saveProduct.bind(this);
    }

    changeProductNameHandler(event){
        this.setState({name: event.target.value});
    }

    changePriceHandler(event){
        this.setState({price: event.target.value});
    }

    changeQuantityHandler(event){
        this.setState({quantity: event.target.value});
    }    

    saveProduct = (e) => {
        e.preventDefault();
        let product = {
            name: this.state.name,
            price: this.state.price,
            quantity: this.state.quantity
            
         };
        // console.log('product => ' + JSON.stringify(product));  
        
        // let category_id = this.state.category_id;
        
        CategoryService.createProduct(product,this.state.category_id).then(res =>{
            this.props.history.push(`/categories/products/${this.state.category_id}`);
           
        });
    }

        cancel(){
        this.props.history.push(`/categories/products/${this.state.category_id}`);
    }
    
    
    render() {
        return (
            <div>
            <br></br>
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h1>Add Product</h1>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Product Name: </label>
                                        <input placeholder="Product Name" name="name" className="form-control" 
                                            value={this.state.name} onChange={this.changeProductNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Price: </label>
                                        <input placeholder="Price" name="price" className="form-control" 
                                            value={this.state.price} onChange={this.changePriceHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Quantity: </label>
                                        <input placeholder="Quantity" name="quantity" className="form-control" 
                                            value={this.state.quantity} onChange={this.changeQuantityHandler}/>
                                    </div>
                                    
                                

                                    <button className="btn btn-success" onClick={this.saveProduct}>Save</button>
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
