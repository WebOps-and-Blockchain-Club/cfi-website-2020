import React, { Component } from "react";
import "./ct.css";
import "./achievements.css";

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
        <div className="hero-title-container">
          <h1 id="title">
            Competition<span className="title-red"> Teams </span>
          </h1>

          <h5>
            CFI's Competition teams are group of highly motivated individuals
            who work round the clock to meet challenging deadlines of various
            competitions.Over the years, our teams have bagged prizes both at
            the national and internattional level
          </h5>
        </div>
        <div className="team-container">
          <div className="teamsss" id="top" onClick={this.handleClicka}>
            <h1>
              <span className="color2">Raftar Formula Racing</span>
            </h1>
            {this.state.msga && (
              <div id="ctp">
                <h5>
                  The Raftar formula racing team is recognized as one of the
                  tireless, most dedicated teams at CFI.
                </h5>
                <h5>
                  They bagged a third consecutive podium finish at the Formula
                  Bharat 2018, organized at Kari Motor Speedway, Coimbatore
                  during January 24th to January 28th 2018. Raftar Formula
                  Racing was placed Third Overall among seventy one teams from
                  all over India, while winning the Fuel Efficiency event and
                  placing second in Endurance (22 km run). The team’s latest
                  challenger, RFR 18 was also the lightest aero packaged car in
                  the competition with a weight of just 178 Kgs.
                </h5>
                <h5>
                  Raftar Formula Racing competed in Formula Student Germany
                  2018, acclaimed as the most prestigious Formula Student
                  Competition in the world, held at the renowned Hockenheimring
                  circuit. Raftar was the only Indian team to qualify for this
                  prestigious Formula Student Competition. They cleared all
                  rounds of Technical Inspection on time and set competitive
                  times in Skidpad.
                </h5>
              </div>
            )}
          </div>
          {/*  */}
          <div className="teamsss" id="second" onClick={this.handleClickb}>
            <h1>
              <span className="color2">Team Anveshak</span>
            </h1>
            {this.state.msgb && (
              <div id="ctp">
                <h5>
                  Team Anveshak was founded in 2015 with the sole purpose of
                  exploring Field Robotics and foster the robotics culture at
                  IIT Madras. The team has recently finished its 2nd anniversary
                  and has successfully fabricated two variants of the Mars Rover
                  Aurora and is currently working on the third version,which
                  improves upon the issues in the former ones .
                </h5>
                <h5>
                  Team Anveshak aims to represent IIT Madras and India at the
                  Rover Challenge series, an international platform for
                  competitive robotics. The team comprises of 30 highly driven
                  students.
                </h5>
                <h5>
                  <ul>
                    <li>
                      The team represented India in the University Rover
                      Challenge(URC), 2017 at Utah, USA. They were the top 36
                      teams across the world that qualified for URC. Anveshak
                      finished 29th out of 36 teams. They also won a sponsorship
                      of $1000 from Protocase Inc. to manufacture future
                      editions of the rover.
                    </li>
                    <li>
                      In its second attempt, Team Anveshak has finished at 25th
                      position at the 12th edition of University Rover Challenge
                      (URC) 2018 that took place at Hanksville, Utah USA from 41
                      May to 2 June 2018.
                    </li>
                  </ul>
                </h5>
              </div>
            )}
          </div>

          <div className="teamsss" id="third" onClick={this.handleClickc}>
            <h1>
              <span className="color2">Team Abhiyan</span>
            </h1>
            {this.state.msgc && (
              <div id="ctp">
                <h5>
                  The team is working with a mission to create efficient and
                  safe transportation solutions, are trying to build a ground
                  vehicle which is capable of navigating autonomously via GPS
                  way-points.
                </h5>
                <h5>
                  <ul>
                    <li>
                      Team Abhiyaan participated in the Intelligent Ground
                      Vehicle Competition (IGVC-2017) held at Oakland
                      University, Michigan, USA. It was one among the two teams
                      from India which qualified for the competition. After
                      clearing the Design Challenge, they participated in the
                      AutoNav challenge where they were one of the top 13 teams
                      to qualify out of 35.
                    </li>
                    <li>
                      Team Abhiyaan finished 10th overall and 5th in design
                      competition among 36 registered international teams in the
                      26th Intelligent Ground Vehicle Competition (IGVC)
                      organized at Oakland University from 1st to 4th June,
                      2018. Team qualified (only 11 teams could qualify) and
                      completed the IGVC competition securing 5th position in
                      design competition, 10th position in Auto-Nav (Automatic
                      Navigation) Challenge and 10th position in final ranking.
                      They also developed a state of the art path-planning
                      algorithm based on RRT which has been done by only a
                      handful of companies. The team has developed algorithms
                      for lane detection and computer vision that are comparable
                      to the best in the world. Their prototype is so energy
                      efficient that a single battery of 25 Volts can power the
                      vehicle for more than two hours.
                    </li>
                    <li>
                      On March 29th 2018, the team participated in DRDO’s DRUSE
                      (DRDO Robotics and Unmanned Systems Expositions for
                      Defence Applications) challenge. With the same concept of
                      AGV but different stakeholders, team qualified for
                      regional level screening.
                    </li>
                  </ul>
                </h5>
              </div>
            )}
          </div>

          <div className="teamsss" id="bottom" onClick={this.handleClickd}>
            <h1>
              <span className="color2">Team Avishkar Hyperloop</span>
            </h1>
            {this.state.msgd && (
              <div id="ctp">
                <h5>
                  Team Avishkar represents IIT Madras, and India, at SpaceX
                  Hyperloop Pod Competition, an international platform seeking
                  innovations for fifth mode of transportation. The team
                  comprising of 30 highly enthusiastic students is working with
                  a mission to develop very fast and efficient transportation
                  solutions to design the Hyperloop pod.
                </h5>
                <h5>
                  Team Avishkar was one of the top 47 teams across the world, to
                  have successfully cleared the Preliminary Design Phase of
                  SpaceX Hyperloop Pod competition 2018 and qualified for the
                  Final Design Round. The team is now building the Self
                  Propelled, Fully Autonomous Hyperloop Pod for SpaceX Hyperloop
                  Pod Competition 2019. The Team also proposed two projects,
                  Linear Induction Motors powered by Ultra capacitors and
                  Permanent Magnets Levitation for High Speed Transportation, in
                  ICSR Innovative Projects and got approved.
                </h5>
              </div>
            )}
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
