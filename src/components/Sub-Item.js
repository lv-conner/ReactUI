import React, { Component } from "react";
import "../style/Common.css";

class SubItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        if(this.props.subItems.length === 0){
            return null;
        }
        return(
            <ul className="sub-menu">
                {this.props.subItems.map((item,index)=>{
                    return<li key={item.id}><a className="sub-item tab-frame" href="javascript:void(0);" url={item.url} id={item.id}>系统设置</a></li>
                })}
            </ul>
        )
    }
}

export default SubItem;