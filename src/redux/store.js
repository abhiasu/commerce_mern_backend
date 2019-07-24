import { createStore, applyMiddleware} from "redux";
import productReducer from "./reducer";
import thunk from "redux-thunk";


const middleware=[thunk];

const store = createStore(
    productReducer,
   applyMiddleware(...middleware));
  export default store;