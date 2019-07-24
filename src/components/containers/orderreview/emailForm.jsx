import React, { Component } from 'react';
import { connect } from "react-redux";
import { getAddEmail } from '../../../redux/action';
class EmailFormComponent extends Component {

  state = {
    emailValue: "Kaustubh.jagtap_test1@wawa.com"
  }

  handleChange = ({ currentTarget: input }) => {
    console.log(input.value, input.name);
    console.log("handle change select");
    this.setState({ emailValue: input.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    this.props.getAddEmail(this.props.accessToken, this.state.emailValue);
  };

  render() {
    return (<form onSubmit={this.handleSubmit}>
      <fieldset>
        <legend>Email Address</legend>
        <div className="form-group row">
          <label className="col-sm-1 control-label">Email ID</label>
          <div className="col-sm-4 col-9">
            <input type="email" className="form-control" name="Email ID" value={this.state.emailValue} onChange={this.handleChange} required />
          </div>
          <div className="col-sm-2 col-3">
            <button className="btn btn-danger" >Continue</button>
          </div>
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

export default connect(mapStateToProps, { getAddEmail })(EmailFormComponent);