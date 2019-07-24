
import * as actions from "./actions";
import Axios from 'axios';
// import {httpsAgent} from 'https-agent';
// import https from 'https';


// const instance = Axios.create({
//     httpsAgent: new https.Agent({  
//       rejectUnauthorized: false
//     })
//   });
//   instance.post('https://ffz-sandbox-2.epdemos.com/cortex/oauth2/tokens?scope=wawastore&role=PUBLIC&grant_type=password');
  
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
export const fetchAccesstoken=()=>(dispatch)=>{
        console.log("Calling the API to fetch the access token")
        
        const URL = 'http://ffz-sandbox-2.epdemos.com/cortex/oauth2/tokens?scope=wawastore&role=PUBLIC&grant_type=password';
        Axios({
            method: 'post',
            url: PROXY_URL+URL,
            data: {
            },
            headers:{'Content-Type': 'application/x-www-form-urlencoded','Access-Control-Allow-Origin':'*',
'Cache-Control': 'no-cache'
            }
        }).then(res=>{
            dispatch({type:actions.GET_ACCESSTOKEN,value:res.data})
        });
    }


export const getProducts=(accessToken,skuid)=>(dispatch)=>{
        const URL = 'http://ffz-sandbox-2.epdemos.com/cortex/items/wawastore/lookups/form?zoom=definition:components:element:components:element:standaloneitem:definition,definition:components:element:components:element:standaloneitem:price,definition:components:element:standaloneitem:recommendations:accessory:element:definition,definition:components:element:standaloneitem:price,definition:components:element:standaloneitem:definition,definition:components:element:standaloneitem:recommendations:accessory:element:price,definition:components:element:standaloneitem:recommendations:accessory:element&followlocation';
    //console.log("check token",accessToken)
    Axios({
        method: 'post',
        url: PROXY_URL+URL,
        data: {
            "code" : skuid
        },
        headers:{'Content-Type': 'application/json','Authorization':'Bearer ' + accessToken,"value":"*" }
    }).then(response => {
        dispatch({type:actions.GET_PRODUCTS,value:response.data})
    });

}

export const getProductsHoagies=(accessToken,skuid)=>(dispatch)=>{
    const URL = 'http://ffz-sandbox-2.epdemos.com/cortex/items/wawastore/lookups/form?zoom=definition,definition:components:element:components:element:standaloneitem:definition,definition:components:element:standaloneitem:code,definition:components:element:standaloneitem:price,definition:components:element:components:element:standaloneitem:price,definition:components:element:components:element:components:element:standaloneitem:definition,definition:components:element:components:element:components:element:standaloneitem:price,recommendations:accessory:element:definition,recommendations:accessory:element:price,definition:components:element,recommendations:accessory:element:addtocartform&followlocation';
    Axios({
        method: 'post',
        url: PROXY_URL+URL,
        data: {
            "code" : skuid
        },
        headers:{'Content-Type': 'application/json','Authorization':'Bearer ' + accessToken }
    }).then(response => {
       // response = JSON.parse(response);
      
        dispatch({type:actions.GET_PRODUCTS_HOAGIES,value:response.data})
    });

}

export const searchProducts=(accessToken,searchText)=>(dispatch)=>{
    console.log("accessToken----44-----",accessToken);
    const URL='http://ffz-sandbox-2.epdemos.com/cortex/offersearches/wawastore/offers/form?followlocation&zoom=element:definition,element,facets:element,facets:element:facetselector:choice:description';
   Axios({
        method: 'post',
        url: PROXY_URL+URL,
        data: {
            "keywords" : "beverages",
                "page-size" : ""
        },
        headers:{'Content-Type': 'application/json','Authorization':'Bearer ' + accessToken  }
    }).then(response => {
        console.log("response--------",response.data);
        dispatch({type:actions.GET_SEARCH_DATA,value:response.data})
    });

}

export const signUpData=(data)=>(dispatch)=>{
    console.log("accessToken----44-----");
    const URL='http://localhost:8000/employees/save';
   Axios({
        method: 'post',
        url: URL,
        data: data,
        headers:{'Content-Type': 'application/json','Authorization':'Bearer '  }
    }).then(response => {
        // console.log("response--------",response.data);
        // dispatch({type:actions.GET_SEARCH_DATA,value:response.data})
    });

}


export const getAddBundleHogies = (accessToken,qty,url)=>(dispatch)=>{
    console.log("accessToken----3-----",accessToken);
    //console.log("check token",accessToken)
    const URL= url + '?followlocation&zoom=dependentlineitems:element:dependentoptions:element:code:item:addtocartform,dependentlineitems:element:dependentoptions:element:code:item:definition,dependentlineitems:element:dependentlineitems:element:dependentoptions:element:definition,dependentlineitems:element:dependentlineitems:element:dependentoptions:element:addtocartform';
    Axios({
        method: 'post',
        url:  PROXY_URL+URL,
        data: {
            "quantity" : qty
        },
        headers:{'Content-Type': 'application/json','Authorization':'Bearer ' + accessToken }
    }).then(response => {
       // response = JSON.parse(response);
       console.log("frist time call");
        dispatch({type:actions.GET_ADD_BUNDLE_HOGIE,value:response.data})
    });

}

