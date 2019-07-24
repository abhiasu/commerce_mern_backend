import React, { Component } from 'react';
import{withRouter }from "react-router-dom";
import { connect } from "react-redux";
import fb from '../../../assests/fb.png';
import twitter from '../../../assests/twitter.png';
import pin from '../../../assests/pin.png';
import mail from '../../../assests/mail.png';

import {getAddBundleHogies,getAddBundleAddOns,getViewCart} from '../../../redux/action';

class HoagiesDetailPageComponent extends Component {
    
    constructor(props)
{
    super(props);
    if(!this.props.accessToken)
    {
        this.props.history.push("/beverage");
        window.location.reload();
    }

    if(this.props.productDetails){
        
        const prdDetails = this.props.productDetails;
        var Prductbeverage=false;
        if(prdDetails['_recommendations']== undefined){
            var Prductbeverage=true;
        }
        const product_recommendations =  prdDetails['_recommendations']!= undefined ? prdDetails['_recommendations'][0]['_accessory'][0]['_element'] : prdDetails['_definition'][0]['_components'][0]['_element'][0]['_standaloneitem'][0]['_recommendations'][0]['_accessory'][0]['_element'];

        const prdComponentElement = prdDetails['_definition'][0]['_components'][0]['_element'];
        const componentElement  = prdComponentElement.filter((item,i)=>{
            if(item['_components'] != undefined){
                return item;
            }  
        });
        const standloneEle = prdComponentElement.filter((item,i)=>{
            if(item['_components'] == undefined){
                return item;
            }  
        });
       
        let basePrice = 0;
         for(let item of standloneEle){
            basePrice += parseFloat(item['_standaloneitem'][0]['_price'][0]['purchase-price'][0]['amount']);
         }
            

        const proproductNameductName = prdDetails['_definition'][0]['display-name'];
        
         let initialPrice = 0;
         let indexArr=[];
        componentElement.map((item,ind)=>{
            let elementArr = item['_components'][0]['_element'];
            elementArr.map((obj,i)=>{
                if(i==0){  
                    if(obj['_components'] != undefined){
                        let subIndexes = [];
                        obj['_components'][0]['_element'].map((obje,k) =>{
                            let leist_price = parseFloat(obje['_standaloneitem'][0]['_price'][0]['purchase-price'][0]['amount']) || 0;
                            subIndexes[k] = {inde:ind+''+k+''+i,price:leist_price};
                            initialPrice += leist_price;    
                        });
                        indexArr.push(subIndexes);    
                    }
                    else {
                        let leist_price = parseFloat(obj['_standaloneitem'][0]['_price'][0]['purchase-price'][0]['amount']);
                        indexArr.push({inde:ind+''+i,price:leist_price});    
                        // console.log(obj['_standaloneitem'][0]['_price'][0]['purchase-price'][0]['amount']);
                        initialPrice += leist_price;
                    }
                }
                
            }); 
        });
        //console.log(indexArr);


        let bnlUrl='';
                prdDetails['links'].map(item =>{

                    if(item.rel == 'addtocartform'){
                        bnlUrl=item.href;
                    }

        });
        //console.log("bnlUrl",bnlUrl);
       let total = basePrice + initialPrice;


        this.state = {
           recom:product_recommendations,
           qty:1,
           price: basePrice,
           prdComponet:componentElement,
           
           totalPrice:total,
           indexarr:indexArr,
           addOnPrice:0,
           isChecked:false,
           bundleUrl:bnlUrl,
           reacommendUrl:{},
           status:false,
           Prductbeverage:Prductbeverage
      }
     }
    
}

static getDerivedStateFromProps(nextProps, prevState){
   
    if(Object.keys(nextProps.hogieBandelArr).length >1){
        if(prevState.status){
        let selectedItemUrlArr = [];
        let subCatItemUrlArr = []
        let rootArr = nextProps.hogieBandelArr['_dependentlineitems'][0]['_element'];
        //console.log("prevState->indexarr",prevState.indexarr);
        
        
        let index = 0;
        for(let obj of rootArr){
            if(obj["_dependentoptions"]){
                let getIndex =   prevState.indexarr[index]["inde"];
                let fristIndex = parseInt(getIndex[0]);
                let secondIndex = parseInt(getIndex[1]);
                let Url = rootArr[fristIndex]['_dependentoptions'][0]["_element"][secondIndex]["_code"][0]['_item'][0]['_addtocartform'][0]['links'][0]['href'];
                selectedItemUrlArr.push(Url);
            }else if(obj['_dependentlineitems']){
                var dependLineIndex;
                var dependLineArr = obj['_dependentlineitems'][0]['_element'];
                for(let obj of prevState.indexarr){
                    if(obj.length == 2){
                        dependLineIndex = obj;
                    }
                }
                let ind = 0;
                for(let obj of dependLineArr){
                    let indArr  = dependLineIndex[ind]['inde'];
                    let fstIndex = indArr[0];
                    let secondIndex = indArr[1];
                    let thirdIndex = indArr[2];
                    console.log("fstIndex"+fstIndex +' '+"secondIndex"+secondIndex +' '+ "thirdIndex" +thirdIndex);
                   
                 let url =  dependLineArr[secondIndex]['_dependentoptions'][0]['_element'][thirdIndex]['_addtocartform'][0]['links'][0]['href']; 
                 subCatItemUrlArr.push(url);   
                 ind++;
                }
            }
           index++;
        }
       // console.log("prevState->reacommendUrl",prevState.reacommendUrl);
        let timeout = 0;
        for(let obj of selectedItemUrlArr){
            if(obj.length >1){
                setTimeout(()=>nextProps.getAddBundleAddOns(nextProps.accessToken,prevState.qty,obj),timeout);
                timeout += 200;
            }

        }
        timeout += 200;
        for(let obj of subCatItemUrlArr){
            if(obj.length >1){

                setTimeout(()=>nextProps.getAddBundleAddOns(nextProps.accessToken,prevState.qty,obj),timeout);
                timeout += 200;
            }
        }
        timeout += 300;
        for(let obj in prevState.reacommendUrl){
            if(prevState.reacommendUrl[obj].length > 1){
                setTimeout(()=>nextProps.getAddBundleAddOns(nextProps.accessToken,1,prevState.reacommendUrl[obj]),timeout);
                timeout += 300;
            }
           
        }
        timeout += 400;
         setTimeout(()=>nextProps.getViewCart(nextProps.accessToken,prevState.qty),timeout);
         if(Object.keys(nextProps.cartSummary).length>0){
            nextProps.history.push("/cartsummary");
            prevState.status = false;
        }
    }
       
        

    }else{
        //console.log("Hello");
        return null;
    }
}

handleChecked = (price,a,url) => {
    //this.refs[id].checked=!this.refs[id].checked;
    let checkedItem = this.refs[a].checked;
    let updateIndexArr = this.state.indexarr;
    
    let updated_AddOnPrice = 0;
    let total_price = 0;
    updateIndexArr.map((item,i)=>{
        if(item instanceof Array) {
            item.map(subitem=>{
                updated_AddOnPrice += parseFloat(subitem['price']);
            });
        }
        else
        updated_AddOnPrice += parseFloat(item['price']);
    });
    total_price = parseFloat(this.state.price) + updated_AddOnPrice;
    total_price  =  total_price * parseFloat(this.state.qty);
    let urlArr = this.state.reacommendUrl;
    if(checkedItem){
    urlArr[a] = url;
    let totaladdOnPrice = parseFloat(this.state.addOnPrice) + parseFloat(price);
    let afterTotal= total_price + parseFloat(totaladdOnPrice);
    this.setState({totalPrice:afterTotal,addOnPrice:totaladdOnPrice,reacommendUrl:urlArr});
    }
    else{
    console.log(price);
    urlArr[a] = ''
    let totaladdOnPrice = parseFloat(this.state.addOnPrice) - parseFloat(price);
    let afterTotal=total_price + parseFloat(totaladdOnPrice);
    this.setState({totalPrice:afterTotal,addOnPrice:totaladdOnPrice,reacommendUrl:urlArr});
    }
}

onPriceCalculation = (fristIndex,secondIndex,current_price,thirdIndex=-1) =>{
    console.log("fristIndex----",fristIndex);
    console.log("secondIndex----",secondIndex);
    console.log("current_price----",current_price);
    console.log("thirdIndex----",thirdIndex);
    //console.log(fristIndex,secondIndex,thirdIndex)
    let updateIndexArr = this.state.indexarr;
    if(thirdIndex>=0) {
        updateIndexArr[fristIndex][secondIndex] = {inde:fristIndex+''+secondIndex+''+thirdIndex,price:current_price || 0};
    }
    else {
        updateIndexArr[fristIndex] = {inde:fristIndex+''+secondIndex,price:current_price}
    }
    //console.log("updateIndexArr",updateIndexArr);
    let updated_AddOnPrice = 0;
    let total_price = 0;
    updateIndexArr.map((item,i)=>{
        if(item instanceof Array) {
            item.map(subitem=>{
                updated_AddOnPrice += parseFloat(subitem['price']);
            });
        }
        else
            updated_AddOnPrice += parseFloat(item['price']);
    });
    
    total_price = parseFloat(this.state.price) + updated_AddOnPrice;
    total_price = total_price * parseInt(this.state.qty);
    total_price = total_price + parseFloat(this.state.addOnPrice);
    this.setState({indexarr:updateIndexArr,totalPrice:total_price})

   
}

onMinusHandler = () =>{
     
     if(!(this.state.qty<=1)){
        let qty = this.state.qty-1;
        let updateIndexArr = this.state.indexarr;
        let updated_AddOnPrice = 0;
        let total_price = 0;
        updateIndexArr.map((item,i)=>{
            if(item instanceof Array) {
                item.map(subitem=>{
                    updated_AddOnPrice += parseFloat(subitem['price']);
                });
            }
            else
            updated_AddOnPrice += parseFloat(item['price']);
        });
        total_price = parseFloat(this.state.price) + updated_AddOnPrice;
         total_price = total_price * parseInt(qty);
         total_price = total_price + parseFloat(this.state.addOnPrice);
        this.setState({qty:(this.state.qty<=1 ? this.state.qty : this.state.qty-1),totalPrice:total_price});
    }
}

onAddToCartHandler = (event) =>{
   // console.log(event);
    this.props.getAddBundleHogies(this.props.accessToken,this.state.qty,this.state.bundleUrl); 
    this.setState({"status":true}); 

}

onPlusHandler = () =>{
   
    let qty = this.state.qty+1;
    let updateIndexArr = this.state.indexarr;
    let updated_AddOnPrice = 0;
    let total_price = 0;
    updateIndexArr.map((item,i)=>{
        if(item instanceof Array) {
            item.map(subitem=>{
                updated_AddOnPrice += parseFloat(subitem['price']);
            });
        }
        else
    updated_AddOnPrice += parseFloat(item['price']);
    });
    total_price = parseFloat(this.state.price) + updated_AddOnPrice;
     total_price = total_price * parseInt(qty);
     total_price = total_price + parseFloat(this.state.addOnPrice);
    this.setState({qty:this.state.qty+1,totalPrice:total_price});

}
    render() { 
      
      let imageUrl=sessionStorage.getItem("prodImageUrl");
      let pathname=this.props.history.location.pathname;
      let skuId=pathname.split('/');
      skuId=skuId[2];
      let filterName = this.props.products.filter((item)=>{
            return item.skuId == skuId
      });

      console.log("this.state.Prductbeverage-----------",this.state.Prductbeverage);
      const reacommendUI = this.state.recom.map((item,i) => {
        let itemDetails = item['_definition'][0]['details'];
        //let linkUrl = ''
        let linkUrl = !this.state.Prductbeverage?item['_addtocartform'][0]['links'][0]['href']:'';
        
        if(this.state.Prductbeverage){
           let itemDetails = item['_definition'][0]['details'];
            linkUrl = ''
            let linkUrlArr = item['links'];
            for(let obj of linkUrlArr){
                if(obj.rel === 'item'){
                    linkUrl = obj.href;
                }
            }
        }
        
       // console.log("linkUrl",linkUrl);

        let imgUrl  = '';
        let itemPrice = item['_price'][0]['purchase-price'][0]['amount'];
        for(let obj of itemDetails){  
            if(obj['display-name'] === 'skuImage'){
                imgUrl = obj['display-value'];
            }
        }
        return <div className="item-list" key={i}><img height="100" src={imgUrl}/><div className= "price"><p><label className="labelFont">{item['_definition'][0]['display-name']}</label></p><p><label className="labelFont">{item['_price'][0]['purchase-price'][0]['display']}</label></p><div><p><input className="checkBox" type="checkbox" ref={i} onChange={this.handleChecked.bind(this,itemPrice,i,linkUrl)}/></p></div></div></div>
});

      if(!this.props.productDetails){
            return null
      }

      const addOnUI  = this.state.prdComponet.map((item,j)=>{
            let elementArr = item['_components'][0]['_element'];
            let prdName = !this.state.Prductbeverage?item['display-name']:elementArr[0]['_standaloneitem'][0]['_definition'][0]['display-name'];
            let selectedSubCat;
           
            let listItem =  elementArr.map((obj,i)=>{
                let subItem; 
                let subcat = false;
                
                if(obj['_components'] != undefined){
                    selectedSubCat = j;
                    subcat = true;
                    subItem = obj['_components'][0]['_element'].map((obje,k) =>{
                        let oiltype = obje['_standaloneitem'][0]['_definition'][0]['display-name'];
                       //// console.log("sfsfsfsfsfs",this.state.indexarr[k]['inde']);
                        return <li key={k} id={k}><a className={this.state.indexarr[j][i] && this.state.indexarr[j][i].inde == (j+''+i+''+k) ? 'active':''} onClick={this.onPriceCalculation.bind(this,j,i,prdPrice,k)}>{oiltype}</a></li>
                    });
                }
               
               let breadType;
               let prdPrice = obj['_standaloneitem'][0]['_price'][0]['purchase-price'][0]['amount'];
               if(this.state.Prductbeverage){
                    breadType = obj['_standaloneitem'][0]['_definition'][0]['details'][0]['display-value'];           
               }else{
                    breadType = obj['_standaloneitem'][0]['_definition'][0]['display-name'];
               }

                if(subcat){
                    return <div key={i} className="sub">
                        <label>{breadType}</label>
                        <ul className="quantity-list">
                            {subItem}
                        </ul>
                    </div>
                     
                }else{
                    if(j == (this.state.prdComponet).length-1){
                        return <li key={i} ><a className="active">{breadType}</a></li>
                    }
                    else{
                        if(j === selectedSubCat ){
                            return <li key={i} ><a className="active">{breadType}</a></li>
                        }
                        else{
                             return <li key={i} onClick={this.onPriceCalculation.bind(this,j,i,prdPrice)}><a className={this.state.indexarr[j]['inde']== (j+''+i) ? 'active':''}>{breadType}</a></li>
                        }
                    }
                }

            });


            return  <div key={j} className="quantity-of-product">
                        <label>{prdName}</label>
                        <ul className="quantity-list">
                            {listItem}
                        </ul>
                    </div>
      });


      return (<React.Fragment>
        <section  className="page-detail-wrapper">
           <div  className="container">
               <div  className="row">
                   <div  className="col-lg-6">
                       <div  className="product-detail-image">
                           <img src={imageUrl} alt=""/>
                       </div>
                   </div>
                   <div  className="col-lg-6">
                       <div  className="product-detail-con">
                           <p  className="p-name">{this.state.prdname}</p>
                           <p  className="p-price">
                               <span  className="new-price">${(this.state.totalPrice).toFixed(2)}</span>
                           </p>
                          {addOnUI}
                           <div  className="quantity-of-product">
                               <label htmlFor="">Quantity</label>
                               <div  className="quantity-number">
                                   <a href="javascript: void(0)" onClick={() => this.onMinusHandler()}  className="quantity-minus">-</a>
                                   <span  className="product-valume">{this.state.qty}</span>
                                   <a href="javascript: void(0)" onClick={() => this.onPlusHandler()}  className="quantity-plus">+</a>
                               </div>
                           </div>
                           <a className="add-to-bag" href="javascript: void(0)" onClick={this.onAddToCartHandler.bind(this)}>Add to Bag</a>
                           <a href="#"  className="add-to-wishlist">Add to Wish List</a>
                           <ul  className="social-media-list">
                               <li>
                                   <a href=""><img src={fb} alt=""/></a>
                               </li>
                               <li>
                                   <a href=""><img src={twitter} alt=""/></a>
                               </li>
                               <li>
                                   <a href=""><img src={pin} alt=""/></a>
                               </li>
                               <li>
                                   <a href=""><img src={mail} alt=""/></a>
                               </li>
                           </ul>
                           <div  className="srq">
                               <ul>
                                   <li><a href="javascript: void(0)">Summary</a></li>
                                   <li><a href="javascript: void(0)">Reviews <span>(0)</span></a></li>
                                   <li><a href="javascript: void(0)">Questions <span>(0)</span></a>
                                   </li>
                               </ul>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <div className="bottomSlider">
               <div className="container">
               <p className="fontBold">Would you Like to have Add On?</p>
                <div className="item-list-con">
                   {reacommendUI}
                </div>
               </div>
           </div>
       </section>
       </React.Fragment>);
    }
}


const mapStateToProps=(state)=>{
    //console.log("31May",state);
    return{
        accessToken:state.accessToken,
        products: state.productsArr,
        productDetails:state.productDetails,
        hogieBandelArr:state.bundelArr,
        cartSummary:state.cartSummary
    }
  }
export default connect(mapStateToProps,{getAddBundleHogies,getAddBundleAddOns,getViewCart})(withRouter(HoagiesDetailPageComponent));