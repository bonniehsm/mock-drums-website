import React from "react";
import "../../src/styles/Footer.css";

function FooterLegalLinks(props){
  var links = props.legal.map((item, index)=>{
    return <li className="legal-links" key={`legal-${index}`}><a href="">{item}</a></li>
  })
  return(
    <div className="gf-legal">
      <ul className="gf-legal-list">
        {links}
      </ul>
    </div>
  )
}

export { FooterLegalLinks };
