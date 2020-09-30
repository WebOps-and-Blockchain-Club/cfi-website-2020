import React from "react";
import "./font.css";

class Section1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "",
      width: "",
    };
  }

  Open = (e) => {
    this.setState({
      width: "250px",
      marginLeft: "250px",
    });
  };

  Close = (e) => {
    this.setState({
      width: "0px",
      marginLeft: "0px",
    });
  };

  render() {
    return (
      // Navbar

      <div>
        {/* Section 0 */}
        <div>
          <section
            id="home"
            className="home bg-black fix"
            style={{ marginLeft: this.state.marginLeft }}
          >
            <div className="overlay"></div>
            <div className="container">
              <div className="row">
                <a className="mouse-scroll" href="#about">
                  <span className="mouse">
                    <span className="mouse-movement"></span>
                  </span>
                  <span className="mouse-message fadeIn">Explore</span> <br />
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Section 1 starts */}
        <section
          id="main"
          className="features bg-white"
          style={{ marginLeft: this.state.marginLeft }}
        >
          <div className="container">
            <div className="row">
              <div className="main_features fix roomy-70">
                <div className="col-md-6">
                  <div className="head_title">
                    <h2 className="text-uppercase font1" style={{ fontSize: "38px" }}>
                      <strong>Open House</strong>
                    </h2>
                  </div>
                  <div className="featured_content font2">
                    <strong>
                      To register for the Open House 2019, visit{" "}
                      <a
                        style={{ color: "#db392e" }}
                        href={"https://www.cfi-iitm.com/"}
                        target="__blank"
                      >
                        {" "}
                        https://www.cfi-iitm.com/{" "}
                      </a>
                    </strong>
                    <br />
                    <strong>Date: 2nd November, 2019</strong>
                    <br />
                    <strong>
                      <a
                        style={{ color: "#db392e" }}
                        href={
                          "https://www.google.com/maps/place/New+Academic+Complex/@12.9931254,80.229604,19z/data=!3m1!4b1!4m5!3m4!1s0x3a52677f103957db:0x4a32b8c8b504a9b9!8m2!3d12.9931108!4d80.2303138?hl=en"
                        }
                        target="__blank"
                      >
                        Venue
                      </a>{" "}
                      : New Academic Complex, IIT Madras{" "}
                      <a
                        style={{ color: "#db392e" }}
                        href={
                          "https://www.google.com/maps/dir/13.0066003,80.2425628/12.9908215,80.2299038/New+Academic+Complex+(NAC)+IIT+Madras,+Indian+Institute+Of+Technology,+Chennai,+Tamil+Nadu/@12.9927873,80.2293186,18.16z/data=!4m10!4m9!1m0!1m0!1m5!1m1!1s0x3a52677f11e8841d:0xb6b2c83790db5630!2m2!1d80.2303138!2d12.9931108!3e0?utm_medium=s2email&shorturl=1"
                        }
                        target="__blank"
                      >
                        (Directions)
                      </a>
                    </strong>
                    <br />
                    <br />
                    <p className=" font2">
                      Every year, we host the “Open House”, where we throw open our doors to people
                      from all walks of life to come in and interact with us. We’ll have other
                      students, professors, alumni, industrialists, media and more: making the Open
                      House a trove of opportunities for those who seek it.
                    </p>
                    <br />
                    <p className=" font2">
                      Open House 2019 displayed a plethora of innovative projects taken up by our 10
                      clubs including Artemis- the railroad crack detection bot, Unmanned Aerial
                      Vehicle for disaster management and many others which have bagged national and
                      international honours , as well as work of our 4 internationally acclaimed
                      competition teams – Team Abhiyaan, Team Anveshak, Team Avishkar Hyperloop and
                      Raftar Formula Racing.
                    </p>
                  </div>
                </div>

                <div
                  className="col-md-5 font1"
                  style={{ marginTop: "12.75%", marginLeft: "8.33%" }}
                >
                  <div className="features_item2_area">
                    <div className="features_item2 text-center">
                      <div className="divider_horizontal"></div>
                      <div className="divider_vertical "></div>
                      <div className="col-xs-6 ">
                        <div className="features_item_text ">
                          <img
                            src={require("./components/images/featured1.png")}
                            alt=""
                            className="img-circle"
                          />
                          <p className="m-top-20">Team Abhiyaan</p>
                        </div>
                      </div>
                      <div className="col-xs-6">
                        <div className="features_item_text">
                          <img
                            src={require("./components/images/featured2.png")}
                            alt=""
                            className="img-circle"
                          />
                          <p className="m-top-20">Team Anveshak</p>
                        </div>
                      </div>
                      <div className="col-xs-6">
                        <div className="features_item_text m-top-50">
                          <img
                            src={require("./components/images/featured3.png")}
                            alt=""
                            className="img-circle"
                          />
                          <p className="m-top-20">Team Avishkar Hyperloop</p>
                        </div>
                      </div>
                      <div className="col-xs-6">
                        <div className="features_item_text m-top-50">
                          <img
                            src={require("./components/images/featured4.png")}
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
            </div>
          </div>
        </section>
        {/* Section 1 ends */}

        {/* Section 2 starts*/}
        <section
          id="main"
          className="service bg-grey roomy-70"
          style={{ marginLeft: this.state.marginLeft }}
        >
          <div className="container">
            <div className="row">
              <div className="main_service">
                <div className="col-md-6">
                  <div className="service_slid">
                    <div className="slid_shap bg-red"></div>
                    <div className="service_slid_item text-center font1">
                      <div className="service_slid_text">
                        <img src={require("./components/images/conf.jpg")} alt="" />
                        <h5 className="text-black m-top-20"> CFI </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="service_item sm-m-top-50">
                    <div className="head_title">
                      <h2 className="text-uppercase font1" style={{ fontSize: "38px" }}>
                        {" "}
                        <strong>PRESS CONFERENCE 2018</strong>
                      </h2>
                    </div>
                    <div className=" font2">
                      <p className=" font2">
                        On 13th April 2018, a Press Conference was held to create awareness among
                        the media about the Centre for Innovation, and it’s major competition teams:
                        Team Raftar, Team Anveshak, and Team Abhiyaan.
                      </p>
                      <br />
                      <p className=" font2">
                        The Press Conference was addressed by Prof. Bhaskar Ramamurthi, Director,
                        IIT Madras, Prof. Sivakumar M. Srinivasan, Dean, Students, and Prof. R.
                        Nagarajan Dean, International & Alumni Relations. This was followed by the
                        unveiling of the competition teams – Team Raftar, Anveshak and Abhiyaan.
                      </p>
                      <br />
                      <p className=" font2">
                        The Press Conference was well attended by several sponsors of the
                        competition teams and major media bodies.
                      </p>
                      {/* <a href="" class="btn btn-default m-top-40">Read More</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 2 ends */}

        {/* section 3 starts */}
        <section id="main" className="teams roomy-80" style={{ marginLeft: this.state.marginLeft }}>
          <div className="container">
            <div className="row">
              <div className="main_teams_content fix">
                <div className="col-md-6">
                  <div className="teams_item ">
                    <div className="head_title">
                      <h2 className="text-uppercase font1 " style={{ fontSize: "38px" }}>
                        {" "}
                        <strong>RECORD BREAKING!</strong>
                      </h2>
                    </div>
                    <p className="font2">
                      On 29th October 2017, CFI managed to achieve yet another remarkable feat. CFI
                      entered the India Book of Records and Asia Book of Records for the most robots
                      cleaning an area with 45 robots on a 72 square metre area (in Students
                      Activities Centre (SAC)), simultaneously for over fifteen minutes! As many as
                      250 belonging to several disciplines fabricated these robots at the CFI
                      Workshop.
                    </p>
                    <br />
                    <p className="font2">
                      The cleaning robots consisted of a high-RPM motor at its heart with two
                      rotating scrub pads shovelling the dust into the central suction system and a
                      filter in the vacuum tunnel collecting the waste.The robots were controlled
                      over Bluetooth by an app created for the Android system. A proximity
                      ultrasound fixed to the robots ensured that they did not collide.No manual
                      intervention was allowed inside the cleaning area during the exercise.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="teams_item text-center sm-m-top-50">
                    <div className="row">
                      <div className="main_service">
                        <div className="service_slid">
                          <div className="slid_shap bg-red"></div>
                          <div className="service_slid_item text-center">
                            <div className="service_slid_text">
                              {/* <span className="icon icon icon-tools text-black"></span> */}
                              <img src={require("./components/images/events.jpg")} alt="" />
                              <h5 className="text-black m-top-20">Record Breaks</h5>
                            </div>
                            {/* <div className="service_slid_text">
                                        <span className="icon icon icon-sports-2 text-black"></span>
                                         <h5 className="text-black m-top-20">Pic 2</h5>
                                </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 3 ends */}

        {/* footer starts*/}

        <footer
          id="main"
          className="footer action-lage bg-black p-top-80"
          style={{ paddingTop: "2rem", marginLeft: this.state.marginLeft }}
        >
          {/* <!--<div class="action-lage"></div>--> */}
          <div className="container">
            <div className="row">
              <div className="widget_area">
                <div className="col-md-4">
                  <div className="widget_item widget_about">
                    <div className="widget_ab_item m-top-30" style={{ marginTop: "10px" }}>
                      <div className="item_icon" style={{ marginTop: "1.75rem" }}>
                        <i className="fa fa-location-arrow" style={{ color: "white" }}></i>
                      </div>
                      <div className="widget_ab_item_text">
                        <h5 className="font2" style={{ color: "#d93936" }}>
                          Location
                        </h5>
                        <p className="font1" style={{ color: "white" }}>
                          Indian Institute Of Technology, Chennai, Tamil Nadu 600036.
                        </p>
                      </div>
                    </div>
                    <div className="widget_ab_item m-top-30" style={{ marginTop: "10px" }}>
                      <div className="item_icon" style={{ marginTop: "1.75rem" }}>
                        <i className="fa fa-phone" style={{ color: "white" }}></i>
                      </div>
                      <div className="widget_ab_item_text">
                        <h6 className="font2" style={{ color: "#d93936" }}>
                          Phone :
                        </h6>
                        <p className="font1" style={{ color: "white" }}>
                          044 2257 8000
                        </p>
                      </div>
                    </div>
                    <div className="widget_ab_item m-top-30" style={{ marginTop: "10px" }}>
                      <div className="item_icon" style={{ marginTop: "1.7rem" }}>
                        <i className="fa fa-envelope-o" style={{ color: "white" }}></i>
                      </div>
                      <div className="widget_ab_item_text">
                        <h6 className="font2" style={{ color: "#d93936" }}>
                          Email Address :
                        </h6>
                        <p className="font1" style={{ color: "white" }}>
                          cfi@smail.iitm.ac.in
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- End off widget item --> */}
                </div>
                {/* <!-- End off col-md-3 --> */}

                <div className="col-md-4">
                  <div className="widget_item widget_service sm-m-top-50">
                    <h5 className="font2" style={{ color: "#d93936" }}>
                      Latest News
                    </h5>
                    <ul className="m-top-20">
                      <li className="m-top-20">
                        {" "}
                        <a href="https://www.youtube.com/" className="font1">
                          <i className="fa fa-angle-right"></i> Open House
                        </a>
                      </li>
                      <li className="m-top-20">
                        {" "}
                        <a href="https://www.youtube.com/" className="font1">
                          <i className="fa fa-angle-right"></i> Press Conference 2018
                        </a>
                      </li>
                      <li className="m-top-20">
                        {" "}
                        <a href="https://www.youtube.com/" className="font1">
                          <i className="fa fa-angle-right"></i> Record Breaking{" "}
                        </a>
                      </li>
                      <li className="m-top-20">
                        {" "}
                        <a href="https://www.youtube.com/" className="font1">
                          <i className="fa fa-angle-right"></i> CFI Family
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- End off widget item --> */}
                </div>
                {/* <!-- End off col-md-3 --> */}

                <div className="col-md-4">
                  <div className="widget_item widget_newsletter sm-m-top-50">
                    <h5 className="font2" style={{ color: "#d93936" }}>
                      Newsletter
                    </h5>
                    <form className="form-inline m-top-30">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter you Email"
                        />
                        <button type="submit" className="btn text-center">
                          <i className="fa fa-arrow-right"></i>
                        </button>
                      </div>
                    </form>
                    <div className="widget_brand m-top-10">
                      <img
                        src={require("./components/images/Logo_CFI.png")}
                        alt=""
                        style={{ width: "100px", marginLeft: "50px", marginBottom: "12px" }}
                      />
                      {/* <a ref="https://www.youtube.com/" className="text-uppercase">Your Logo</a> */}
                      <p className="font1" style={{ color: "white" }}>
                        {" "}
                        <span style={{ color: "#d93936" }}> Center </span> For Innovation , IIT
                        Madras.
                      </p>
                    </div>
                    <ul className="list-inline m-top-10">
                      <li>
                        -{" "}
                        <a href="https://www.youtube.com/">
                          <i className="fa fa-facebook" style={{ color: "white" }}></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/">
                          <i className="fa fa-twitter" style={{ color: "white" }}></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/">
                          <i className="fa fa-linkedin" style={{ color: "white" }}></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/">
                          <i className="fa fa-google-plus" style={{ color: "white" }}></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/">
                          <i className="fa fa-behance" style={{ color: "white" }}></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/">
                          <i className="fa fa-dribbble" style={{ color: "white" }}></i>
                        </a>{" "}
                        -{" "}
                      </li>
                    </ul>
                  </div>
                  {/* <!-- End off widget item --> */}
                </div>
                {/* <!-- End off col-md-3 --> */}
              </div>
            </div>
          </div>
        </footer>
        {/* footer ends*/}
      </div>
    );
  }
}

export default Section1;
