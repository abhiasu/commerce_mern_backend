import * as actions from "./actions";
//import {httpsAgent} from 'https-agent';
const initState = {
    "accessToken":"",
    "productsArr":[{
        "name":"Caramel",
        "skuId": "caramel_macchiatos_sku",
        "src": "https://pcftestfileupload.s3-eu-west-1.amazonaws.com/wawa/caramel_sku.png"
    }, {
        "name":"Mocha",
        "skuId": "mocha_macchiatos_sku",
        "src": "https://pcftestfileupload.s3-eu-west-1.amazonaws.com/wawa/mocha_sku.png"
    }],
    "productDetails":{},
    "productsArrHoagies":[{
        "name":"Oven Roasted",
        "skuId": "oven_roasted_turkey_sku",
        "src": "https://pcftestfileupload.s3-eu-west-1.amazonaws.com/wawa/ovenRoasetdTurkey.jpg"
    }, {
        "name":"Honey Smoked",
        "skuId": "honey_smoked_turkey_sku",
        "src": "https://pcftestfileupload.s3-eu-west-1.amazonaws.com/wawa/honeyRoastedTurkey.jpg"
    }],
    "productDetailsHoagies":{},
    "bundelArr":{},
    "cartSummary":{},
    "hogiesBundelArr":{},
    "cartItems":{},
    "submitOrder":{},
    "productSearchedData":[],
    "qty":1
  };


  const productReducer = (state=initState,action)=>{
    switch(action.type)
        {
            case actions.GET_ACCESSTOKEN: return {
                    ...state,
                    accessToken: action.value.access_token
                  }
            case actions.GET_PRODUCTS: return {
                ...state,
                productDetails:action.value
            }
            case actions.GET_PRODUCTS_HOAGIES: return {
                ...state,
                productDetails:action.value
            }
            case actions.GET_SEARCH_DATA: return {
                ...state,
                productSearchedData:action.value
            }
            case actions.GET_ADD_BUNDLE: return {
                ...state,
                bundelArr:action.value
            }
            case actions.GET_ADD_BUNDLE_ADDONS: return {
                ...state
            }
            case actions.GET_VIEW_CART: return {
                ...state,
                qty:action.qty,
                cartSummary:action.value
            }
            case actions.GET_CART_ITEMS: return {
                ...state,
                cartItems:action.value
            }
            case actions.GET_CHECKOUT_SUBMIT: return {
                ...state,
                submitOrder:action.value
            }
            case actions.GET_ADD_EMAIL: return {
                ...state
            }
            case actions.RESET_PRODUCTS: return {
                ...state,
                productDetails:{}
            }
            case actions.GET_ADD_PAYMENT: return {
                ...state
            }
            case actions.GET_ADD_ADDRESS: return {
                ...state
            }
            case actions.GET_ADD_BUNDLE_HOGIE: return {
                ...state,
                bundelArr:action.value
            }
            default : return {
                ...state
            }

        }

  }

  export default productReducer;