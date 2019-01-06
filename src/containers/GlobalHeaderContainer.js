import React, { Component } from "react";
import ReactDOM from "react-dom";
import GlobalHeaderNavigation from "../components/GlobalHeaderNavigation"

const DISPLAY_TYPE = {
  TEXT: "TEXT",
  ICON: "ICON"
}

const logo = {
  type: DISPLAY_TYPE.TEXT,
  //display: "/path/to/logo",
  display: "brand",
  submenu: null,
};
const products = {
  type: DISPLAY_TYPE.TEXT,
  display: "products",
  submenu: [
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
  ]
};
const blog = {
  type: DISPLAY_TYPE.TEXT,
  display: "blog",
  submenu: null,
};
const newsevents = {
  type: DISPLAY_TYPE.TEXT,
  display: "news & events",
  submenu: null
};
const company = {
  type: DISPLAY_TYPE.TEXT,
  display: "company",
  submenu: null,
};
const support = {
  type: DISPLAY_TYPE.TEXT,
  display: "support",
  submenu: [
    "Support Home",
    "Updates & Drivers",
    "Owner's Manuals",
    "Support Documents",
    "Knowledge Base"
  ]
};
const artists = {
  type: DISPLAY_TYPE.TEXT,
  display: "artists",
  submenu: null
};
const loggedInMenuItems = {
  type: DISPLAY_TYPE.ICON,
  display: "../../src/images/icons/user-account.svg",
  submenu: [
    "Register Products",
    "Email Support",
    "Community Forums",
    "Edit Profile",
    "Email Preferences",
    "Log Out",
  ]
};
const loggedOutMenuItems = {
  type: DISPLAY_TYPE.ICON,
  display: "../../src/images/icons/user-account.svg",
  submenu: [
    "Log In",
    "Sign Up",
    "Newsletter Sign Up",
    "Find a Dealer",
    "Online Store",
  ]
}

/*
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
*/

class GlobalHeader extends Component {
  constructor(props){
    super(props);
    this.state = {
      menu: props.menu,
      loggedIn: props.loggedIn,
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
    if(relatedTarget == "subMenu"){
      return;
    }else if(relatedTarget == "global-nav-list"){
      return;
    }else{
      this.setState({hover:""});
    }
  }

  render(){
    const { menu, loggedIn, hover } = this.state;
    return(
      <GlobalHeaderNavigation list={menu} loggedIn={loggedIn} hover={hover} mouseOver={this.hoverOn} mouseLeave={this.hoverOff}/>
    );
  }
}

class GlobalHeaderContainer extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      navMenu: {
        logo,
        products,
        support,
        artists,
        blog,
        newsevents,
        company,
        account: this.loggedIn ? loggedInMenuItems : loggedOutMenuItems
      }
      //navMenu: globalHeader,
    }
  }
  render() {
    return(
      <GlobalHeader menu={this.state.navMenu} loggedIn={this.state.loggedIn}/>
    );
  }
}

export default GlobalHeaderContainer;

ReactDOM.render(<GlobalHeaderContainer/>, document.getElementById("global-header"));
