import React, { Component } from "react";

class Meme extends Component {
  state = {
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
    allMemeImages: [],
  };

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        this.setState({ allMemeImages: response.data.memes });
      });
  }

  handleChange = (event) => {
    const { name, value } = event.target; //takes out the value from event.target and store it in name and value
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault(); //prevents the deafault function of the event.
    const index = Math.floor(Math.random() * this.state.allMemeImages.length);
    const randImg = this.state.allMemeImages[index].url;
    this.setState({ randomImage: randImg });
  };
  render() {
    return (
      <div className="meme">
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="topText"
            value={this.state.topText}
            onChange={this.handleChange}
            placeholder="TOP TEXT"
          />
          <input
            type="text"
            name="bottomText"
            value={this.state.bottomText}
            onChange={this.handleChange}
            placeholder="BOTTOM TEXT"
          />
          <button>Genrate</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImage} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
        <h2>
          Click{" "}
          <a
            href="https://vaibhavmahindru.github.io/intro-page/"
            target="blank"
          >
            HERE
          </a>{" "}
          for more intresting stuff!
        </h2>
      </div>
    );
  }
}

export default Meme;
