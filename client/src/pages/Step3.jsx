import React from "react";
const Step3 = () => {
  return (
    <div className="step3-container">
      <h4 className="step3-title">Take your brand for a test drive!</h4>
      <p className="step3-description">
        Now that you’re pretty much set up, it’s time to get out there and make yourself seen. Let’s do some marketing!
      </p>

      <div className="step3-checkbox-group">
        <div className="step3-form-group">
          <input className="step3-checkbox" type="checkbox" id="prPressRelease" />
          <label className="step3-label" htmlFor="prPressRelease">
            PR & Press Release Writing
          </label>
        </div>
        <div className="step3-form-group">
          <input className="step3-checkbox" type="checkbox" id="explainerVideo" />
          <label className="step3-label" htmlFor="explainerVideo">
            Explainer Video
          </label>
        </div>
      </div>

      <div className="step3-checkbox-group">
        <div className="step3-form-group">
          <input className="step3-checkbox" type="checkbox" id="socialMediaGraphics" />
          <label className="step3-label" htmlFor="socialMediaGraphics">
            Social Media Graphics
          </label>
        </div>
        <div className="step3-form-group">
          <input className="step3-checkbox" type="checkbox" id="socialMediaManagement" />
          <label className="step3-label" htmlFor="socialMediaManagement">
            Social Media Management
          </label>
        </div>
      </div>

      <div className="step3-checkbox-group">
        <div className="step3-form-group">
          <input className="step3-checkbox" type="checkbox" id="newsletterDesign" />
          <label className="step3-label" htmlFor="newsletterDesign">
            Newsletter Design
          </label>
        </div>
        <div className="step3-form-group">
          <input className="step3-checkbox" type="checkbox" id="emailMarketing" />
          <label className="step3-label" htmlFor="emailMarketing">
            Email Marketing
          </label>
        </div>
      </div>

      <div className="step3-checkbox-group  ">
        <div className="step3-form-group ">
          <input className="step3-checkbox" type="checkbox" id="leadGeneration" />
          <label className="step3-label" htmlFor="leadGeneration">
            Lead Generation/Sales
          </label>
        </div>
        <div className="step3-form-group">
          <input className="step3-checkbox" type="checkbox" id="customerAcquisition" />
          <label className="step3-label" htmlFor="customerAcquisition">
            Customers Contact Acquisition
          </label>
        </div>
      </div>

      <div className="step3-checkbox-group ">
        <div className="step3-form-group ">
          <input className="step3-checkbox" type="checkbox" id="googleAdwords" />
          <label className="step3-label" htmlFor="googleAdwords">
            Google AdWords
          </label>
        </div>
        <div className="step3-form-group">
          <input className="step3-checkbox" type="checkbox" id="flyerDesign" />
          <label className="step3-label" htmlFor="flyerDesign">
            Flyer Design
          </label>
        </div>
      </div>
    </div>
  );
};

export default Step3;
