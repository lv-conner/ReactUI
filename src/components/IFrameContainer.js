import React,{ Component } from "react";
import "../style/Common.css";

class IFrameContainer extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="iframe-container">
                {this.props.iframes.map((p,index)=>{
                    return <iframe key={p.url} title={p.url} src={p.url} className={p.active ? "active-iframe" : "hide-iframe"} height="95%" width="100%" frameBorder="no" border="0" marginWidth="0" marginHeight="0" allowtransparency="yes" ></iframe>
                })}
            </div>
        )
    }
}
export default IFrameContainer;