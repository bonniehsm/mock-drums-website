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
      <div className="icon-credits">
        <p>
          Icons made by <a href="http://creativecommons.org/licenses/by/3.0/" title="CC 3.0 BY" target="_blank">CC 3.0 BY</a> from www.flaticon.com
        </p>
     </div>
    </div>
  )
}

export { FooterLegalLinks };
