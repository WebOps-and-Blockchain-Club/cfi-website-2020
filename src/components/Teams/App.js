import React, { Component } from "react";
import "./ct.css";
import "./achievements.css";

class App extends Component {
  state = {
    msg: false,
    click: 0,
  };

  handleClick = () => {
    this.setState({ click: this.state.click + 1 });
    if (this.state.click % 2 === 1) {
      this.setState({ msg: true });
    } else {
      this.setState({ msg: false });
    }
  };

  render() {
    return (
      <div>
        <div className="hero-title-container">
          <h1 id="title">
            Competition<span className="title-red"> Teams </span>
          </h1>
          <p>
            CFI's Competition teams are group of highly motivated individuals who work round the
            clock to meet challenging deadlines of various competitions.Over the years, our teams
            have bagged prizes both at the national and internattional level
          </p>
        </div>

        <div className="teams" id="top" onClick={this.handleClick}>
          <h1>
            <span className="color2">Raftar </span>Formula Racing
          </h1>
          {this.state.msg && (
            <div id="raftarp">
              <p>
                The Raftar formula racing team is recognized as one of the tireless, most dedicated
                teams at CFI.
              </p>
              <p>
                They bagged a third consecutive podium finish at the Formula Bharat 2018, organized
                at Kari Motor Speedway, Coimbatore during January 24th to January 28th 2018. Raftar
                Formula Racing was placed Third Overall among seventy one teams from all over India,
                while winning the Fuel Efficiency event and placing second in Endurance (22 km run).
                The team’s latest challenger, RFR 18 was also the lightest aero packaged car in the
                competition with a weight of just 178 Kgs.
              </p>
              <p>
                Raftar Formula Racing competed in Formula Student Germany 2018, acclaimed as the
                most prestigious Formula Student Competition in the world, held at the renowned
                Hockenheimring circuit. Raftar was the only Indian team to qualify for this
                prestigious Formula Student Competition. They cleared all rounds of Technical
                Inspection on time and set competitive times in Skidpad.
              </p>
            </div>
          )}
        </div>

        <div className="teams" onClick={this.handleClick}>
          <h1>
            <span className="color2">Team </span>Anveshak
          </h1>
        </div>

        <div className="teams" onClick={this.handleClick}>
          <h1>
            <span className="color2">Team </span>Abhiyan
          </h1>
        </div>

        <div className="teams" id="bottom" onClick={this.handleClick}>
          <h1>
            <span className="color2">Team </span>Avishkar Hyperloop
          </h1>
        </div>
      </div>
    );
  }
}

export default App;
