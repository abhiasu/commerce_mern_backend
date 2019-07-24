import React, { Component } from 'react';
import { Link, NavLink, withRouter } from "react-router-dom";
import logo from '../assests/logo.png';
import { connect } from "react-redux";
import {searchProducts} from "../redux/action";
class HeaderComponent extends Component {
    constructor(props){
        super(props);

        // this.state={
        //     searchStatus:false
        // }
        this.state.searchStatus=false

    }
    state = {
        searchText: ""
    }
    searchEvent = () => {
        if (this.state.searchText.length > 0) {
              this.props.searchProducts(this.props.accessToken,this.state.searchText);
            this.setState({"searchStatus":true});
    }
    }

    searchResult = ({ currentTarget: input }) => {
        this.setState({ searchText: input.value });
    };

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.productSearchDetails){
            if(prevState.searchStatus){
                nextProps.history.push("/browse");
                 prevState.searchStatus = false;
                 return null;
            }else{
                return null;
            }           
        }
    }
    render() { 
        return ( 
        <React.Fragment>
        <header className="main-header">
            <div  className="header-container-top">
                <div  className="container">
                    <div  className="row">
                        <div  className="col-lg-5">
                            <div  className="logo">
                                <a>
                                    <img src={logo}  alt=""/>
                                </a>
                            </div>
                        </div>
                        <div  className="col-lg-7">
                            <div  className="header-top-section">
                                
                                <div  className="header-links">
                                    <ul>
                                        <li><a >Shipping & Returns</a></li>
                                        <li><a >Helps</a></li>
                                        <li><a >Contact</a></li>
                                        <li><a className="search-container">
                                            
                                                <input type="text" id="searchText" value={this.state.searchText} placeholder="Search.." name="searchText" onChange={this.searchResult} />
                                                <button type="submit" ><i className="fa fa-search" onClick={() => this.searchEvent() }></i></button>
                                            
                                        </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div  className="header-bottom-container">
                <div  className="container">
                    <div  className="row">
                        <div  className="col-lg-10">
                            <nav  className="navbar navbar-expand-lg">
                                <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                              <span  className="navbar-toggler-icon"></span>
                            </button>
                                <div  className="collapse navbar-collapse" id="navbarNav">
                                    <ul  className="navbar-nav">
                                        
                                        <li  className="nav-item">
                                        <NavLink className="nav-link" to="/beverage">
                                              Beverages <span className="sr-only">(current)</span>
                                        </NavLink>
                                        </li>
                                        
                                       
                                        <li  className="nav-item">
                                        <NavLink className="nav-link" to="/hoagies">
                                             Hoagies and sandwiches
                                        </NavLink>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div  className="col-lg-2">
                            <div  className="search-account-card">
                                <a href="javascript: void(0)"  className="search"><i  className="fas fa-search"></i></a>
                                <a href="javascript: void(0)"  className="account"><i  className="fas fa-user-circle"></i></a>
                                <a href="javascript: void(0)"  className="cart"><i  className="fas fa-shopping-bag"></i><span  className="item-count">0</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </header>
        </React.Fragment>
      );
    }
}
 
const mapStateToProps = (state) => {
    return {
        productSearchDetails: state.productSearchedData,
         accessToken: state.accessToken
        
    }
}
export default connect(mapStateToProps,{searchProducts})(withRouter(HeaderComponent));