import React, { Component } from "react";
import "../style/Common.css";
import MenuItem from "./MenuItem";

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "tabs": this.props.data.tabs || [],
            "iframes": this.props.data.iframes || []
        };
    }
    activeTab(tabId) {
        var tabs = this.state.tabs;
        tabs.forEach((p, index) => {
            p.active = false;
            if (p.id === tabId) {
                p.active = true;
            }
        });
        var iframes = this.state.iframes;
        iframes.forEach((p, index) => {
            p.active = false;
            if (p.id === tabId) {
                p.active = true;
            }
        })
        this.setState({
            "tabs": tabs,
            "iframes": iframes
        });
    }
    addTab = tab => {
        var tabs = this.state.tabs;
        var iframes = this.state.iframes;
        if (tabs.filter(t => t.id === tab.id).length > 0) {
            this.activeTab(tab.id);
        } 
        else if(tabs.filter(t=>t.id===tab.id).active){
            return;
        }
        else {
            tabs.forEach((p, index) => {
                p.active = false;
            });
            iframes.forEach((p, index) => {
                p.active = false;
            });
            tabs.push({
                "text": tab.text,
                "id": tab.id,
                "active": true
            });
            iframes.push({
                "url": tab.url,
                "id": tab.id,
                "active": true
            });
            this.setState({
                "tabs": tabs,
                "iframes": iframes
            });
        }

    }
    removeTab = tab => {
        var rstTabs = this.state.tabs.filter(item => item !== tab);
        var iframes = this.state.iframes.filter(item => item.id !== tab.id);
        if (rstTabs.length > 0) {
            rstTabs[rstTabs.length - 1].active = true;
            iframes[iframes.length - 1].active = true;
        }
        this.setState({
            "tabs": rstTabs,
            "iframes": iframes
        });
    }
    render() {
        return (
            <div className="row page">
                <div className="col-1 left-panel left-panel-default">
                    <ul className="nav-menu">
                        {this.props.data.menuItems.map((item, index) => {
                            return <MenuItem key={item.text} Item={item} addTab = {this.addTab.bind(this)}></MenuItem>
                        })}
                    </ul>
                </div>
                <div className="col-11 tab-content">
                    <div className="tab-line">
                        {this.state.tabs.map((p,index)=>{
                            return <a key={index}  className={p.active ? "tab tab-active" : "tab"} href={"#" + p.text} onClick={this.activeTab.bind(this,p.id)} onDoubleClick={this.removeTab.bind(this,p)}>{p.text}</a>
                        })}
                    </div>
                    <div className="iframe-container">
                        {this.state.iframes.map((p,index)=>{
                            return <iframe key={p.url} title={p.url} src={p.url} className={p.active ? "active-iframe" : "hide-iframe"} height="95%" width="100%" frameBorder="no" border="0" marginWidth="0" marginHeight="0" allowtransparency="yes" ></iframe>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Page;