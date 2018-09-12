import React, { Component } from "react";
import "../style/Common.css";
import MenuItem from "./MenuItem";

class Page extends Component {
    constructor(props) {
        super(props);
        this.state ={
            "tabs":this.props.data.tabs || [],
            "iframes":this.props.data.iframes || []
        }
    }
    tabClick = (e)=>{
        var navId = e.target.getAttribute("nav-id");
        this.setActiveTab(navId);
    }
    setActiveTab(navId){
        var tabs = this.state.tabs;
        tabs.forEach((item,index)=>{
            item.active = false;
            if(item.navId === navId){
                item.active = true;
            }
        });
        var iframes = this.state.iframes;
        iframes.forEach((item,index)=>{
            item.active = false;
            if(item.navId == navId){
                item.active = true;
            }
        })
        this.setState({
            "tabs":tabs,
            "iframes":iframes
        });
    }
    addTab = (e)=>{
        var id = e.target.id;
        var url=e.target.getAttribute("url");
        var tabs = this.state.tabs;
        var iframes = this.state.iframes;
        var isAdd = tabs.filter(item =>item.navId === id).length>0;
        if(isAdd){
            this.setActiveTab(id);
            return;
        }
        tabs.forEach((item,index)=>{
            item.active = false;
        });
        iframes.forEach((item,index)=>{
            item.active = false;
        });
        tabs.push({"text":e.target.text,navId:id,"active":true});
        iframes.push({"url":url,"navId":id,"active":true});

        this.setState({
            "tabs":tabs,
            "iframes":iframes
        });
    }
    
    removeTab = (e)=>{
        var id = e.target.getAttribute("nav-id");
        var rstTabs = this.state.tabs.filter(item=>item.navId !== id);
        var iframes = this.state.iframes.filter(item=>item.navId !== id);
        if(rstTabs.length > 0){
            rstTabs[rstTabs.length -1 ].active = true;
            iframes[iframes.length -1].active = true;
        }
        this.setState({
            "tabs":rstTabs,
            "iframes":iframes
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
                        {this.state.tabs.map((item,index)=>{
                            var cn = item.active?"tab tab-active":"tab";
                            return <a key={index}  className={cn} href="#" nav-id={item.navId} onClick={this.tabClick.bind(this)} onDoubleClick={this.removeTab.bind(this)} >{item.text}</a>
                        })}
                    </div>
                    <div className="iframe-container">
                        {this.state.iframes.map((item,index)=>{
                            var cn = item.active?"active-iframe":"hide-iframe";
                            return <iframe key={item.url} src={item.url} nav-id={item.navId} className={cn} height="95%" width="100%" frameBorder="no" border="0" marginWidth="0" marginHeight="0" allowtransparency="yes" ></iframe>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Page;