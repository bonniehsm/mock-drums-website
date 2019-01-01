import React, { Component } from "react";
import ReactDOM from "react-dom";
import { FooterLegalLinks } from "../components/Footer";

const legal = [
  "Privacy Statement",
  "Terms of Use",
  "Copyright Claims",
  "Consumer Warning",
  "Social Media Policy"
]

class FooterContainer extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="global-footer">
        <FooterLegalLinks legal={legal}/>
      </div>
    )
  }
}

export default FooterContainer;

ReactDOM.render(<FooterContainer/>, document.getElementById("page-footer"));
