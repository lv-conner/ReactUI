import React,{ Component } from "react";
import "../style/Common.css";
 class TabContainer extends Component{
     constructor(props){
         super(props);
     }
     render(){
         return(
            <div className="tab-line">
                {this.props.tabs.map((p,i)=>{
                    return <a key={i}  className={p.active ? "tab tab-active" : "tab"} href={"#" + p.text} onClick={(e)=>this.props.onClick(p.id)} onDoubleClick={(e)=>this.props.onDoubleClick(p)}>{p.text}</a>
                })}
            </div>
         )
     }
 }

 export default TabContainer;