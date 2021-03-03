import React from "react";
import Timeline from "./component/Timeline";

class App extends React.Component {
  constructor(props) {
    super(props);

    //user is changing newUsername and newMsg state values by typing in
    //the inputs
    this.state = {
      newUsername: "",
      newMsg: "",
      chirps: [
        { username: "bob", msg: "hey" },
        { username: "sarah", msg: "whats up" },
        { username: "tim", msg: "yo" },
      ],
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    //making a newChirp object that takes the values of inputs from state
    let newChirp = {
      username: this.state.newUsername,
      msg: this.state.newMsg,
    };

    //combines the new chirp with the existing ones
    this.setState({
      chirps: [...this.state.chirps, newChirp],
    });
  }

  render() {
    return (
      <>
        <div className="row-lg-12 mb-4 p-3 bg-light">
          <h1>Classy Chirpr</h1>
        </div>

        <div className="row-md m-6 d-flex align-items-start">
          <div id="input-box" className="col-md-3 p-4 bg-light shadow">
            <div className="input-group input-group-sm">
              <input
                className="form-control"
                type="text"
                id="un-input"
                value={this.state.newUsername}
                onChange={(e) => this.setState({ newUsername: e.target.value })}
                placeholder="Username"
              ></input>
            </div>

            <div className="input-group input-group-sm">
              <textarea
                className="form-control"
                type="text"
                id="msg-input"
                value={this.state.newMsg}
                onChange={(e) => this.setState({ newMsg: e.target.value })}
                placeholder="What's on your mind?"
              ></textarea>
            </div>
            <button
              className="btn btn-primary"
              onClick={(e) => this.handleSubmit(e)}
            >
              Submit chirp
            </button>
          </div>
          <div id="chirp-box" className="col-md-4 rounded shadow">
            {this.state.chirps.map((chirp) => <Timeline key={this} chirp={chirp}/>)}
          </div>
        </div>
      </>
    );
  }
}

export default App;
