import React, {Component} from "react";
import ReactDom from "react-dom";
import './Carousel.css';

class Carousel extends Component{
  constructor(props){
    super(props);

  }

  componentDidMount(){
    console.log("carousel component mounted");

    $('.banner-carousel').slick({
      autoplay: true,
      arrows: true,
      prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">&lt;</button>',
      nextArrow: '<button class="slick-next" aria-label="Next" type="button">&gt;</button>',
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear'
    });
  }

  render(){
    return(
      <div className="banner-carousel">
        <div><img src="../../../assets/acoustic-drums.jpg" alt="Acoustic drums"/></div>
        <div><img src="../../../assets/e-drums.jpg" alt="Electric drums"/></div>
        <div><img src="../../../assets/piano.jpg" alt="Piano"/></div>
      </div>
    );
  }
}


export default Carousel;
