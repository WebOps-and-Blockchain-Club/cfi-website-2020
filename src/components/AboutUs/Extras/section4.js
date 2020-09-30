import React from "react";

class Section4 extends React.Component {
  render() {
    return (
      <section id="choose" className="choose bg-grey roomy-80">
        <div className="container">
          <div className="row">
            <div className="main_choose">
              <div className="col-md-6">
                <div className="choose_mac">
                  <div className="choose_slide">
                    <div className="choose_item">
                      <img src={require("./components/images/choose-img1.png")} alt="" />
                    </div>
                    {/* <div className="choose_item">
                                                    <img src={require("./components/images/choose-img1.png")} alt="" />
                                                </div>
                                                <div className="choose_item">
                                                    <img src={require("./components/images/choose-img1.png")} alt="" />
                                                </div> */}
                  </div>
                </div>
              </div>
              {/* <!-- End off col-md-6 --> */}

              <div className="col-md-5 col-md-offset-1">
                <div className="choose_content sm-m-top-40">
                  <div className="head_title">
                    <h2 className="text-uppercase" style={{ fontSize: "38px" }}>
                      We Are <strong>CFI</strong>
                    </h2>
                  </div>
                  <div className="choose_item_text fix">
                    <h6>
                      <i className="fa fa-circle red"></i> Walk in with an idea, walk out with a
                      product.
                    </h6>
                    <p>.. </p>
                  </div>
                  <div className="choose_item_text fix m-top-20">
                    <h6>
                      <i className="fa fa-circle red"></i> Support large student team projects.
                    </h6>
                    <p>. </p>
                  </div>
                  <div className="choose_item_text fix m-top-20">
                    <h6>
                      <i className="fa fa-circle red"></i> 24/7 Support.
                    </h6>
                    <p>. </p>
                  </div>
                  <div className="choose_item_text fix m-top-20">
                    <h6>
                      <i className="fa fa-circle red"></i> A futuristic lab environment.
                    </h6>
                    <p>. </p>
                  </div>
                </div>
              </div>
              {/* <!-- End off col-md-6 --> */}
            </div>
          </div>
          {/* <!-- End off row --> */}
        </div>
        {/* <!-- End off container --> */}
      </section>
    );
  }
}

export default Section4;
