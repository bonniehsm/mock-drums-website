import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import { ContentTile } from "../components/PromoContentCarousel";

const featuredProducts = [
    {
      media: "../../src/images/featured/piano.jpg",
      title: "Featured Product",    //remove this and make this the object label
      label: "LX700 Series",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra lobortis tincidunt.",
      link: "#"
    },
    {
      media: "../../src/images/featured/electronic-keyboard.jpg",
      title: "Featured Product",
      label: "JUNO-DS",
      summary: "Duis dignissim mollis felis eu lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing.",
      link: "#"
    },
    {
      media: "../../src/images/featured/mixer.jpg",
      title: "Featured Product",
      label: "VT-4",
      summary: "In non enim vitae augue ullamcorper a sit amet metus. Morbi efficitur tortor.",
      link: "#"
    },
    {
      media: "../../src/images/featured/roland.jpg",
      title: "Featured Product",
      label: "TD-1DMK",
      summary: "Phasellus varius tincidunt lobortis, justo mi mattis est, vitae condimentum neque dolor vel.",
      link: "#"
    },
    {
      media: "../../src/images/featured/phone-app.jpg",
      title: "Featured Product",
      label: "Piano Every Day",
      summary: "Duis rutrum efficitur ligula, vel efficitur diam ultrices. Fusce mi lacus, hendrerit nec molestie.",
      link: "#"
    }
];

const featuredVideos = [
  {
    media: "https://youtube.com/embed/EeOCyyP8Vq4",
    title: "Featured Video",
    label: "V-Drums TD-1DMK with all double-mesh head pads",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas ornare nunc id varius. Duis mattis dolor metus, et feugiat.",
    link: "#"
  },
  {
    media: "https://youtube.com/embed/AU9eIo1doE0",
    title: "Featured Video",
    label: "Roland GP609 Digital Grand",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel est ultrices, venenatis justo a, vehicula odio. Nulla facilisi. Maecenas.",
    link: "#"
  },
  {
    media: "https://youtube.com/embed/IaOEb05b6YE",
    title: "Featured Video",
    label: "GO:MIXER PRO",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet lectus sit amet tellus aliquam tincidunt. Nulla consequat tempor.",
    link: "#"
  },
  {
    media: "https://www.youtube.com/embed/44-dZpZ81iY",
    title: "Featured Video",
    label: "Roland PM Series Personal Monitor for V-Drums",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla varius placerat. Nam tincidunt congue libero et fringilla. Nam consequat eleifend euismod.",
    link: "#"
  },
];

//const newProducts = {};

const mediaType = { 0: "image", 1: "video" };

class PromoContentCarousel extends Component {
  constructor(props){
    super(props);
  }
  render(){
    var content = this.props.content;
    var contentTileId = `${this.props.contentType}-card`;
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
      </div>
    );
  }
}

class PromoContentContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      displayable: [0, 1, 2],
    }
    this.navigateSlide = this.navigateSlide.bind(this);
    this.checkIfEndOfSlide = this.checkIfEndOfSlide.bind(this);
  }

  navigateSlide(dir){
    var contentLen = this.props.content.length;
    //return if 3 or less content dislayed
    if(contentLen <= 3 ) { return; }
    var displayable = this.state.displayable;
    var newIndices;

    if(dir==="next"){
      var lastContentDisplayed = this.checkIfEndOfSlide(displayable);
      newIndices = displayable.map((item, index) => {
        if(lastContentDisplayed > -1){
          //content at end of slide [content.length-1]
          return lastContentDisplayed == item ? 0 : ++item;
        }else{
          return ++item;
        }
      });
    }else if(dir==="back"){
      var firstContentDisplayed = this.checkIfStartOfSlide(displayable);
      newIndices = displayable.map((item, index) => {
        if(firstContentDisplayed > -1){
          //content at index 0 of content[] is displayed
          return firstContentDisplayed == item ? contentLen-1 : --item;
        }else{
          return --item;
        }
      });
    }
    this.setState({
      displayable: newIndices
    })
  }

  //this function returns an integer representing the index of the last content displayed
  // or -1 if it is not displayed
  checkIfEndOfSlide(displayedIndices){
    var maxIndex = Math.max(...displayedIndices);
    return maxIndex == this.props.content.length-1 ? maxIndex : -1;
  }

  //this function returns an integer representing the index of the start content displayed
  // or -1 if it is not displayed
  checkIfStartOfSlide(displayedIndices){
    var minIndex = Math.min(...displayedIndices);
    return minIndex == 0 ? minIndex  : -1;
  }

  render(){
    var displayable = this.state.displayable;
    return(
      <div>
        <PromoContentCarousel
          contentType={this.props.contentType}
          media={this.props.mediaType}
          displayable={displayable}
          content={this.props.content}
          slide={this.navigateSlide}
        />
      </div>
    );
  }
}

export default PromoContentContainer;

// render featured products
ReactDOM.render(
  <PromoContentContainer content={featuredProducts} mediaType={mediaType[0]} contentType="featuredProducts"/>,
  document.getElementById('promo-products')
);

//r render featured videos
ReactDOM.render(<PromoContentContainer content={featuredVideos} mediaType={mediaType[1]} contentType="featuredVideos"/>,
  document.getElementById('promo-videos'));
