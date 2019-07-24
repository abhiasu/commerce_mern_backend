import React, { Component } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import {getCartItems} from '../../../redux/action';

class CartSummaryComponent extends Component {
    
    constructor(props){
        super(props);
        if(!this.props.accessToken)
        {
            this.props.history.push("/beverage");
            window.location.reload();
        }

        //console.log("constructor funcion");

        //console.log("Cart Summary funcion",this.props.cartSummary);

        if(Object.keys(this.props.cartSummary).length > 0){

            
                let cartDetails=this.props.cartSummary;

                let OrderId;
            const orderIdarray= cartDetails['links'];
            orderIdarray.map((items,i)=>{
               if(items['rel']==="order"){
                OrderId=items['uri'].split('/');
                OrderId=OrderId[3];
               }
            });
                //console.log("cartDetails",cartDetails);
                 let displayItemsArr = [];
                 let lineItemsProduct = [];
                 let addOnsProduct = [];
                let rootArr = cartDetails['_lineitems'][0]['_element'];
                  //console.log("qty",this.props.qty);
                let totalPrice = cartDetails['_total'][0]['cost'][0]['amount'];
                 for(let obj of rootArr)
                 {
                      if(obj["_dependentlineitems"]){
                          let prdName = obj['_item'][0]['_definition'][0]['display-name']; 
                          let disNameArr = obj['_dependentlineitems'][0]['_element'];
                          let disName = '';
                          let prdPrice = obj['_total'][0]['cost'][0]['amount'];
                          prdPrice = parseFloat(prdPrice);
                          let imgDetailsArr = obj['_item'][0]['_definition'][0]['details'];
                          let prdImg = '';
                          for(let imgVal of imgDetailsArr){
                              if(imgVal['display-name']=== "Product Image"){
                                prdImg =  imgVal['display-value'];
                              }
                          }
                          for(let obj1 of disNameArr){
                            let subcatArr = obj1['_dependentlineitems'][0]['_element'];
                            for(let obj2 of subcatArr){
                                if(obj2['_dependentlineitems']){
                                    let displaydetaisArr = obj2['_dependentlineitems'][0]['_element'][0]['_item'][0]['_definition'][0]['details'];
                                    for(let val of displaydetaisArr){
                                        if(val['display-name'] === "Display Name"){
                                            disName += val['display-value'] + ',';
                                        }
                                       
                                    }
                                    //console.log(subCatName);
                                }
                                else{
                                    let displaydetaisArr = obj2['_item'][0]['_definition'][0]['details'];
                                    //console.log("displaydetaisArr",displaydetaisArr);
                                    for(let val of displaydetaisArr){
                                        if(val['display-name'] === "Display Name"){
                                            disName += val['display-value'] + ',';
                                        }
                                       
                                    }                   
                                 }
                            }
                          }

                         
                          disName = disName.toString();
                          disName = disName.substr(0, disName.length-1)
                          //console.log("disName",disName);
                          //disName = disName.substring(0, disName.length() - 1);

                          let basePrice = parseFloat(prdPrice)/parseInt(this.props.qty);
                          displayItemsArr.push({"name":prdName,"desc":disName,"price":basePrice,"total":prdPrice,url:prdImg,"qty":parseInt(this.props.qty)});
                           
                      }
                      else {
                            let prdName = obj['_item'][0]['_definition'][0]['display-name'];
                            let detailsArr = obj['_item'][0]['_definition'][0]['details'];
                            let prdPrice = obj['_total'][0]['cost'][0]['amount'];
                                prdPrice = parseFloat(prdPrice);
                            let imgUrl;
                            for(let val of detailsArr){
                                if(val['display-name'] === "skuImage"){
                                    imgUrl = val['display-value'];
                                }
                            }

                            displayItemsArr.push({"name":prdName,"desc":'',"price":prdPrice,"total":prdPrice,url:imgUrl,"qty":1});

                      }
                 }

                 this.state={
                     displayArr:displayItemsArr,
                     totalCost:totalPrice,
                     OrderId:OrderId
                 }
        }
    }

    onMinusHandler = (i,qty,price) =>{
        console.log(qty);
        if(!(qty<=1)){
            let itemArr = this.state.displayArr;
            let newQty = qty - 1;
            let total = 0;
            itemArr[i]['total'] = parseFloat(price) * parseInt(newQty);
            itemArr[i]['qty'] = parseInt(newQty);
            for(let obj of itemArr){
                console.log(parseFloat(obj['total']));
                total += parseFloat(obj['total']);   
            }
            console.log("total",total);
            this.setState({"displayArr":itemArr,"totalCost":total});
        }
    }

    onPlusHandler = (i,qty,price) =>{
        //console.log(qty);
        let itemArr = this.state.displayArr;
        let newQty = qty + 1;
        let total = 0;
        itemArr[i]['total'] = parseFloat(parseFloat(price) * parseInt(newQty));
        itemArr[i]['qty'] = parseInt(newQty);
        for(let obj of itemArr){
            console.log(parseFloat(obj['total']));
            total +=  parseFloat(obj['total']);   
        }
        console.log("total",total);
        this.setState({"displayArr":itemArr,"totalCost":total});
    }
  
    onCheckout=()=>{
        this.props.getCartItems(this.state);
        setTimeout(()=>this.props.history.push("/orderreview"),500);
    }

    render() { 
        let productItems;
        let totalLength = 0;
        if(this.state.displayArr.length > 0){
            totalLength = this.state.displayArr.length;
            productItems = this.state.displayArr.map((item,index)=>{

                return <div className="shopping-bag-list" key={index}><div className="row"><div className="col-lg-6"><div className="product-list-image"><img height="100" src={item['url']} alt=""/><span>{item['name']}</span></div><div className="shopping-bag-bag shopping-bag-bag-first">{item['desc']}</div></div><div className="col-lg-6 align-right"><p className="instock-product"><i className="fas fa-check"/>In Stock</p><p className="shopping-price">${parseFloat(this.state.displayArr[index]['total']).toFixed(2)}</p><div className="increase-desrease"><a href="javascript: void(0)" onClick={this.onMinusHandler.bind(this,index,item['qty'],item['price'])}>-</a><span>{this.state.displayArr[index]['qty']}</span><a href="javascript: void(0)" onClick={this.onPlusHandler.bind(this,index,item['qty'],item['price'])}>+</a></div></div></div></div>;

            });

        }

     return  (<div className="shopping-bag">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="shopping-bag-con">
                        <h2>Your Shopping Bag ({totalLength}) items</h2>
                        <hr/>
                        {productItems}
                        </div>
                    <div className="shopping-bag-con-bottom">
                      
                        <p className="sub"><div className="left-col">Total:</div> <div className="right-col">${parseFloat(this.state.totalCost).toFixed(2)}</div></p>
                       
                        <a  className="proceed-checkout" onClick={() => this.onCheckout()}>Proceed to Checkout</a>
                    </div>
                </div>
            </div>
        </div>
    </div> );
    
    }
}

const mapStateToProps=(state)=>{
    //console.log("31May",state);
    return{
        
        accessToken:state.accessToken,
        cartSummary:state.cartSummary,
        qty:state.qty
    }
  }
 
export default connect(mapStateToProps,{getCartItems})(CartSummaryComponent);