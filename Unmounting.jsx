import React, { Component } from "react";

class Unmounting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  updateDimensions = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  render() {
    return (
      <div>
        <h2>Window Resize Tracker</h2>
        <p>
          Width: {this.state.width}px | Height: {this.state.height}px
        </p>
      </div>
    );
  }
}

export default Unmounting;
