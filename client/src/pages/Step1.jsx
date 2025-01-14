import React from "react";

const BusinessIdeas = () => {
  return (
    <div className="business-ideas-container">
      <h4 className="business-ideas-title">Your story is your brand. What’s it gonna be?</h4>
      <p className="business-ideas-description">
        A brand is so much more than just a logo. When you have your mission and vision figured out, move on to developing your company’s DNA.
      </p>

      <div className="business-ideas-form-group">
        <input className="business-ideas-checkbox" type="checkbox" value="" id="checkBrandIdentity" />
        <label className="business-ideas-label" htmlFor="checkBrandIdentity">
          Brand Identity
        </label>
      </div>

      <div className="business-ideas-form-group">
        <input className="business-ideas-checkbox" type="checkbox" value="" id="checkLogoDesign" />
        <label className="business-ideas-label" htmlFor="checkLogoDesign">
          Logo Design
        </label>
      </div>

      <div className="business-ideas-form-group">
        <input className="business-ideas-checkbox" type="checkbox" value="" id="checkBusinessCard" />
        <label className="business-ideas-label" htmlFor="checkBusinessCard">
          Business Card Design
        </label>
      </div>

      <div className="business-ideas-form-group">
        <input className="business-ideas-checkbox" type="checkbox" value="" id="checkPresentation" />
        <label className="business-ideas-label" htmlFor="checkPresentation">
          Presentation Design
        </label>
      </div>

      <div className="business-ideas-form-group">
        <input className="business-ideas-checkbox" type="checkbox" value="" id="checkPackaging" />
        <label className="business-ideas-label" htmlFor="checkPackaging">
          Packaging Design
        </label>
      </div>

      <div className="business-ideas-form-group">
        <input className="business-ideas-checkbox" type="checkbox" value="" id="checkStationery" />
        <label className="business-ideas-label" htmlFor="checkStationery">
          Business Stationery Design
        </label>
      </div>
    </div>
  );
};

export default BusinessIdeas;
