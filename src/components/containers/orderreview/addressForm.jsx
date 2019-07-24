import React, { Component } from 'react';
import { connect } from "react-redux";
import { getAddAddress } from '../../../redux/action';
import loader from '../../../assests/loader.gif';

class AddressFormComponent extends Component {
  state = {
    firstName: "Jagtap",
    lastName: "Kaustubh",
    phoneNumber: "16103582560",
    streetAddress: "400 Evergreen Dr",
    extendedAddress: "400 Evergreen Dr",
    locality: "Glen Mills",
    postalCode: "19342",
    region: "PA",
    organization: "Wawa",
    country: "US"

  }

  handleChange = ({ currentTarget: input }) => {
    //console.log(input.value, input.name);
    //console.log("handle change select");
    this.setState({ [input.name]: input.value });
  };


  handleSubmit = (e) => {
    
    //console.log("clicked");
    this.props.getAddAddress(this.props.accessToken, this.state);
    e.preventDefault();
  };
  render() {
    return (<form className="form-horizontal" role="form">
      <fieldset>
        <legend>Address Details</legend>
        <div className="form-group row">
          <div className="col-sm-4">
            <label className="control-label" for="textinput">First Name</label>
            <input type="text" placeholder="First Name" name="firstName" value={this.state.firstName} className="form-control" onChange={this.handleChange} />
          </div>
          <div className="col-sm-4">
            <label className="control-label" for="textinput">Last Name</label>
            <input type="text" placeholder="Last Name" name="lastName" value={this.state.lastName} className="form-control" onChange={this.handleChange} />
          </div>
          <div className="col-sm-4">
            <label className="control-label" for="textinput">Phone Number</label>
            <input type="number" placeholder="Phone Number" name="phoneNumber" value={this.state.phoneNumber} className="form-control" onChange={this.handleChange} />
          </div>
        </div>

        <div className="form-group row">
          <div className="col-sm-6">
            <label className="control-label" for="textinput">Street Address</label>
            <input type="text" placeholder="Street Address" name="streetAddress" value={this.state.streetAddress} className="form-control" onChange={this.handleChange} />
          </div>
          <div className="col-sm-6">
            <label className="control-label" for="textinput">Extended Address</label>
            <input type="text" placeholder="Extended Address" name="extendedAddress" value={this.state.extendedAddress} className="form-control" onChange={this.handleChange} />
          </div>
        </div>


        <div className="form-group row">
          <div className="col-sm-4">
            <label className="control-label" for="textinput">Locality</label>
            <input type="text" placeholder="Locality" name="locality" className="form-control" value={this.state.locality} onChange={this.handleChange} />
          </div>
          <div className="col-sm-4">
            <label className="control-label" for="textinput">Postcode</label>
            <input type="text" placeholder="Post Code" name="postalCode" className="form-control" value={this.state.postalCode} onChange={this.handleChange} />
          </div>
          <div className="col-sm-4">
            <label className="control-label" for="textinput">Region</label>
            <input type="text" placeholder="Region" name="region" className="form-control" value={this.state.region} onChange={this.handleChange} />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-4">
            <label className="control-label" for="textinput">Organization</label>
            <input type="text" placeholder="Organization" name="organization" className="form-control" value={this.state.organization} onChange={this.handleChange} />
          </div>
          <div className="col-sm-4">
            <label className="control-label" for="textinput">Country</label>
            <input type="text" placeholder="Country" name="country" className="form-control" value={this.state.country} onChange={this.handleChange} />
          </div>
        </div>
        <div className="pull-right form-group">
          <button type="submit" className="btn btn-danger" onClick={this.handleSubmit}>
            <span className="text">Add Details</span>
            {/*<span className="spinner"><img src={loader} /></span>*/}
            </button>
        </div>
      </fieldset>
    </form>);
  }
}

const mapStateToProps = (state) => {
  //console.log("31May",state);
  return {

    accessToken: state.accessToken
  }
}

export default connect(mapStateToProps, { getAddAddress })(AddressFormComponent);
