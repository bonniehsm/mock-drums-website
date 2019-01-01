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
          <h1 className="banner-text">Acoustic Drum Kits
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
          </h1>
        </div>
        <div>
          <a href=""><img src="../../src/images/banner/e-drums.jpg" alt="Electronic drums"/></a>
          <h1 className="banner-text">V-Drums Kits
            <p>Lorem ipsum dolor sit amet.</p>
          </h1>
        </div>
        <div>
          <a href="">
            <img src="../../src/images/banner/piano.jpg" alt="Piano"/>
            <h1 className="banner-text">Piano
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </h1>
          </a>
          </div>
      </div>
    );
  }
}


export default Carousel;
