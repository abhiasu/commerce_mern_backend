import React, { Component } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import hotBeverage from '../../assests/HotBeverage.jpg';
import coldBeverage from '../../assests/coldBeverage.png';
import { connect } from "react-redux";
import {fetchAccesstoken} from '../../redux/action';

class BeverageDetailComponent extends Component {
   
    onClickBeverage =(id)=>{
        if(id=="cold"){
            this.props.history.push("/listpage");
        }
       else if(id=="hot"){
        this.props.history.push("/listpage");
        }
    }

    componentDidMount(){
        this.props.fetchAccesstoken();
    }

    render() { 
        return ( <div className="container"><div className="productWrapper"  onClick={()=>this.onClickBeverage("hot")}>
        <img src={hotBeverage} height="300" width="400"/>
        <b><center>Hot Beverages</center></b>
    </div>
    <div className="productWrapper"  onClick={()=>this.onClickBeverage("cold")}>
        <img src={coldBeverage} height="300" width="400"/>
        <b><center>Cold Beverages</center></b>
    </div>
    </div>  );
    }
}
 
export default connect(null,{fetchAccesstoken})(BeverageDetailComponent);