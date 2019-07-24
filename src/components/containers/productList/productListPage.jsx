import React, { Component } from 'react';
import { connect } from "react-redux";
import ProductComponent from "../product/product";

class ProductListPageComponent extends Component {

    render() { 
        console.log(this.props.products)
        return ( <div className="container">
            {this.props.products ? (this.props.products.map((item,i)=>{
               return <ProductComponent 
                    key={i}
                    imgsrc={item.src}
                    details={item.name}
                    skuid={item.skuId}
                    token={this.props.accessToken}/>
            })):null}
           
            
           </div> );
    }
}

const mapStateToProps=(state)=>{
    return{
        accessToken:state.accessToken,
        products: state.productsArr
    }
}
 
export default connect(mapStateToProps,null)(ProductListPageComponent);