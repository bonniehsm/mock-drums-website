import React, { Component } from "react";
//import ReactDOM from "react-dom";
import '../../src/styles/PromoContentCarousel.css';

function ContentTile(props){
  //console.log("contentTile");
  //console.log(props.content);
  var content = props.content;
  console.log(`content-tile ${props.displayable} ${props.order}`);
  var style=`content-tile ${props.displayable} ${props.order}`;
  return(
    <li className={style} key={props.contentId}>
      <figure>
        <figcaption>
          <img className="content-media" src={content.media}/>
          <h5>
            <small>{content.title}</small>
            <span className="content-label">{content.label}</span>
          </h5>
        </figcaption>
        <p>{content.summary}</p>
        <a className="content-page-link" href={content.link}>find out more</a>
      </figure>
    </li>
  );
}


export { ContentTile };
