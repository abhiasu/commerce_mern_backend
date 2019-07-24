import React, { Component } from 'react';
import Routing from "./routing";
import HeaderComponent from "../src/components/header";
import FooterComponent from "../src/components/footer";
import { BrowserRouter } from "react-router-dom";
import ProductListPageComponent from "./components/containers/productList/productListPage";
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
            <HeaderComponent/>
            <Routing/>
            <FooterComponent/>
          </BrowserRouter>
      </React.Fragment>
     
    );
  }
}

export default App;
