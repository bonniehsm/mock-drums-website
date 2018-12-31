import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import { ContentTile } from "../../presentational/PromoContentCarousel";

const featuredProducts = [
    {
      media: "../../../../assets/featured/piano.jpg",
      title: "Featured Product",    //remove this and make this the object label
      label: "LX700 Series",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra lobortis tincidunt.",
      link: "#"
    },
    {
      media: "../../../../assets/featured/electronic-keyboard.jpg",
      title: "Featured Product",
      label: "JUNO-DS",
      summary: "Duis dignissim mollis felis eu lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing.",
      link: "#"
    },
    {
      media: "../../../../assets/featured/mixer.jpg",
      title: "Featured Product",
      label: "VT-4",
      summary: "In non enim vitae augue ullamcorper a sit amet metus. Morbi efficitur tortor.",
      link: "#"
    },
    {
      media: "../../../../assets/featured/roland.jpg",
      title: "Featured Product",
      label: "TD-1DMK",
      summary: "Phasellus varius tincidunt lobortis, justo mi mattis est, vitae condimentum neque dolor vel.",
      link: "#"
    },
    {
      media: "../../../../assets/featured/phone-app.jpg",
      title: "Featured Product",
      label: "Piano Every Day",
      summary: "Duis rutrum efficitur ligula, vel efficitur diam ultrices. Fusce mi lacus, hendrerit nec molestie.",
      link: "#"
    }
];

//const featuredVideo = {};
//const newProducts = {};

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
      featuredVideos: {},
      newProducts: {}
    }
    this.slideNext = this.slideNext.bind(this);
    this.slidePrevious = this.slidePrevious.bind(this);
    this.checkIfEndOfSlide = this.checkIfEndOfSlide.bind(this);
  }

  slideNext(){
    console.log("slideNext");
    var displayable = this.state.displayable;
    console.log(`displayable: ${displayable}`);
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
    console.log(`newIndices: ${newIndices}`);
    this.setState({
      displayable: newIndices
    })
  }

  slidePrevious(){
    console.log("slidePrevious");
    var displayable = this.state.displayable;
    console.log(`displayable: ${displayable}`);
    var contentLen = this.state.featuredProducts.length;
    var firstContentDisplayed = this.checkIfStartOfSlide(displayable);
    var newIndices = displayable.map((item, index) => {
      if(firstContentDisplayed > -1){
        return firstContentDisplayed == item ? contentLen-1 : --item;
      }else{
        return --item;
      }
    });
    console.log(`newIndices: ${newIndices}`);
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
        <PromoContentCarousel
          contentType="featuredProducts"
          displayable={displayable}
          content={featuredProducts}
          slideNext={this.slideNext}
          slidePrev={this.slidePrevious}
        />
    );
  }
}


export default PromoContentContainer;

ReactDOM.render(<PromoContentContainer/>, document.getElementById('promo-content'));
