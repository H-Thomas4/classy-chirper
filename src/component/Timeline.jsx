import React, { Component } from "react";

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.props = props
  }
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.props.chirp.username}</h5>
          <p className="card-text">{this.props.chirp.msg}</p>
        </div>
      </div>
    );
  }
}

export default Timeline;
