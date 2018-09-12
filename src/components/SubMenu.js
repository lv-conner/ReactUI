import React, { Component } from "react";
import "../style/Common.css";

class SubMenu extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        if (!this.props.subItems || this.props.subItems.length === 0) {
            return null;
        }
        return(
            <ul className={this.props.display ? "sub-menu-active" : "sub-menu"}>
                {this.props.subItems.map((item,index)=>{
                    return<li key={item.id}><a className={item.active?"sub-item sub-item-active tab-frame":"sub-item tab-frame"} href="javascript:void(0);" onClick={(e) => this.props.addTab(item,e)}>{item.text}</a></li>
                })}
            </ul>
        )
    }
}

export default SubMenu;