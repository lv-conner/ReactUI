import React, { Component } from "react";
import "../style/Common.css";
import MenuItem from "./MenuItem";

class Page extends Component {
    constructor(props) {
        super(props);
        this.state ={
            "TabList":this.props.TabList,
            "Iframes":this.props.Iframes
        }
    }
    render() {
        return (
            <div className="row page">
                <div className="col-1 left-panel left-panel-default">
                    <ul className="nav-menu">
                        {this.props.ItemList.map((item, index) => {
                            return <MenuItem key={item.text} Item={item}></MenuItem>
                        })}
                    </ul>
                </div>
                <div className="col-11 tab-content">
                    <div className="tab-line">
                        {this.props.TabList.map((item,index)=>{
                            return <a key={index}  className="tab tab-active" href="#" nav-id="home">{item.Name}</a>
                        })}
                    </div>
                    <div className="iframe-container">
                        {this.props.Iframes.map((item,index)=>{
                            return <iframe src={item.Url} nav-id={item.NavId} className="hide-iframe active-iframe" height="95%" width="100%" frameBorder="no" border="0" marginWidth="0" marginHeight="0" allowtransparency="yes" ></iframe>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Page;