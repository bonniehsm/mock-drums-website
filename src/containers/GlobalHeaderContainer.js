import React, { Component } from "react";
import ReactDOM from "react-dom";
import GlobalHeader from "../components/GlobalHeader"

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
