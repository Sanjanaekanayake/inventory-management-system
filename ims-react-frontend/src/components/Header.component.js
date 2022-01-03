import React, { Component } from 'react'
import AuthService from "../services/auth.service";
import { Link } from 'react-router-dom'

export default class Header extends Component {
 
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
    
        this.state = {
          currentUser: undefined,
        };
      }

    componentDidMount() {
        const user = AuthService.getCurrentUser();
    
        if (user) {
          this.setState({
            currentUser: user,
            
          });
        }
    }

    logOut() {
        AuthService.logout();
      }
    
    render() {
        const { currentUser} = this.state;
        return (
            <div>
                <header>
                    {/* <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://localhost:3000/categories" className="navbar-brand">Inventory Management System</a></div>
                    </nav> */}
                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                    
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                        <Link to={"/home"} className="nav-link">Home</Link>
                        </li>
                        
                        {/* {currentUser && (
                        <li className="nav-item">
                            <Link to={"/user"} className="nav-link">User</Link>
                        </li>
                        )} */}
                    </div>

                    {currentUser ? (
                        <div className="navbar-nav ml-auto">
                           
                        <li className="nav-item">
                            <Link to={"/categories"} className="nav-link">
                            Category List
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/profile"} className="nav-link">
                            {currentUser.username}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href="/login" className="nav-link" onClick={this.logOut}>
                            LogOut
                            </a>
                        </li>
                        </div>
                    ) : (
                        <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to={"/login"} className="nav-link">
                            Login
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to={"/register"} className="nav-link">
                            Sign Up
                            </Link>
                        </li>
                        </div>
                    )}
                    </nav>

                </header>
                
            </div>
        )
    }
}
