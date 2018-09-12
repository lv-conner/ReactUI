import React, { Component } from "react";
import "../style/Common.css";
import MenuItem from "./MenuItem";

class Menu extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <ul className="nav-menu">
                {this.props.menus.map((p, i) => {
                    return <MenuItem key={p.text} Item={p} addTab = {this.props.addTab}></MenuItem>
                })}
            </ul>
        )
    }
}

export default Menu;