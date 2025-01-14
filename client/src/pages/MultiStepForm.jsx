// MultiStepForm.js
import React, { useState } from "react";
import "../assets/css/MultiStepFormStyle.css";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";  
import Step6 from "./Step6";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    if (currentStep < 7) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="multi-step-form">
      <div className="header">
        <h4 className="main-heading">Example with Steps UI</h4>
        <p className="sub-heading">Follow the simple 4 steps to complete your mapping</p>
      </div>

      <div className="steps-container">
        {[1, 2, 3, 4, 5, 6, 7].map((step) => (
          <div key={step} className="step-wrapper">
            <div
              className={`step-icon ${currentStep >= step ? "active-icon" : ""}`}
            >
              {step}
            </div>
            {step < 7 && (
              <div
                className={`step-line ${currentStep > step ? "active-line" : ""} ${currentStep === step ? "animating-line" : ""}`}
              ></div>
            )}
          </div>
        ))}
      </div>

      <div className="content-container">
        {currentStep === 1 && (
          <div>
            <h4 className="step-heading">OK, you got a genius business idea. Now what?</h4>
            <p className="step-description">
              Even the greatest ideas need to be tested. Consider these key tasks in the first stage of setting up a business.
            </p>
            <div className="checkbox-list">
              <div className="checkbox-item">
                <input type="checkbox" id="concept" />
                <label htmlFor="concept">Business Concept</label>
              </div>
              <div className="checkbox-item">
                <input type="checkbox" id="name" />
                <label htmlFor="name">Choosing a Business Name</label>
              </div>
              <div className="checkbox-item">
                <input type="checkbox" id="analysis" />
                <label htmlFor="analysis">Competitor Analysis</label>
              </div>
              <div className="checkbox-item">
                <input type="checkbox" id="plan" />
                <label htmlFor="plan">Business Plan</label>
              </div>
              <div className="checkbox-item">
                <input type="checkbox" id="agreements" />
                <label htmlFor="agreements">Shareholder Agreements</label>
              </div>
            </div>
          </div>
        )}

        {currentStep === 2 && <Step1 />}
        {currentStep === 3 && <Step2 />}
        {currentStep === 4 && <Step3 />}
        {currentStep === 5 && <Step4 />}
        {currentStep === 6 && <Step5 />}
        {currentStep === 7 && <Step6 />}
      </div>

      <div className="navigation-buttons">
        <p className="nav-btn" onClick={handlePrevStep}>Prev</p>
        <p className="nav-btn next-btn" onClick={handleNextStep}>Next</p>
      </div>
    </div>
  );
};

export default MultiStepForm;