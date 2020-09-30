import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "./components/images/logo.png";
import "./font.css";


class Navigationbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: "",
      width:"",
    }
  }


  Open = (e) => {
    this.setState({
      bgColor: "red",
      width : "250px"
    })
  }

  Close = (e) => {
    this.setState({
      bgColor: "black",
      width : "0px"
    })
  }
    render() {
        return (
          <div>
         <div id="mySidebar" class="sidebar" style={{width: this.state.width}}>
         <a class="closebtn" value={this.props.width}
          onClick={this.Close}  >×</a>
         <a href="#">About</a>
         <a href="#">Services</a>
         <a href="#">Clients</a>
         <a href="#">Contact</a>
        </div>
        <div id="main">
        <button class="openbtn" style={{backgroundColor: this.state.bgColor}}
           onClick={this.Open} >☰ Menu</button>  
        </div>

        </div> 
        
        );
      }
  }
  

export default Navigationbar;