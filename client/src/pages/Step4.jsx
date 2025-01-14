import React from "react";

const Step4 = () => {
  return (
    <div className="step4-container">
      <h4 className="step4-title">
        The not-so-exciting stuff you need to do.
      </h4>
      <p className="step4-description">
        To ensure smooth running of daily operations and take your venture to
        the next level, you need to fine-tune every aspect of the business and
        plan in advance.
      </p>

      <div>
        <div className="step4-checkbox-group">
          <div className="step4-form-group">
            <input
              className="step4-checkbox"
              type="checkbox"
              id="crmImplementation"
            />
            <label className="step4-label" htmlFor="crmImplementation">
              CRM Implementation
            </label>
          </div>
          <div className="step4-form-group">
            <input
              className="step4-checkbox"
              type="checkbox"
              id="employeeContracts"
            />
            <label className="step4-label" htmlFor="employeeContracts">
              Employee Contracts
            </label>
          </div>
        </div>

        <div className="step4-checkbox-group">
          <div className="step4-form-group">
            <input
              className="step4-checkbox"
              type="checkbox"
              id="salesAnalysis"
            />
            <label className="step4-label" htmlFor="salesAnalysis">
              Sales Analysis & Forecasting
            </label>
          </div>
          <div className="step4-form-group">
            <input
              className="step4-checkbox"
              type="checkbox"
              id="virtualPhone"
            />
            <label className="step4-label" htmlFor="virtualPhone">
              Virtual Phone Answering
            </label>
          </div>
        </div>

        <div className="step4-checkbox-group">
          <div className="step4-form-group">
            <input
              className="step4-checkbox"
              type="checkbox"
              id="customerSupport"
            />
            <label className="step4-label" htmlFor="customerSupport">
              Customer Support
            </label>
          </div>
          <div className="step4-form-group">
            <input
              className="step4-checkbox"
              type="checkbox"
              id="monthlyBookkeeping"
            />
            <label className="step4-label" htmlFor="monthlyBookkeeping">
              Monthly Bookkeeping
            </label>
          </div>
        </div>

        <div className="step4-checkbox-group">
          <div className="step4-form-group ">
            <input
              className="step4-checkbox"
              type="checkbox"
              id="vatReturns"
            />
            <label className="step4-label" htmlFor="vatReturns">
              Quarterly VAT Returns
            </label>
          </div>
          <div className="step4-form-group">
            <input
              className="step4-checkbox"
              type="checkbox"
              id="virtualAssistant"
            />
            <label className="step4-label" htmlFor="virtualAssistant">
              Virtual Personal Assistant
            </label>
          </div>
        </div>

        <div className="step4-checkbox-group">
          <div className="step4-form-group">
            <input
              className="step4-checkbox"
              type="checkbox"
              id="accountingSetup"
            />
            <label className="step4-label" htmlFor="accountingSetup">
              Accounting Software Setup
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4;
