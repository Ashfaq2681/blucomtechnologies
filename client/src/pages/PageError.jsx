import React from "react";
import "../assets/css/PageError.css";
import page404img from "../assets/img/logo404.svg";

const PageError = () => {
  return (
    <>
      <div className="page404-main">
        <div>
          <h3 className="page404-heading1">Good</h3>
          {/* <hr className="page404-line" /> */}
          <h3 className="page404-heading2">Things</h3> <br />
          <p className="page404-subheading">Take Time!</p>
          <p className="page404-para lg:max-w-[70%]">
            The website www.blucomtechnologies.com is under construction, going
            under scheduled maintenance. We should be back shortly. Thanks for
            your patience.
          </p>
        </div>
        <div>
          <img src={page404img} alt="404" className="page404-img" />
        </div>
      </div>
    </>
  );
};

export default PageError;
