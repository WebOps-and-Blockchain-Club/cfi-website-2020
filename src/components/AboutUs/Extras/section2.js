import React from "react";
// import "./font.css";

class Section2 extends React.Component {
  render() {
    return (
      <section id="service" className="service bg-grey roomy-70">
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
                      On 13th April 2018, a Press Conference was held to create awareness among the
                      media about the Centre for Innovation, and it’s major competition teams: Team
                      Raftar, Team Anveshak, and Team Abhiyaan.
                    </p>
                    <br />
                    <p className=" font2">
                      The Press Conference was addressed by Prof. Bhaskar Ramamurthi, Director, IIT
                      Madras, Prof. Sivakumar M. Srinivasan, Dean, Students, and Prof. R. Nagarajan
                      Dean, International & Alumni Relations. This was followed by the unveiling of
                      the competition teams – Team Raftar, Anveshak and Abhiyaan.
                    </p>
                    <br />
                    <p className=" font2">
                      The Press Conference was well attended by several sponsors of the competition
                      teams and major media bodies.
                    </p>
                    {/* <a href="" class="btn btn-default m-top-40">Read More</a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Section2;
