import React, { Component } from "react";
import "../style/Common.css";
import NavItem from "./Nav-Item";

class Page extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="row page">
                <div className="col-1 left-panel left-panel-default">
                    <ul className="nav-menu">
                        {this.props.ItemList.map((item, index) => {
                            return <NavItem key={item.text} Item={item}></NavItem>
                        })}
                    </ul>
                </div>
                <div className="col-11 tab-content">
                    <div className="tab-line">
                        <a className="tab tab-active" href="#" nav-id="home">主页</a>
                    </div>
                    <div className="iframe-container">
                        <iframe src="https://www.bing.com" nav-id="home" className="hide-iframe active-iframe" height="95%" width="100%" frameBorder="no" border="0" marginWidth="0" marginHeight="0" allowtransparency="yes" ></iframe>
                    </div>
                </div>
            </div>
        );
    }
}

export default Page;