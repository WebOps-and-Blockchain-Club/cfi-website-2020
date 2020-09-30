import React from "react";
import './App.css';
import './components/css/slick.css';
import './components/css/slick-theme.css';
import './components/css/animate.css';
import './components/css/iconfont.css';
import './components/css/font-awesome.min.css';
import './components/css/bootstrap.css';
import './components/css/magnific-popup.css';
import './components/css/bootsnav.css';
import { Navbar, Nav } from "react-bootstrap";
import logo from "./components/images/logo.png";
// import "./font.css";
import Navigationbar from "./navbar";
import Section0 from "./Extras/section0";
import Section1 from "./section1";


class Content extends React.Component {
    render() {
        return (
            <div>

        
                    {/* section 1  */}
                    <Section1/>
                    {/* end of section 1 */}

                    
                </div>      
        );
      }
  }


export default Content;