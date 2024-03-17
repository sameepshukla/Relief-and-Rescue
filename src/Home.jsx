import React from "react";
import Carousel from "./components/Carousal";
// import photo2 from "../assets/photo2.jpeg";
// import photo1 from "../assets/photo1.jpeg";

const Volunteer = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div className="left" style={{width:'1000px'}}>
          <img
            style={{ height: "500px", paddingTop: "50px" }}
            src="https://s758dc.a2cdn1.secureserver.net/wp-content/uploads/2023/04/flood_insurance-2048x1365.jpeg"
            alt="rescue operation image here"
          />
        </div>
        <div className="right">
          <h2
            style={{
              paddingTop: "100px",
              fontFamily: "gilroy",
              fontSize: "97px",
              fontWeight: "900",
              color: "#334195",
            }}
          >
            Relief and Rescue{" "}
          </h2>
          <p style={
            {width:'500px', color:'#647AA3'}
          }>
            Discover a central hub for connecting with vital rescue agencies
            aiding both humans and animals during natural disasters. From floods
            to wildfires, earthquakes to hurricanes, our platform is your go-to
            resource for finding assistance, volunteering, or learning more
            about these invaluable efforts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
