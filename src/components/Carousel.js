import React, {Component} from "react";
import ReactDom from "react-dom";
import '../../src/styles/Carousel.css';

class Carousel extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
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
        <div>
          <a href=""><img src="../../src/images/banner/acoustic-drums.jpg" alt="Acoustic drums"/></a>
        </div>
        <div>
          <a href=""><img src="../../src/images/banner/e-drums.jpg" alt="Electric drums"/></a>
        </div>
        <div>
          <a href="">
            <img src="../../src/images/banner/piano.jpg" alt="Piano"/>
          </a>
          </div>
      </div>
    );
  }
}


export default Carousel;
