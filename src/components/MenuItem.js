import React, { Component } from "react";
import "../style/Common.css";
import SubMuneItem from "./SubMenuItem";

class MenuItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            "display":false
        }
    }
    ChangeState = (e)=>{
        this.setState(ps => ({
            "display": !ps.display
          }));
        e.preventDefault();
    }
    render(){
        return(
            <li>
                <a href={"#" + this.props.Item.text} onClick={this.ChangeState.bind(this)} className="nav-menu-item">{this.props.Item.text}<i className="fa fa-angle-right right-directive" ></i></a>
                <SubMuneItem subItems={this.props.Item.subItems} display={this.state.display} addTab = {this.props.addTab} ></SubMuneItem>
            </li>
        )
    }
}
export default MenuItem;