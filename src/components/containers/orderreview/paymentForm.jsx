import React, { Component } from 'react';
import {connect} from "react-redux";
import {getAddPayment} from '../../../redux/action';

class PaymentFormComponent extends Component {
    state = { 
        displayName :"",
        cardNumber : "",
        cvv:"",
        cardType:"visacard"
     }

     handleChange = ({ currentTarget: input }) => {
        console.log(input.value, input.name);
        console.log("handle change select");
        this.setState({ [input.name]: input.value });
      };

      handleSubmit = (e) => {
        e.preventDefault();
        console.log("clicked");
        this.props.getAddPayment(this.props.accessToken,this.state.cardType,this.state.cardNumber,this.props.cartItems.OrderId);
      };

    render() { 
        return (<form className="form-horizontal" role="form">
          <fieldset>
            <legend>Payment</legend>
            <div className="row form-group">
              <div className="col-sm-6">
              <label className="control-label" for="card-holder-name">Name on Card</label>
                <input type="text" className="form-control" name="displayName" id="card-holder-name" placeholder="Card Holder's Name" value={this.state.displayName} onChange={this.handleChange} required/>
              </div>
              <div className="col-sm-6">
              <label className="control-label" for="card-number">Card Number</label>
                <input type="number" className="form-control" name="cardNumber" id="card-number" placeholder="Debit/Credit Card Number" value={this.state.cardNumber} onChange={this.handleChange} required/>
              </div>
            </div>
            <div className="row form-group">
            <div className="col-sm-5">
              <label className="control-label" for="expiry-month">Expiration Date</label>
                <div className="row">
                  <div className="col-6">
                    <select className="form-control" name="expiry-month" id="expiry-month">
                      <option>Month</option>
                      <option value="01">Jan (01)</option>
                      <option value="02">Feb (02)</option>
                      <option value="03">Mar (03)</option>
                      <option value="04">Apr (04)</option>
                      <option value="05">May (05)</option>
                      <option value="06">June (06)</option>
                      <option value="07">July (07)</option>
                      <option value="08">Aug (08)</option>
                      <option value="09">Sep (09)</option>
                      <option value="10">Oct (10)</option>
                      <option value="11">Nov (11)</option>
                      <option value="12">Dec (12)</option>
                    </select>
                  </div>
                  <div className="col-6">
                    <select className="form-control" name="expiry-year">
                      <option value="19">2019</option>
                      <option value="20">2020</option>
                      <option value="21">2021</option>
                      <option value="22">2022</option>
                      <option value="23">2023</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-sm-2">
                <label className="control-label" for="cvv">Card CVV</label>
                <input type="password" className="form-control" name="cvv" id="cvv" placeholder="Security Code" value={this.state.cvv} onChange={this.handleChange} required/>
              </div>
            </div>
            <div className="form-group">
                <button type="button" className="btn btn-danger" onClick={this.handleSubmit}>Pay Now</button>
            </div>
          </fieldset>
        </form>);
    }
}
 
const mapStateToProps=(state)=>{
    //console.log("31May",state);
    return{
        
        accessToken:state.accessToken,
        cartItems:state.cartItems
    }
  }

export default connect(mapStateToProps,{getAddPayment})(PaymentFormComponent);