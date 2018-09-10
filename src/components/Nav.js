import React, { Component  } from "react";
import "../style/Nav.css";


class Nav extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <nav className="nav nav-default nav-fixed"></nav>
        );
    }
}

export default Nav;