import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { connect } from "react-redux";
import {signUpData} from "../../../redux/action";
import { Route, Redirect, Switch,  withRouter  } from "react-router-dom";

class SignUpComponent extends Component {
constructor(props) {
    super(props);
    this.state = {userName: ''};
    this.state = {userEmail: ''};
    this.state = {password: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if(event.target.id==="userName")
    this.setState({userName: event.target.value});
    if(event.target.id==="userEmail")
    this.setState({userEmail: event.target.value});
    if(event.target.id==="password")
    this.setState({password: event.target.value});
    console.log("event.target------------",event.target);
  }
handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log("this------------",this);
    console.log("data------------",data);
    
    // fetch('http://localhost:8000/employees', {
    //   method: 'POST',
    //   body: data,
    // });

    this.props.signUpData(this.state);
    event.preventDefault();
  }

    render() { 
        return ( <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <p className="h4 text-center mb-4">Sign up</p>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Your name
            </label>
            <input
              type="text"
              id="userName"
              className="form-control" 
              value={this.state.userName} 
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Your email
            </label>
            <input
              type="email"
              id="userEmail"
              className="form-control"
              value={this.state.userEmail} 
              onChange={this.handleChange}
            />
            <br />
            <label
              htmlFor="defaultFormRegisterConfirmEx"
              className="grey-text"
            >
              Confirm your email
            </label>
            <input
              type="email"
              id="defaultFormRegisterConfirmEx"
              className="form-control"
            />
            <br />
            <label
              htmlFor="defaultFormRegisterPasswordEx"
              className="grey-text"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={this.state.password} 
              onChange={this.handleChange}
            />
            <div className="text-center mt-4">
              <MDBBtn color="unique" type="submit" value="Submit">
                Register
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>  );
    }
}

const mapStateToProps = (state) => {
    return {
        
    }
}
export default connect(mapStateToProps,{signUpData})(withRouter(SignUpComponent));
