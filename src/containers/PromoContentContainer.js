import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import { ContentTile, PromoContentCarousel } from "../components/PromoContentCarousel";
import { store } from "../redux/store";
import { navigateSlide } from "../redux/actions";
import { getDisplayedIndices, getContent } from "../redux/reducers"

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

const MEDIA_TYPE_IMAGE = "MEDIA_TYPE_IMAGE";
const MEDIA_TYPE_VIDEO = "MEDIA_TYPE_VIDEO";

class PromoContentContainer extends Component {
  constructor(props){
    super(props);
    //this.navigateSlide = this.navigateSlide.bind(this);
  }

  render(){
    return(
      <div>
        <PromoContentCarousel
          contentType={this.props.contentType}
          media={this.props.mediaType}
          displayable={store.getState().displayable}
          content={this.props.content}
          slide={navigateSlide}
        />
      </div>
    );
  }
}

export default PromoContentContainer;

// render featured products
ReactDOM.render(
  <PromoContentContainer content={featuredProducts} mediaType={MEDIA_TYPE_IMAGE} contentType="featuredProducts"/>,
  document.getElementById('promo-products')
);

//r render featured videos
ReactDOM.render(<PromoContentContainer content={featuredVideos} mediaType={MEDIA_TYPE_VIDEO} contentType="featuredVideos"/>,
  document.getElementById('promo-videos'));
