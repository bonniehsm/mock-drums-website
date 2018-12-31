import React, { Component } from "react";
//import ReactDOM from "react-dom";
import './PromoContentCarousel.css';

function ContentTile(props){
  console.log("contentTile");
  //console.log(props.content);
  var content = props.content;
  var style=`content-tile ${props.displayable}`;
  return(
    <li className={style} key={props.contentId}>
      <figure>
        <figcaption>
          <img className="content-media" src={content.media}/>
          <h5><small>{content.title}</small></h5>
          <h6>{content.label}</h6>
        </figcaption>
        <p>{content.summary}</p>
        <a className="content-page-link" href={content.link}>find out more</a>
      </figure>
    </li>
  );
}


export { ContentTile };
