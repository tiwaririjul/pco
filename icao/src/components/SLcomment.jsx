import React, { useState, useEffect } from "react";
import PdfViewer from "./PdfViewer";
import { states } from "../utils/data";
import { toast } from "react-toastify";
import { comments as commentData } from "../utils/data";

const SLComment = ({
  selectedPdf,
  selectedAnnexId,
  selectedChapterId,
  selectedProvision,
  userType,
  trackView,
  commentToShow,
  remarkToShow,
}) => {
  const [detail, setDetail] = useState({});
  const [selectedState, setSelectedState] = useState("");
  const [comments, setComments] = useState({
    compliance: "",
    stateReference: "",
    detailsOfDifference: "",
    remarks: "",
  });

  const [commentsBySecretriate, setCommentsBySecretriate] = useState({
    comment: "",
    remark: "",
  });
  const [commentsByAnc, setCommentsByAnc] = useState({
    comment: "",
    remark: "",
  });

  //changes

  /////////

  const handlePdfChange = (e) => {
    setSelectedState(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setComments((prevComments) => ({
      ...prevComments,
      [name]: value,
    }));
  };

  const handleSecretriateChange = (e) => {
    const { name, value } = e.target;
    setCommentsBySecretriate((prevComments) => ({
      ...prevComments,
      [name]: value,
    }));
  };

  const handleAncChange = (e) => {
    const { name, value } = e.target;
    setCommentsByAnc((prevComment) => ({
      ...prevComment,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const index = selectedPdf?.provisionId;
    const pdfContent = String(selectedPdf?.pdfPath);

    const detailsToStore = {
      state: selectedState,
      pdfIndex: pdfContent,
      comments: comments,
      provisionNo: index,
      annexId: selectedAnnexId,
      chapterId: selectedChapterId,
      provisionId: selectedProvision.provisionId,
    };

    setDetail((prevDetails) => ({
      ...prevDetails,
      [index]: detailsToStore.state,
    }));

    // localStorage.setItem(
    //   `${selectedState}'s'${index}`,
    //   JSON.stringify(detailsToStore)
    // );

    // const saveData = `${selectedState}'s'${index}`;

    const keyToStore = `${selectedState}'s'${index}`;

    localStorage.setItem(keyToStore, JSON.stringify(detailsToStore));

    let storedKeysArray =
      JSON.parse(localStorage.getItem("storedKeysArray")) || [];

    if (!storedKeysArray.includes(keyToStore)) {
      storedKeysArray.push(keyToStore);
      localStorage.setItem("storedKeysArray", JSON.stringify(storedKeysArray));
    }

    setSelectedState("");
    setComments({
      compliance: "",
      stateReference: "",
      detailsOfDifference: "",
      remarks: "",
    });

    toast.success("Your comment has been saved", {
      autoClose: 3000,
      closeOnClick: true,
    });
  };

  const handleSecretriateInput = () => {
    if (String(commentsBySecretriate).trim() !== "") {
      const keyToStore = `S${selectedProvision.provisionId}`;

      localStorage.setItem(keyToStore, JSON.stringify(commentsBySecretriate));

      let storedKeysArray =
        JSON.parse(localStorage.getItem("storedKeysArray")) || [];

      if (!storedKeysArray.includes(keyToStore)) {
        storedKeysArray.push(keyToStore);
        localStorage.setItem(
          "storedKeysArray",
          JSON.stringify(storedKeysArray)
        );
      }
    } else {
      alert("Secretriate comments cannot be empty");
    }

    setCommentsBySecretriate({
      comment: "",
      remark: "",
    });
  };

  const handleAncInput = () => {
    if (String(commentsByAnc).trim() !== "") {
      const keyToStore = `A${selectedProvision.provisionId}`;

      localStorage.setItem(keyToStore, JSON.stringify(commentsByAnc));

      let storedKeysArray =
        JSON.parse(localStorage.getItem("storedKeysArray")) || [];

      if (!storedKeysArray.includes(keyToStore)) {
        storedKeysArray.push(keyToStore);
        localStorage.setItem(
          "storedKeysArray",
          JSON.stringify(storedKeysArray)
        );

        setCommentsByAnc({
          comment: "",
          remark: "",
        });
      }
    } else {
      alert("ANC comments cannot be empty");
    }

    setCommentsByAnc({
      comment: "",
      remark: "",
    });
  };

  useEffect(() => {
    const provisionData = commentData.find(
      (item) => item.provisionId === selectedPdf?.provisionId
    );

    if (provisionData && provisionData.SecretaryComments)
      setCommentsBySecretriate({
        comment: provisionData.SecretaryComments.Analysis,
        remark: provisionData.SecretaryComments.Recommendation,
      });
  }, [selectedPdf]);

  return (
    <div className="container mt-4">
      <div className="row">
        <div
          className="col-md-6 mb-4"
          style={userType === "slview" ? { width: "100%" } : {}}
        >
          <div className="pdf-container border rounded p-3">
            <PdfViewer pdfUrl={String(selectedPdf.pdfPath)} />
          </div>
        </div>

        <div className="col-md-6">
          {userType !== "slview" &&
            userType !== "anc" &&
            userType !== "secretriat" && (
              <div className="d-flex justify-content-end mb-3 pe-3">
                <select
                  className="btn btn-light"
                  id="status"
                  value={selectedState}
                  onChange={handlePdfChange}
                >
                  <option value="">Select State</option>
                  {states.map((elem) => (
                    <option key={elem.index} value={elem.state}>
                      {elem.state}
                    </option>
                  ))}
                </select>
              </div>
            )}

          <form onSubmit={handleSubmit}>
            {userType == "state" && (
              <>
                <div className="mb-3">
                  <label className="form-label fw-bold">
                    Compliance Options
                  </label>
                  {[
                    "Not applicable",
                    "Agree with/without comments",
                    "Agree subject to change",
                    "Disagree",
                  ].map((option) => (
                    <div className="form-check" key={option}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="compliance"
                        id={option}
                        value={option}
                        onChange={handleInputChange}
                      />
                      <label className="form-check-label" htmlFor={option}>
                        {option}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="mb-3">
                  <label htmlFor="language" className="form-label fw-bold">
                    Select Language
                  </label>
                  <select
                    className="form-select"
                    id="language"
                    name="language"
                    // value={selectedLanguage}
                    // onChange={handleLanguageChange}
                  >
                    <option value="">Choose Language</option>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="zh">Chinese</option>
                    {/* Add more languages as needed */}
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="commnt/just" className="form-label">
                    Comments/Justifications(including safety/cost benefits and
                    implementation issues)
                  </label>
                  <textarea
                    className="form-control"
                    id="commnt/just"
                    name="commnt/just"
                    rows="4"
                    value={comments.commntJust}
                    onChange={handleInputChange}
                    // placeholder="Enter state reference here"
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label htmlFor="proposetext" className="form-label">
                    Proposed Text(Please provide alternative text to amendment
                    proposal)
                  </label>
                  <textarea
                    className="form-control"
                    id="proposetext"
                    name="proposetext"
                    rows="4"
                    value={comments.proposetext}
                    onChange={handleInputChange}
                    // placeholder="Please describe the difference clearly and concisely"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  SAVE ENTRY
                </button>
              </>
            )}

            {userType === "secretriat" && (
              <>
                <div className="mb-3">
                  <label htmlFor="commnt/just" className="form-label">
                    Comments/Justifications (including safety/cost benefits and
                    implementation issues)
                  </label>
                  <textarea
                    className="form-control"
                    id="commnt/just"
                    name="comment"
                    rows="7"
                    value={commentsBySecretriate.comment}
                    onChange={handleSecretriateChange}
                    readOnly
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="proposetext" className="form-label">
                    Proposed Text (Please provide alternative text to amendment
                    proposal)
                  </label>
                  <textarea
                    className="form-control"
                    id="proposetext"
                    name="remark"
                    rows="4"
                    value={commentsBySecretriate.remark}
                    onChange={handleSecretriateChange}
                    readOnly
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="btn btn-primary w-100"
                  onClick={handleSecretriateInput}
                >
                  SAVE ENTRY
                </button>
              </>
            )}
            {userType === "anc" && (
              <>
                <div className="mb-3">
                  <label htmlFor="detailsOfDifference" className="form-label">
                    Write your comment
                  </label>
                  <textarea
                    className="form-control"
                    id="comment"
                    name="comment"
                    rows="9"
                    value={commentsByAnc.comment}
                    onChange={handleAncChange}
                    placeholder="Please describe the difference clearly and concisely"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="remarks" className="form-label">
                    Remarks
                  </label>
                  <textarea
                    className="form-control"
                    id="remarks"
                    name="remark"
                    rows="4"
                    value={commentsByAnc.remark}
                    onChange={handleAncChange}
                    placeholder="Please indicate reasons for the difference and any planned date for implementation"
                  ></textarea>
                </div>

                <button
                  type="button"
                  className="btn btn-primary w-100"
                  onClick={handleAncInput}
                >
                  SAVE ENTRY
                </button>
              </>
            )}

            {trackView && (
              <>
                <div className="mb-3">
                  <label htmlFor="detailsOfDifference" className="form-label">
                    Write your comment
                  </label>
                  <textarea
                    className="form-control"
                    id="comment"
                    name="comment"
                    rows="9"
                    value={commentToShow}
                    placeholder="Please describe the difference clearly and concisely"
                    readOnly
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="remarks" className="form-label">
                    Remarks
                  </label>
                  <textarea
                    className="form-control"
                    id="remarks"
                    name="remark"
                    rows="4"
                    value={remarkToShow}
                    placeholder="Please indicate reasons for the difference and any planned date for implementation"
                    readOnly
                  ></textarea>
                </div>

                <button type="button" className="btn btn-primary w-100">
                  SAVE ENTRY
                </button>
              </>
            )}

            {userType != "slview" && (
              <>
                <div
                  className="policy-section mt-4 p-2 border-top"
                  style={{ fontSize: "0.85rem", color: "#6c757d" }}
                >
                  <p className="mb-1">
                    <strong>Policy:</strong>
                  </p>
                  <ul className="list-unstyled">
                    <li>
                      <strong>1. Not applicable:</strong> The proposed amendment
                      will not require any section since it does not apply to
                      respondent's current civil aviation system.
                    </li>
                    <li>
                      <strong>2. Agree with/without comments:</strong> The
                      respondent accepts the proposed amendment as it is, with
                      comments on safety, cost benefits, and implementation
                      issues.
                    </li>
                  </ul>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SLComment;
