import React, { Component } from "react";
//import ReactDOM from "react-dom";
import '../../src/styles/PromoContentCarousel.css';

function ContentTile(props){
  var content = props.content;
  var media = (() => {
    if(props.media == "image"){
      return (<img className="content-media" src={content.media}/>);
    }else{
      return (
          <iframe
            src={content.media}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
      );
    }
  })();
  //console.log(`content-tile ${props.displayable} ${props.order}`);
  var style=`content-tile ${props.displayable} ${props.order}`;
  return(
    <li className={style} key={props.contentId}>
      <figure>
        <figcaption>
          {media}
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
