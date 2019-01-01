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
    media: "https://youtube.com/embed/IaOEb05b6YE",
    title: "Featured Video",
    label: "GO:MIXER PRO",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas mattis risus, sit amet varius felis aliquet ac. Donec non.",
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
        <button className="slick-prev slick-arrow" aria-label="Previous" type="button" onClick={this.props.slidePrev}>&lt;</button>
          <ul className="content-row">
              {contentRow}
          </ul>
        <button className="slick-next slick-arrow" aria-label="Next" type="button" onClick={this.props.slideNext}>&gt;</button>
      </div>
    );
  }
}

class PromoContentContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      displayable: [0, 1, 2],
      featuredProducts,
      featuredVideos,
      //newProducts: {}
    }
    this.slideNext = this.slideNext.bind(this);
    this.slidePrevious = this.slidePrevious.bind(this);
    this.checkIfEndOfSlide = this.checkIfEndOfSlide.bind(this);
  }

  slideNext(){
    //console.log("slideNext");
    var displayable = this.state.displayable;
    //console.log(`displayable: ${displayable}`);
    var contentLen = this.state.featuredProducts.length;
    //check if any index is equal to content.length-1
    var lastContentDisplayed = this.checkIfEndOfSlide(displayable);
    var newIndices = displayable.map((item, index) => {
      if(lastContentDisplayed > -1){      //at end of slide
        return lastContentDisplayed == item ? 0 : ++item;
      }else{
        return ++item;
      }
    });
    //console.log(`newIndices: ${newIndices}`);
    this.setState({
      displayable: newIndices
    })
  }

  slidePrevious(){
    //console.log("slidePrevious");
    var displayable = this.state.displayable;
    //console.log(`displayable: ${displayable}`);
    var contentLen = this.state.featuredProducts.length;
    var firstContentDisplayed = this.checkIfStartOfSlide(displayable);
    var newIndices = displayable.map((item, index) => {
      if(firstContentDisplayed > -1){
        return firstContentDisplayed == item ? contentLen-1 : --item;
      }else{
        return --item;
      }
    });
    //console.log(`newIndices: ${newIndices}`);
    this.setState({
      displayable: newIndices
    })
  }

  //this function returns an integer representing the index of the last content displayed
  // or -1 if it is not displayed
  checkIfEndOfSlide(displayedIndices){
    var maxIndex = Math.max(...displayedIndices);
    return maxIndex == this.state.featuredProducts.length-1 ? maxIndex : -1;
  }

  //this function returns an integer representing the index of the start content displayed
  // or -1 if it is not displayed
  checkIfStartOfSlide(displayedIndices){
    var minIndex = Math.min(...displayedIndices);
    return minIndex == 0 ? minIndex  : -1;
  }

  render(){

    /* render a component for each featured product*/
    var { displayable, featuredProducts, featuredVideos, newProducts } = this.state;
    return(
      <div>
        <PromoContentCarousel
          contentType="featuredProducts"
          media={mediaType[0]}
          displayable={displayable}
          content={featuredProducts}
          slideNext={this.slideNext}
          slidePrev={this.slidePrevious}
        />
        <PromoContentCarousel
          contentType="featuredProducts"
          media={mediaType[1]}
          displayable={displayable}
          content={featuredVideos}
          slideNext={this.slideNext}
          slidePrev={this.slidePrevious}
        />
      </div>
    );
  }
}


export default PromoContentContainer;

ReactDOM.render(<PromoContentContainer/>, document.getElementById('promo-content'));
