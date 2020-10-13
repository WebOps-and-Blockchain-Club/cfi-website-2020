import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../components/images/logo.png";
// import "./font.css";

class Footer extends React.Component {
  render() {
    return (
      <footer
        id="contact"
        className="footer action-lage bg-black p-top-80"
        style={{ paddingTop: "2rem" }}
      >
        {/* <!--<div class="action-lage"></div>--> */}
        <div className="container">
          <div className="row">
            <div className="widget_area">
              <div className="col-md-4">
                <div className="widget_item widget_about">
                  <div
                    className="widget_ab_item m-top-30"
                    style={{ marginTop: "10px" }}
                  >
                    <div className="item_icon" style={{ marginTop: "1.75rem" }}>
                      <i
                        className="fa fa-location-arrow"
                        style={{ color: "white" }}
                      ></i>
                    </div>
                    <div className="widget_ab_item_text">
                      <h5 className="font2" style={{ color: "#d93936" }}>
                        Location
                      </h5>
                      <p className="font1" style={{ color: "white" }}>
                        Indian Institute Of Technology, Chennai, Tamil Nadu
                        600036.
                      </p>
                    </div>
                  </div>
                  <div
                    className="widget_ab_item m-top-30"
                    style={{ marginTop: "10px" }}
                  >
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
                  <div
                    className="widget_ab_item m-top-30"
                    style={{ marginTop: "10px" }}
                  >
                    <div className="item_icon" style={{ marginTop: "1.7rem" }}>
                      <i
                        className="fa fa-envelope-o"
                        style={{ color: "white" }}
                      ></i>
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
                        <i className="fa fa-angle-right"></i> Press Conference
                        2018
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
                  <div className="widget_brand m-top-40">
                    <a
                      ref="https://www.youtube.com/"
                      className="text-uppercase"
                    >
                      Your Logo
                    </a>
                    <p className="font1" style={{ color: "white" }}>
                      {" "}
                      <span style={{ color: "#d93936" }}> Center </span> For
                      Innovation , IIT Madras.
                    </p>
                  </div>
                  <ul className="list-inline m-top-20">
                    <li>
                      -{" "}
                      <a href="https://www.youtube.com/">
                        <i
                          className="fa fa-facebook"
                          style={{ color: "white" }}
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/">
                        <i
                          className="fa fa-twitter"
                          style={{ color: "white" }}
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/">
                        <i
                          className="fa fa-linkedin"
                          style={{ color: "white" }}
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/">
                        <i
                          className="fa fa-google-plus"
                          style={{ color: "white" }}
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/">
                        <i
                          className="fa fa-behance"
                          style={{ color: "white" }}
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/">
                        <i
                          className="fa fa-dribbble"
                          style={{ color: "white" }}
                        ></i>
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
    );
  }
}

export default Footer;
