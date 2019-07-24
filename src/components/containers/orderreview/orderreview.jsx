import React, { Component } from 'react';
import EmailFormComponent from './emailForm';
import PaymentFormComponent from './paymentForm';
import AddressFormComponent from './addressForm';
import { connect } from "react-redux";
import {getCheckoutSubmit} from '../../../redux/action';

class OrderReviewComponent extends Component {
   
    constructor(props){
        super(props);
            if(!this.props.accessToken)
            {
                this.props.history.push("/beverage");
                window.location.reload();
            }
            this.state={
                status:false
            }
    
    }

    static getDerivedStateFromProps(nextProps, prevState){

        if(Object.keys(nextProps.submitOrder).length > 0){
            nextProps.history.push("/thankyou");

        }

    }



    onSubmitReview=()=>{
        this.props.getCheckoutSubmit(this.props.accessToken,this.props.cartItems.OrderId);
        this.setState({"status":true});
        
    }

    render() { 

        let productItems;
        let totalLength = 0;
        if(this.props.cartItems.displayArr.length > 0){
            totalLength = this.props.cartItems.displayArr.length;
            productItems = this.props.cartItems.displayArr.map((item,index)=>{

                return <div className="shopping-bag-list" key={index}><div className="row"><div className="col-lg-6"><div className="product-list-image"><img height="100" src={item['url']} alt=""/><span>{item['name']}</span></div><div className="shopping-bag-bag shopping-bag-bag-first">{item['desc']}</div></div><div className="col-lg-6 align-right"><p className="instock-product"><i className="fas fa-check"/>In Stock</p><p className="shopping-price">${parseFloat(this.props.cartItems.displayArr[index]['total']).toFixed(2)}</p><div className="increase-desrease"><span>{this.props.cartItems.displayArr[index]['qty']}</span></div></div></div></div>;

            });

        }

        return ( <div className="shopping-bag">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="shopping-bag-con">
                        <h2>Your Shopping Bag ({this.props.cartItems.displayArr.length}) items</h2>
                        <hr/>
                        {productItems}
                        <AddressFormComponent />
                        <hr/>
                        <EmailFormComponent />
                        <hr/>
                        <PaymentFormComponent />
                        <hr/>
                        
                        </div>
                        
                    <div className="shopping-bag-con-bottom">
                        
                      {/* <a href="javascript: void(0)" className="add-pramotion">Add Promotion</a> */}
                        <p className="sub"><div className="left-col">Total:</div> <div className="right-col">{this.props.cartItems.totalCost }</div></p>
                        {/*<p className="sub">Subtotal: $0.00</p>*/}
                        <a  className="proceed-checkout" onClick={() => this.onSubmitReview()}>Submit Order</a>
                    </div>
                </div>
            </div>
        </div>
    </div>  );
    }
}

const mapStateToProps=(state)=>{
    //console.log("31May",state);
    return{
        
        accessToken:state.accessToken,
        cartItems:state.cartItems,
        submitOrder:state.submitOrder
        
    }
  }
 
export default connect(mapStateToProps,{getCheckoutSubmit})(OrderReviewComponent);