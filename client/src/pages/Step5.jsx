import React from "react";

const Step5 = () => {
  return (
    <div className="step5-container">
      <h4 className="step5-title">
        End-of-year bonanza is just around that spreadsheet...
      </h4>
      <p className="step5-description">
        It’s still a long shot... but end-of-year tasks are super important and
        need to be taken into account early. A good start is half the battle!
      </p>

      <div className="step5-checkbox-group">
        <div className="step5-form-group">
          <input
            className="step5-checkbox"
            type="checkbox"
            id="filingTaxReturns"
          />
          <label className="step5-label" htmlFor="filingTaxReturns">
            Filing Tax Returns
          </label>
        </div>

        <div className="step5-form-group">
          <input
            className="step5-checkbox"
            type="checkbox"
            id="financialAudit"
          />
          <label className="step5-label" htmlFor="financialAudit">
            Financial Audit
          </label>
        </div>
      </div>

      <div className="step5-checkbox-group">
        <div className="step5-form-group">
          <input
            className="step5-checkbox"
            type="checkbox"
            id="corporateReturns"
          />
          <label className="step5-label" htmlFor="corporateReturns">
            Filing Corporate Returns (Co House)
          </label>
        </div>

        <div className="step5-form-group">
          <input
            className="step5-checkbox"
            type="checkbox"
            id="businessStrategy"
          />
          <label className="step5-label" htmlFor="businessStrategy">
            Business Strategy (Next 12 Months)
          </label>
        </div>
      </div>
    </div>
  );
};

export default Step5;
