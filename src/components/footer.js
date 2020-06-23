import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        Made with{" "}
        <span role="img" aria-label="heart">
          {" "}
          ❤️
        </span>{" "}
        AND{" "}
        <span role="img" aria-label="beer">
          🍺
        </span>
        <br />
        <span> BY VAIBHAV</span>
      </div>
    );
  }
}

export default Footer;
