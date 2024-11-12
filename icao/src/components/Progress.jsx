import React, { useState } from "react";
// import { ProgressBar } from "react-bootstrap";
import "../App.css";
import Stages from "./Stages";
import { ancProgresBarContents } from "../utils/data";

const Progress = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < ancProgresBarContents.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div
      className="container"
      style={{ position: "relative", minHeight: "100vh" }}
    >
      <div className="stepper">
        {ancProgresBarContents.map((ancProgresBarContent) => (
          <div
            className={`step ${
              currentStep === ancProgresBarContent.index ? "active" : ""
            } ${currentStep > ancProgresBarContent.index ? "completed" : ""}`}
            key={ancProgresBarContent.index}
          >
            <div
              className="step-icon"
              onClick={() => setCurrentStep(ancProgresBarContent.index)}
            >
              {ancProgresBarContent.icon}
            </div>
            <div className="step-text">
              {ancProgresBarContent.content}
              {currentStep > ancProgresBarContent.index && (
                <i className="fas fa-check-circle"></i>
              )}
            </div>
          </div>
        ))}
      </div>

      <Stages stage={currentStep} />

      {/* Display the Confirm button only on steps 6 and 7 */}
      {(currentStep === 6 || currentStep === 7) && (
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleNext}
          style={{
            position: "absolute",
            right: "20px",
            bottom: "20px",
            marginTop: "20px",
          }}
        >
          CONFIRM
        </button>
      )}

      <div className="navigation-buttons" style={{ marginTop: "30px" }}>
        {/* Display the Previous button on all steps except the first one */}
        <button onClick={handlePrev} disabled={currentStep === 1}>
          Previous
        </button>

        {/* Display the Next button on all steps except 6 and 7 */}
        {currentStep < 6 && (
          <button
            onClick={handleNext}
            disabled={currentStep === ancProgresBarContents.length}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Progress;
