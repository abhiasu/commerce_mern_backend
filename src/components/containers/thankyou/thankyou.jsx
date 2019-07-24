import React, { Component } from 'react';
import { connect } from "react-redux";

class ThankyouComponent extends Component {

    // static getDerivedStateFromProps(nextProps, prevState){ 

    //     if(nextProps.submitOrder){
    //         //console.log("props",nextProps.submitOrder.purchase-number);
    //     }
    // }
    
    render() {
            let status = '';
            if(this.props.submitOrder.status){
                var strArr = (this.props.submitOrder.status).toString().split("_");
                status = strArr[0] +' '+  strArr[1] ;      
              }


        return ( <div className="thankuPage">
            <div className="container">
            <p>Thank You .... Your order has been successfully placed</p>
            <p>Your Order Id is :{this.props.submitOrder['purchase-number']}</p>
            <p>Status of your Order is : {status}</p>
            </div></div> );
    }
}

const mapStateToProps=(state)=>{
    //console.log("31May",state);
    return{
        
        accessToken:state.accessToken,
        submitOrder:state.submitOrder
        
    }
  }
 
export default connect(mapStateToProps,null)(ThankyouComponent);