export const getAddBundle=(accessToken,qty,url)=>(dispatch)=>{
    console.log("accessToken---4------",accessToken);
    //console.log("check token",accessToken)
    const URL=url + '?followlocation&zoom=dependentlineitems:element:dependentoptions:element:code:item:addtocartform,dependentlineitems:element:dependentoptions:element:code:item:definition';
    Axios({
        method: 'post',
        url: PROXY_URL+URL,
        data: {
            "quantity" : qty
        },
        headers:{'Content-Type': 'application/json','Authorization':'Bearer ' + accessToken }
    }).then(response => {
       // response = JSON.parse(response);
       
        dispatch({type:actions.GET_ADD_BUNDLE,value:response.data})
    });

}

export const getAddBundleAddOns=(accessToken,qty,url)=>(dispatch)=>{
    console.log("accessToken-----5----",accessToken);
    //console.log("check token",accessToken)
     const URL=url;
    Axios({
        method: 'post',
        url: PROXY_URL+URL,
        data: {
            "quantity" : qty
        },
        headers:{'Content-Type': 'application/json','Authorization':'Bearer ' + accessToken }
    }).then(response => {
       // response = JSON.parse(response); 
        dispatch({type:actions.GET_ADD_BUNDLE_ADDONS})
    });

}

export const getViewCart=(accessToken,qty)=>(dispatch)=>{
    console.log("accessToken-------6--",accessToken);
    const URL='http://ffz-sandbox-2.epdemos.com/cortex/carts/wawastore/default?zoom=lineitems:element:dependentlineitems:element:dependentlineitems:element:dependentlineitems:element:item:definition,lineitems:element:dependentlineitems:element:dependentlineitems:element:dependentlineitems:element:item:price,lineitems:element:dependentlineitems:element:dependentlineitems:element:item:definition,lineitems:element:dependentlineitems:element:dependentlineitems:element:item:price,lineitems:element:item:definition,lineitems:element:total,total';
    //console.log("VIEW CART APRI CALLED",accessToken)
    Axios({
        method: 'get',
        url:PROXY_URL+URL,
        data: {
        },
        headers:{'Content-Type': 'application/json','Authorization':'Bearer ' + accessToken }
    }).then(response => {
       //response = JSON.parse(response); 
      // console.log("response",response);
        dispatch({type:actions.GET_VIEW_CART,value:response.data,qty:qty})
    });

}

export const getCartItems=(stateobj)=>(dispatch)=>{
        dispatch({type:actions.GET_CART_ITEMS,value:stateobj})
}

export const getCheckoutSubmit=(accessToken,orderID)=>(dispatch)=>{
    console.log("accessToken----7-----",accessToken);
    const URL='http://ffz-sandbox-2.epdemos.com/cortex/purchases/orders/wawastore/'+orderID+'/form?followlocation ';
    //console.log("VIEW CART APRI CALLED",accessToken)
    Axios({
        method: 'post',
        url: PROXY_URL+URL,
        data: {
        },
        headers:{'Content-Type': 'application/json','Authorization':'Bearer ' + accessToken }
    }).then(response => {
       //response = JSON.parse(response); 
       console.log("response checkout submit",response);
        dispatch({type:actions.GET_CHECKOUT_SUBMIT,value:response.data})
    });

}

export const getAddEmail=(accessToken,email)=>(dispatch)=>{
    console.log("accessToken----8-----",accessToken);
    //console.log("check token",accessToken)
    const URL='http://ffz-sandbox-2.epdemos.com/cortex/emails/wawastore/form';
    Axios({
        method: 'post',
        url: PROXY_URL+URL,
        data: {
            "email" : email
        },
        headers:{'Content-Type': 'application/json','Authorization':'Bearer ' + accessToken }
    }).then(response => {
       // response = JSON.parse(response);
       dispatch({type:actions.GET_ADD_EMAIL})
    });
}

export const getAddPayment=(accessToken,displayname,token,orderID)=>(dispatch)=>{
    console.log("accessToken-----9----",accessToken);
    let URL='http://ffz-sandbox-2.epdemos.com/cortex/paymenttokens/orders/wawastore/'+orderID;
    console.log("check token",URL)
    Axios({
        method: 'post',
        url: PROXY_URL+URL,
        data: {
            "display-name" : displayname,
            "token" : token
        },
        headers:{'Content-Type': 'application/json','Authorization':'Bearer ' + accessToken }
    }).then(response => {
       // response = JSON.parse(response);
       dispatch({type:actions.GET_ADD_PAYMENT})
    });
}

export const getAddAddress=(accessToken,state)=>(dispatch)=>{
    console.log("accessToken--10-------",accessToken);
    //console.log("check token",accessToken)
    const URL='http://ffz-sandbox-2.epdemos.com/cortex/addresses/wawastore/form';
    Axios({
        method: 'post',
        url: PROXY_URL+URL,
        data: {
            "address" : {
                "country-name":state.country,
                "extended-address":state.extendedAddress,
                "locality": state.locality,
                "postal-code":state.postalCode,
                "region": state.region,
                "street-address":state.streetAddress,
                "organization":state.organization,
                "phone-number":state.phoneNumber
            },
            "name" : {
                "family-name":state.firstName,
                "given-name":state.lastName
            }
        },
        headers:{'Content-Type': 'application/json','Authorization':'Bearer ' + accessToken }
    }).then(response => {
       // response = JSON.parse(response);
       dispatch({type:actions.GET_ADD_ADDRESS})
    });
}

export const resetProducts = () =>(dispatch)=>{
    
    dispatch({type:actions.RESET_PRODUCTS})
}