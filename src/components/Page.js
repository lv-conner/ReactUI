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
    tabClick = (e)=>{
        console.log(e);
        var navId = e.target.getAttribute("nav-id");
        this.setActiveTab(navId);
    }
    setActiveTab(navId){
        var tabs = this.state.TabList;
        tabs.forEach((item,index)=>{
            item.Active = false;
            if(item.NavId === navId){
                item.Active = true;
            }
        });
        var iframes = this.state.Iframes;
        iframes.forEach((item,index)=>{
            item.Active = false;
            if(item.NavId == navId){
                item.Active = true;
            }
        })
        this.setState({
            "TabList":tabs,
            "Iframes":iframes
        });
    }
    addTab = (e)=>{
        var id = e.target.id;
        var url=e.target.getAttribute("url");
        var tabs = this.state.TabList;
        var iframes = this.state.Iframes;
        var isAdd = tabs.filter(item =>item.NavId === id).length>0;
        debugger;
        if(isAdd){
            this.setActiveTab(id);
            return;
        }
        tabs.forEach((item,index)=>{
            item.Active = false;
        })
        iframes.forEach((item,index)=>{
            item.Active = false;
        })
        tabs.push({"Name":e.target.text,NavId:id,"Active":true});
        iframes.push({"Url":url,"NavId":id,"Active":true});
        this.setState({
            "TabList":tabs,
            "Iframes":iframes
        })
        console.log(e);
    }

    render() {
        return (
            <div className="row page">
                <div className="col-1 left-panel left-panel-default">
                    <ul className="nav-menu">
                        {this.props.ItemList.map((item, index) => {
                            return <MenuItem key={item.text} Item={item} addTab = {this.addTab.bind(this)}></MenuItem>
                        })}
                    </ul>
                </div>
                <div className="col-11 tab-content">
                    <div className="tab-line">
                        {this.state.TabList.map((item,index)=>{
                            var cn = item.Active?"tab tab-active":"tab";
                            return <a key={index}  className={cn} href="#" nav-id={item.NavId} onClick={this.tabClick.bind(this)} >{item.Name}</a>
                        })}
                    </div>
                    <div className="iframe-container">
                        {this.state.Iframes.map((item,index)=>{
                            var cn = item.Active?"active-iframe":"hide-iframe";
                            return <iframe src={item.Url} nav-id={item.NavId} className={cn} height="95%" width="100%" frameBorder="no" border="0" marginWidth="0" marginHeight="0" allowtransparency="yes" ></iframe>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Page;