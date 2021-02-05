import React, { Component } from "react";

class App extends Component {
  state = {
    msga: true,
    clicka: 0,
    msgb: true,
    clickb: 0,
    msgc: true,
    clickc: 0,
    msgd: true,
    clickd: 0,
  };

  handleClicka = () => {
    this.setState({ clicka: this.state.clicka + 1 });
    if (this.state.clicka % 2 === 1) {
      this.setState({ msga: true });
    } else {
      this.setState({ msga: false });
    }
  };
  handleClickb = () => {
    this.setState({ clickb: this.state.clickb + 1 });
    if (this.state.clickb % 2 === 1) {
      this.setState({ msgb: true });
    } else {
      this.setState({ msgb: false });
    }
  };
  handleClickc = () => {
    this.setState({ clickc: this.state.clickc + 1 });
    if (this.state.clickc % 2 === 1) {
      this.setState({ msgc: true });
    } else {
      this.setState({ msgc: false });
    }
  };
  handleClickd = () => {
    this.setState({ clickd: this.state.clickd + 1 });
    if (this.state.clickd % 2 === 1) {
      this.setState({ msgd: true });
    } else {
      this.setState({ msgd: false });
    }
  };

  render() {
    return (
      <div>
        <div className="team-container">
          <div className="teamsss" id="bottom" onClick={this.handleClickd}>
            <h1>
              <span className="color2"></span>
            </h1>
            {this.state.msgd && <div id="ctp"></div>}
          </div>
        </div>
        <div
          className="col-md-5-font1"
          style={{ marginTop: "12.75%", marginLeft: "8.33%" }}
        >
          <div className="features_item2_area">
            <div className="features_item2 text-center">
              <div className="divider_horizontal"></div>
              <div className="divider_vertical "></div>
              <div className="col-xs-6 ">
                <div className="features_item_text ">
                  <img
                    src={require("../AboutUs/components/images/featured1.png")}
                    alt=""
                    className="img-circle"
                  />
                  <p className="m-top-20">Team Abhiyaan</p>
                </div>
              </div>
              <div className="col-xs-6">
                <div className="features_item_text">
                  <img
                    src={require("../AboutUs/components/images/featured2.png")}
                    alt=""
                    className="img-circle"
                  />
                  <p className="m-top-20">Team Anveshak</p>
                </div>
              </div>
              <div className="col-xs-6">
                <div className="features_item_text m-top-50">
                  <img
                    src={require("../AboutUs/components/images/featured3.png")}
                    alt=""
                    className="img-circle"
                  />
                  <p className="m-top-20">Team Avishkar Hyperloop</p>
                </div>
              </div>
              <div className="col-xs-6">
                <div className="features_item_text m-top-50">
                  <img
                    src={require("../AboutUs/components/images/featured4.png")}
                    alt=""
                    className="img-circle"
                  />
                  <p className="m-top-20"> Raftar Formula Racing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
