import React, { Component } from 'react';
import{Link, withRouter, }from "react-router-dom";
import { connect } from "react-redux";
import {getProductsHoagies,resetProducts} from "../../../redux/action";

class HoagiesProductComponent extends Component {

    constructor(props){
        super(props);

        this.state={
            status:false
        }
this.props.resetProducts();
    }

    static getDerivedStateFromProps(nextProps, prevState){
        //console.log("nextProps",nextProps);
        if(Object.keys(nextProps.productDetails).length > 0){
            //console.log("status",prevState.status)
            if(prevState.status){
                nextProps.history.push(`/hoagiesdetailpage/${nextProps.skuid}`);
                prevState.status = false;
            }else{
                return null;
            }

        }else{
            return null
        }

    }
    
    onClickProduct = (id,image) =>{
        this.props.getProductsHoagies(this.props.token,id);
        sessionStorage.setItem("prodImageUrl",image);
        this.setState({"status":true});
        // setTimeout(()=>{
        //     this.props.history.push(`/hoagiesdetailpage/${id}`);
        // },1000);
        
    }

    render() { 
        return (<div className="productWrapper" onClick={()=>this.onClickProduct(this.props.skuid,this.props.imgsrc)}>
            <div className="productImage">
            <img src={this.props.imgsrc} alt=""/>
            </div>
            <p className="product-name">{this.props.details}</p>
            <p className="instock-product"><i className="fas fa-check"></i> In Stock</p> 
        </div> );
    }
}

const mapStateToProps=(state)=>{
    //console.log("31May",state);
    return{
       productDetails:state.productDetails
    }
  }
 
export default connect(mapStateToProps,{getProductsHoagies,resetProducts})(withRouter(HoagiesProductComponent));