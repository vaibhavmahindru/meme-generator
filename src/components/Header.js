import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <img
          src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
          alt="troll-face"
          className="troll-face"
        />
        <p>Meme Genrator</p>
        <img
          src="http://www.pngall.com/wp-content/uploads/2016/03/Challenge-Accepted-Meme-PNG.png"
          alt="cameme"
          className="cameme"
        />
      </header>
    );
  }
}

export default Header;
