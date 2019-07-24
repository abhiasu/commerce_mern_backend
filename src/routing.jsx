import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import ProductListPageComponent from "./components/containers/productList/productListPage";
import ProductDetailPageComponent from "./components/containers/productDetail/productDetailPage";
import HoagiesDetailPageComponent from "./components/containers/Hoagies/hoagiesDetailPage";
import ProductComponent from "./components/containers/product/product";
import BeverageDetailComponent from "./components/containers/beverageDetail";
import HoagiesComponent from "./components/containers/Hoagies/hoagies";
import CartSummaryComponent from "./components/containers/cart/cartSummary";
import OrderReviewComponent from "./components/containers/orderreview/orderreview";
import ThankyouComponent from "./components/containers/thankyou/thankyou";
import BrowsePageComponent from "./components/containers/browse/browsePage";
import signupPageComponent from "./components/containers/signupPage/signup";

class Routing extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/listpage" component={ProductListPageComponent} />
          <Route path="/detailpage" component={ProductDetailPageComponent} />
          <Route path="/beverage" component={BeverageDetailComponent} />
          <Route path="/hoagies" component={HoagiesComponent} />
          <Route path="/detailpage/:id" component={ProductDetailPageComponent} />
          <Route path="/hoagiesdetailpage/:id" component={HoagiesDetailPageComponent} />
          <Route path="/cartsummary" component={CartSummaryComponent} />
          <Route path="/orderreview" component={OrderReviewComponent} />
          <Route path="/thankyou" component={ThankyouComponent} />
          <Route path="/browse" component={BrowsePageComponent} />
          <Route path="/signup" component={signupPageComponent} />
          <Redirect from="/" to="/beverage" exact />
          <Route path="/" render={() => <div>Not Found</div>} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Routing;
