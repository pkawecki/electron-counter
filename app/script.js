import React from "react";
import { render } from "react-dom";

class App extends React.Component {
  state = {
    status: "off",
    time: 20,
    timer: null,
    intervalId: null,
  };

  firstPar = () => {
    return (
      <div>
        <p>
          According to optometrists in order to save your eyes, you should
          follow the 20/20/20. It means you should to rest your eyes every 20
          minutes for 20 seconds by looking more than 20 feet away.
        </p>
        <p>
          This app will help you track your time and inform you when it's time
          to rest.
        </p>
      </div>
    );
  };

  showTime = () => {
    let minutes = Math.floor(this.state.time / 60);
    let seconds = this.state.time % 60;
    return (
      <div className="timer">
        {minutes}:{seconds}
      </div>
    );
  };

  step = () => {
    let currentTime = this.state.time;
    this.setState({ time: this.state.time - 1 });
    console.log(this.state);
  };

  startTimer = () => {
    this.setState({
      timer: (this.state.intervalId = setInterval(this.step, 1000)),
      time: 1200,
      status: "work",
    });
  };

  stopTimer = () => {
    window.clearInterval(this.state.intervalId);
    this.setState({
      time: 1200,
      status: "off",
    });
  };

  closeApp = () => {
    window.close();
  };
  render() {
    return (
      <div>
        <h1>Protect your eyes</h1>
        {this.state.status == "off" ? this.firstPar() : null}
        {this.state.status == "work" ? <img src="./images/work.png" /> : null}
        {this.state.status == "rest" ? <img src="./images/rest.png" /> : null}
        {this.state.status != "off" ? this.showTime() : null}
        {this.state.status == "off" ? (
          <button
            onClick={() => {
              this.startTimer();
            }}
            className="btn"
          >
            Start
          </button>
        ) : (
          <button
            onClick={() => {
              this.stopTimer();
            }}
            className="btn"
          >
            Stop
          </button>
        )}
        <button
          onClick={() => {
            this.closeApp();
          }}
          className="btn btn-close"
        >
          X
        </button>
      </div>
    );
  }
}

render(<App />, document.querySelector("#app"));
