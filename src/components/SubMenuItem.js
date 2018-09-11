import React, { Component } from "react";
import "../style/Common.css";

class SubMenuItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.subItems.length === 0){
            return null;
        }
        var cn = null;
        if(!this.props.display){
            cn = "sub-menu";
        }
        return(
            <ul className={cn}>
                {this.props.subItems.map((item,index)=>{
                    return<li key={item.id}><a className="sub-item tab-frame" href="javascript:void(0);" onClick={(e) => this.props.addTab(e)} url={item.url} id={item.id}>{item.text}</a></li>
                })}
            </ul>
        )
    }
}

export default SubMenuItem;