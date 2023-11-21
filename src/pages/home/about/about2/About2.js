import React from "react";
import "./About2.css";

const About2 = () => {
  return (
    <div class="card-wrapper">
      <div class="harvey"></div>
      <div className="about2-title">
        <h6 className="about2-title1">ABOUT OUR COMPANY</h6>
        <hr className="about2-titlehr" />
        <h2 className="about2-title2">Our success formula is D³</h2>
        <p className="about2-intro-para1">
          We’re a young and talented group of entrepreneurs and engineers with a
          groundbreaking idea designed to contribute towards a better tomorrow.
          We provide smart solutions for companies of all sizes and pride
          ourselves on our unparalleled, dedicated service. At Cosecant Inc, we
          believe that the right understanding and technological edge can lead
          companies towards a successful future.
        </p>
      </div>
      <div className="about2-box">
        <div class="about2-box-icon">
          <span class="about2-box-icon1"></span>
        </div>
        <h5 className="about2-box-name1">
          <strong>
            Great results, can be achieved with
            <br /> small forces.
          </strong>
        </h5>
      </div>
      <div className="discover-button">
        <a className="discoverbutton1" href="/Services">
          <span className="service-page-button"> DISCOVER MORE</span>
        </a>
      </div>
      <div className="startup">
        <h5 className="startup-para">
          High
          <br /> Quality IT
          <br /> Solutions
          <br />
          for Startup
        </h5>
        <a className="startup-contact" href="/Contact Us">
          CONTACT US ➞
        </a>
      </div>
    </div>
  );
};

export default About2;
