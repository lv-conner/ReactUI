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
        const newState = !this.state.display;
        this.setState({"display": newState});
        e.preventDefault();
    }
    render(){
        return(
            <li>
                <a href="javascript:void(0);" onClick={this.ChangeState.bind(this)} className="nav-menu-item">{this.props.Item.text}<i className="fa fa-angle-right right-directive" ></i></a>
                <SubMuneItem subItems={this.props.Item.subItems} display={this.state.display} addTab = {this.props.addTab} ></SubMuneItem>
            </li>
        )
    }
}
export default MenuItem;