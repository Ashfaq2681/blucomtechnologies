import React, { useState } from "react";
// import { multiStepForm } from "../pages/MultiStepForm";
// import ('dotenv').config();
// const REACT_APP_INTERNSL_API_URL = process.env.REACT_APP_INTERNSL_API_URL;
// REACT_APP_INTERNSL_API_URL = "";  

// module.exports = {
//   REACT_APP_INTERNSL_API_URL}

const Step6 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    const data = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      contact: formData.contact,
      message: formData.message,
    };
    try {
      const responce = await fetch(`http://localhost:5000/multiStepForm`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        
      });
      console.log("Response:", responce);
      

    } catch (error) {
      return console.error("Error:", error);
    }

   
    setSuccess("Form submitted successfully");
  };

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

      <form className="multiStepForm" onSubmit={handleSubmit}>
        <div className="step6-form-container">
          <div className="step6-form-group">
            <label htmlFor="firstName" className="step6-form-label">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="step6-input"
              required
            />
          </div>

          <div className="step6-form-group">
            <label htmlFor="lastName" className="step6-form-label">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="step6-input"
              required
            />
          </div>

          <div className="step6-form-group">
            <label htmlFor="email" className="step6-form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="step6-input"
              required
            />
          </div>

          <div className="step6-form-group">
            <label htmlFor="contact" className="step6-form-label">
              Contact
            </label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="step6-input"
              required
            />
          </div>

          <div className="step6-form-group">
            <label htmlFor="message" className="step6-form-label">
              Message
            </label>
            <input
              type="text"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange} 
              className="step6-input"
            />
          </div>

          <button type="submit" className="step6-button">
            Submit
          </button>
          {success && <p style={{ color: "green" }}>{success}</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default Step6;
