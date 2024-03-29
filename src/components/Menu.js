import React, { Component } from "react";
import { slide as Menu } from 'react-burger-menu'
import '../styles/menu.css'

class Example extends React.Component {
  showSettings (event) {
    event.preventDefault();
  
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">Components</a>
        <a id="contact" className="menu-item" href="/contact">Surveys</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Jobs</a>
      </Menu>
    );
  }
}

export default Example;