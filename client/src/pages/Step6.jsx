import React from "react";

const Step6 = () => {
  return (
    <div className="step6-container">
      <h4 className="step6-title">Just one more thing…</h4>
      <p className="step6-description">
        Your personal data is safe with us. We’ll send the report with final
        cost estimations to your inbox, so you can access it at any time.
      </p>

      <div className="step6-form-group">
        <label htmlFor="dropdown" className="step6-form-label">
          What industry are you in?
        </label>
        <select id="dropdown" className="step6-select" aria-label="Industry">
          <option value="" selected disabled>
            Please choose
          </option>
          <option value="1">Advertising</option>
          <option value="2">Business Administration & Support Services</option>
          <option value="3">Construction</option>
          <option value="4">Education</option>
          <option value="5">Finance & Insurance</option>
          <option value="6">Food & Beverages</option>
          <option value="7">Health</option>
          <option value="8">Marketing & Communications</option>
          <option value="9">Media</option>
          <option value="10">Property</option>
          <option value="11">Publishing</option>
          <option value="12">Tourism & Leisure</option>
          <option value="13">Transport & Storage</option>
          <option value="14">Wholesale & Retail</option>
          <option value="15">Other</option>
        </select>
      </div>

      <div className="step6-form-container">
        <div className="step6-form-group">
          <label htmlFor="firstName" className="step6-form-label">
            First Name
          </label>
          <input type="text" id="firstName" className="step6-input" />
        </div>

        <div className="step6-form-group">
          <label htmlFor="lastName" className="step6-form-label">
            Last Name
          </label>
          <input type="text" id="lastName" className="step6-input" />
        </div>

        <div className="step6-form-group">
          <label htmlFor="email" className="step6-form-label">
            Email
          </label>
          <input type="email" id="email" className="step6-input" />
        </div>

        <div className="step6-form-group">
          <label htmlFor="contact" className="step6-form-label">
            Contact
          </label>
          <input type="text" id="contact" className="step6-input" />
        </div>

        <div className="step6-form-group">
          <label htmlFor="message" className="step6-form-label">
            Message
          </label>
          <input type="text" id="message" className="step6-input" />
        </div>

        <button className="step6-button">Submit</button>
      </div>
    </div>
  );
};

export default Step6;
