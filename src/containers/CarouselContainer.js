import React, { Component } from "react";
import ReactDOM from "react-dom";
import Carousel from "../components/Carousel";

class CarouselContainer extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Carousel/>
    );
  }
}

export default CarouselContainer;

ReactDOM.render(<CarouselContainer/>, document.getElementById("carousel"));
