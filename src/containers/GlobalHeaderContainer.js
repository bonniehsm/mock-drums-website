import React, { Component } from "react";
import ReactDOM from "react-dom";
import GlobalHeaderNavigation from "../components/GlobalHeaderNavigation"

let brand = [];

let products = [
  "Pianos",
  "Organs",
  "Synthesizers",
  "Keyboards",
  "Guitars & Bass",
  "Drums & Percussion",
  "Production",
  "Amplifiers",
  "AIRA & DJ",
  "Pro Audio",
  "Pro Video",
  "Accessories"
];

let blog = [];

let company = [];

let support = [
  "Support Home",
  "Updates & Drivers",
  "Owner's Manuals",
  "Support Documents",
  "Knowledge Base"
]

let artists = [];

let loggedInMenuItems = [
  "Register Products",
  "Email Support",
  "Community Forums",
  "Edit Profile",
  "Email Preferences",
  "Log Out",
];

let loggedOutMenuItems = [
  "Log In",
  "Sign Up",
  "Newsletter Sign Up",
  "Find a Dealer",
  "Online Store",
]

class GlobalHeader extends Component {
  constructor(props){
    super(props);
    this.state = {
      menu: props.menu,
      hover: "",
    };
    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);
  }

  //this function receives an index of the global header item being hovered over and updates the hover state with that element's id
  hoverOn(index){
    var elementId = `sm-${index}`;
    var element = document.getElementById(elementId);
    if(element){
      this.setState({
        hover: elementId
      })
    }else{
      this.setState({
        hover: ""
      });
    }
  }

  //this function receives an index of the global header item being hovered over and updates hover state to blank if a submenu is present
  hoverOff(index){
    var relatedTarget = event.relatedTarget.className;
    var elementId = `sm-${index}`;
    if(relatedTarget !== "subMenu"){
      this.setState({hover:""});
    }
  }

  render(){
    const { menu, hover } = this.state;
    return(
      <GlobalHeaderNavigation list={menu} hover={hover} mouseOver={this.hoverOn} mouseLeave={this.hoverOff}/>
    );
  }
}

class GlobalHeaderContainer extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      navMenu: {
        brand,
        products,
        support,
        artists,
        blog,
        company,
        account: this.loggedIn ? loggedInMenuItems : loggedOutMenuItems
      }
    }
  }
  render() {
    return(
      <GlobalHeader menu={this.state.navMenu}/>
    );
  }
}

export default GlobalHeaderContainer;

ReactDOM.render(<GlobalHeaderContainer/>, document.getElementById("global-header"));
