import React, { Component } from "react";
import '../../src/styles/PromoContentCarousel.css';

function ContentTile(props){
  var content = props.content;
  var media = (() => {
    if(props.media == "MEDIA_TYPE_IMAGE"){
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
  var style=`content-tile ${props.displayable} ${props.order}`;
  return(
    <li className={style} key={props.contentId}>
      <figure className={props.media=="MEDIA_TYPE_IMAGE" ? "figure-img" : "figure-video"}>
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

class PromoContentCarousel extends Component {
  constructor(props){
    super(props);
  }
  render(){
    var content = this.props.content;
    var contentTileId = `${this.props.contentType}-card`;
    //for each content, determine which to show or hide and the display order
    var contentRow = content.map((item, index)=>{
      var display = this.props.displayable.includes(index) ? "show" : "hide";
      var displayOrder;
      if(display === "show"){
        displayOrder = this.props.displayable.indexOf(index);
      }else{
        displayOrder = content.length * 2;
      }
      return(
        <ContentTile
          content={item}
          media={this.props.media}
          key={`${contentTileId}-${index}`}
          contentId={`${this.props.contentType}-${index}`}
          displayable={display}
          order={`order-${displayOrder}`}
        />
      )
    });
    return(
      <div className="content-carousel">
        <button className="slick-prev slick-arrow" aria-label="Previous" type="button" onClick={(e)=>this.props.slide("back", e)}>&lt;</button>
          <ul className="content-row">
              {contentRow}
          </ul>
        <button className="slick-next slick-arrow" aria-label="Next" type="button" onClick={(e)=>this.props.slide("next", e)}>&gt;</button>
        <div className="content-boundary"></div>
      </div>
    );
  }
}

export { ContentTile, PromoContentCarousel };
