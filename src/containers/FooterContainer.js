import React, { Component } from "react";
import ReactDOM from "react-dom";

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
    this.state = {
      legal: legal,
    }
  }
  render(){
    return (
      <div></div>
    )
  }
}

export default FooterContainer;

ReactDOM.render(<FooterContainer/>, document.getElementById("page-footer"));
