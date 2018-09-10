import React, { Component } from "react";
import "../style/Common.css";
import SubItem from "./Sub-Item";

class NavItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <li>
                <a href="javascript:void(0);" className="nav-menu-item">{this.props.Item.text}<i className="fa fa-angle-right right-directive" ></i></a>
                <SubItem subItems={this.props.Item.subItems}></SubItem>
            </li>
        )
    }
}
export default NavItem;