import React from "react";

class Section3 extends React.Component {
  render() {
    return (
      <section id="teams" className="teams roomy-80">
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
                    The cleaning robots consisted of a high-RPM motor at its heart with two rotating
                    scrub pads shovelling the dust into the central suction system and a filter in
                    the vacuum tunnel collecting the waste.The robots were controlled over Bluetooth
                    by an app created for the Android system. A proximity ultrasound fixed to the
                    robots ensured that they did not collide.No manual intervention was allowed
                    inside the cleaning area during the exercise.
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
              {/* <!-- End off col-md-6 --> */}
            </div>
            {/* <!-- End off main Team --> */}
          </div>
          {/* <!-- End off row --> */}
        </div>
        {/* <!-- End off container --> */}
      </section>
    );
  }
}

export default Section3;
