import React from "react";
import { NavLink} from "react-router-dom";
import Home from "./Home";
import Volunteer from "./components/Volunteer";
import Agency from "./components/Agency";

const Navbar = () => {
  return (
    <div >
    <div style={{height:'80px',backgroundColor:'whitesmoke',borderRadius:'10px', width:'100vw' ,fontFamily:"gilroy", padding:'20px',fontWeight:'600', color:'#020887', fontSize:'19px', alignItems:'center',justifyContent:'space-around', display:'flex'}} >

      <NavLink className={(e) => (e.isActive ? "red" : "")} to='/'>Home</NavLink>
      <NavLink className={(e) => (e.isActive ? "red" : "")} to='/volunteer'>Volunteer Here</NavLink>
      <NavLink className={(e) => (e.isActive ? "red" : "")} to='/agency'>Find Agencies</NavLink>
    </div>
    </div>
  );
};

export default Navbar;
