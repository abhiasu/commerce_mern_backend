import React, { Component } from 'react';
import { connect } from "react-redux";
import HoagiesProductComponent from "./hoagiesProduct";
import {fetchAccesstoken} from '../../../redux/action';

class HoagiesComponent extends Component {
   
    constructor(props)
    {
        super(props);
        if(!this.props.accessToken)
        {
            this.props.fetchAccesstoken();
            //window.location.reload();
        }
    }
    render() { 
        console.log(this.props.products);
        return ( <div className="container">
        {this.props.products ? (this.props.products.map((item,i)=>{
           return <HoagiesProductComponent 
                key={i}
                imgsrc={item.src}
                details={item.name}
                skuid={item.skuId}
                token={this.props.accessToken}/>
        })):null}
       
        
       </div>);
    }
}

const mapStateToProps=(state)=>{
    return{
        accessToken:state.accessToken,
        products: state.productsArrHoagies
    }
}
 
export default connect(mapStateToProps,{fetchAccesstoken})(HoagiesComponent);