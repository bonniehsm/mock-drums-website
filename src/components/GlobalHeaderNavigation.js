import React, { Component } from "react";
import ReactDOM from "react-dom";
import '../../src/styles/GlobalHeader.css';

function SubMenuListItems(props){
  const items = props.items;
  const listItems = items.map((item, index) => {
    var classes = "subMenuListItems menu-col" + (index < 6 ? "-1" : "-2");
    return <li className={classes} key={`sm-i-${item}`}>{ item }</li>
  });
  return listItems;
}

function SubMenuContainer(props){
    return(
      <div  id={props.id} className={"subMenuContainer " + props.cssClassName} onMouseLeave={(e)=>props.mouseLeave(props.index, e)}>
        <ul className="subMenu">
          <SubMenuListItems items={props.list}/>
        </ul>
      </div>
    );
}

function GlobalHeaderNavigation(props){
  const hover = props.hover;
  const list = props.list;

  //iterate over keys in the navigation object and for each item, return a list item element
  const navTop = Object.keys(list).map((item, index) => {
      var elementId = "gn-" + item;
      return (
        <li key={`gn-${item}`} id={elementId}>
          <a href=""  onMouseEnter={(e)=>props.mouseOver(index, e)} onMouseLeave={(e)=>props.mouseLeave(index, e)}>{item}</a>
        </li>
      )
  });

  const subMenu = Object.keys(list).map((item, index) => {
    let id = `sm-${index}`;
    let cssClassName = hover == id ? "showSubMenu" : "none";
    //create submenu container if there is an additional list
    if(list[item].length){
      return <SubMenuContainer id={id} cssClassName={cssClassName} key={`sm-${item}`} list={list[item]} index={index} mouseLeave={props.mouseLeave}/>
    }
  });
  return(
    <div className="global-header">
      <nav className="global-nav">
        <ul className="global-nav-list">
          {navTop}
        </ul>
      </nav>
      {subMenu}
    </div>
  );
}

export default GlobalHeaderNavigation;
