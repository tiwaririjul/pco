import React from "react";

const SelectAnnexes = ({ selectedAnnexPan, setSelectedAnnexPan }) => {
  const handleRadioChange = (event) => {
    setSelectedAnnexPan(event.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 mb-3">
          <div className="card border-primary">
            <div className="card-body">
              <h5 className="card-title text-primary">ANNEXES</h5>
              <p className="card-text">
                The establishment and maintenance of international Standards and
                Recommended Practices (SARPs).
              </p>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="annexRadio"
                  name="selection"
                  value="annex"
                  checked={selectedAnnexPan === "annex"}
                  onChange={handleRadioChange}
                />
                <label className="form-check-label" htmlFor="annexRadio">
                  Select Annexes
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card border-secondary">
            <div className="card-body">
              <h5 className="card-title text-secondary">PANS</h5>
              <p className="card-text">
                The establishment and maintenance of international Standards and
                Recommended Practices (PANS).
              </p>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="pansRadio"
                  name="selection"
                  value="pans"
                  checked={selectedAnnexPan === "pans"}
                  onChange={handleRadioChange}
                />
                <label className="form-check-label" htmlFor="pansRadio">
                  Select PANS
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectAnnexes;
