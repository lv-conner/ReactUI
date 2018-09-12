import React, { Component } from "react";
import "../style/Common.css";
import MenuItem from "./MenuItem";
import IFrameContainer from "./IFrameContainer";
import TabContainer from "./TabContainer";
import Menu from "./Menu";
class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "tabs": this.props.tabs || [],
            "iframes": this.props.iframes || [],
            "menuItems":this.props.menuItems || []
        };
    }
    componentDidMount(){
        var xhr = new XMLHttpRequest();
        var that = this;
        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4 && xhr.status === 200){
                var obj = null;
                try{
                    obj = JSON.parse(xhr.responseText);
                }
                catch(error){
                    throw "Json string format error";
                }
                if(obj.data){
                    that.setState({menuItems:obj.data});
                }
            }
        };
        xhr.open("get",this.props.apiUrl);
        xhr.send(null);

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
        });
        var menus = this.state.menuItems;
        this.activeMenu(menus,tabId);
        this.setState({
            "tabs": tabs,
            "iframes": iframes,
            "menuItems":menus
        });
    }
    activeMenu(menus,id){
        menus.forEach(p=>{
            p.subItems.forEach(t=>{
                t.active = false;
                if(t.id == id){
                    t.active = true;
                }
            })
        });
    }
    disactiveMenu(menus,id){
        menus.forEach(p=>{
            p.subItems.forEach(t=>{
                if(t.id == id){
                    t.active = false;
                }
            })
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
            var menus = this.state.menuItems;
            this.activeMenu(menus,tab.id);
            this.setState({
                "tabs": tabs,
                "iframes": iframes,
                "menuItems":menus
            });
        }

    }
    removeTab = tab => {
        var rstTabs = this.state.tabs.filter(item => item !== tab);
        var iframes = this.state.iframes.filter(item => item.id !== tab.id);
        var menus = this.state.menuItems;
        this.disactiveMenu(menus,tab.id)
        if (rstTabs.length > 0) {
            rstTabs[rstTabs.length - 1].active = true;
            iframes[iframes.length - 1].active = true;
            this.activeMenu(menus,rstTabs[rstTabs.length -1 ].id);
        }
        this.setState({
            "tabs": rstTabs,
            "iframes": iframes,
            "menuItems":menus
        });
    }
    render() {
        return (
            <div className="row page">
                <div className="col-1 left-panel left-panel-default">
                    <Menu menus={this.state.menuItems} addTab={this.addTab.bind(this)}></Menu>
                </div>
                <div className="col-11 tab-content">
                    <TabContainer tabs={this.state.tabs} onClick={this.activeTab.bind(this)} onDoubleClick={this.removeTab.bind(this)} ></TabContainer>
                    <IFrameContainer iframes={this.state.iframes}></IFrameContainer>
                </div>
            </div>
        );
    }
}

export default Page;