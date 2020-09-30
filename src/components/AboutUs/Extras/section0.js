import React from "react";

class Section0 extends React.Component {
    render() {
        return (
            <div>

            <section id="home" className="home bg-black fix" >
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        {/* <div className="main_home text-center">
                            <div className="col-md-12">
                                <div className="hello">
                                    <div className="slid_item">
                                        <div className="home_text ">
                                            <h1 style={{color:"white"}}>Centre <span className="text-red">For Innovation</span></h1>
                                            <h3 className="text-white text-uppercase">Walk in with an idea, walk out with a product </h3>
                                        </div>
                                    </div>
                                    {/* <!-- End off slid item --> 

                                </div>
                            </div>
                        </div> */}

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
        );
      }
  }


export default Section0;