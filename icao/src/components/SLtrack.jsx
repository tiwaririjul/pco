import React, { useState, useEffect } from "react";
import { annexData } from "../utils/data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SLinputs from "./SLinputs";

const SLtrack = () => {
  const [showSLU, setShowSLU] = useState(false);
  const [showDetailsCS, setShowDetailsCS] = useState(false);
  const [showSA, setShowSA] = useState(true);
  const [indCount, setIndCount] = useState(0);
  const [ukCount, setUkCount] = useState(0);
  const [ausCount, setAusCount] = useState(0);
  const [commentToShow, setCommentToShow] = useState("");
  const [remarkToShow, setRemarkToShow] = useState("");
  const [title, setTitle] = useState("");
  const [document, setDocument] = useState("");
  const [percentages, setPercentages] = useState({
    indPercentage: 0,
    ukPercentage: 0,
    ausPercentage: 0,
  });
  const [overallProgress, setOverAllProgress] = useState();
  const [daysRemaining, setDaysRemaining] = useState();
  const [creationDate, setCreationDate] = useState("");
  useEffect(() => {
    let progressData = JSON.parse(localStorage.getItem("progressData"));

    setTitle(progressData?.stateLetterInfo?.title);
    setDocument("version 178");

    let daysRemain = JSON.parse(localStorage.getItem("daysRemaining"));
    let creationDate = localStorage.getItem("creationDate");
    setDaysRemaining(daysRemain);
    setCreationDate(creationDate);

    let storedKey = JSON.parse(localStorage.getItem("storedKeysArray"));

    console.log("storedKey , ", storedKey);

    if (storedKey && Array.isArray(storedKey)) {
      let indCountTemp = 0;
      let ukCountTemp = 0;
      let ausCountTemp = 0;

      storedKey.forEach((key) => {
        let value = JSON.parse(localStorage.getItem(key));

        if (key.startsWith("IND")) {
          indCountTemp++;
        } else if (key.startsWith("UK")) {
          ukCountTemp++;
        } else if (key.startsWith("Aus")) {
          ausCountTemp++;
        }
      });

      const totalCount = indCountTemp + ukCountTemp + ausCountTemp;

      setIndCount(indCountTemp);
      setUkCount(ukCountTemp);
      setAusCount(ausCountTemp);

      const totalKeys = 15;

      // alert(`${totalCount} ${totalKeys}`);

      const overallPercentage = (totalCount / 45) * 100;

      setOverAllProgress(overallPercentage);

      setPercentages({
        indPercentage: (indCountTemp / totalKeys) * 100,
        ukPercentage: (ukCountTemp / totalKeys) * 100,
        ausPercentage: (ausCountTemp / totalKeys) * 100,
      });
    }
  }, []);

  // for secretriate tracking -----------------------------------------------------

  useEffect(() => {
    const storedKey = JSON.parse(localStorage.getItem("storedKeysArray"));
    const selectedProvision = localStorage.getItem("selectedProvision ");

    console.log("storedKey ", storedKey);
    console.log("selectedProvision ", selectedProvision);

    if (storedKey && selectedProvision) {
      const matchedKey = storedKey.find((key) => {
        console.log("reached");
        if (key.startsWith("S")) {
          const provisionNumber = key.substring(1);
          return provisionNumber === selectedProvision;
        }
        return false;
      });

      if (matchedKey) {
        const valueToShow = JSON.parse(localStorage.getItem(matchedKey));

        console.log("valueToShow ", valueToShow);
        setCommentToShow(valueToShow.comment || "");
        setRemarkToShow(valueToShow.remark || "");
      }
    }
  }, []);

  const countryData = [
    {
      name: "India",
      percentage: percentages.indPercentage,
      pending: 15 - indCount,
    },
    {
      name: "UK",
      percentage: percentages.ukPercentage,
      pending: 15 - ukCount,
    },
    {
      name: "Australia",
      percentage: percentages.ausPercentage,
      pending: 15 - ausCount,
    },
  ];

  const notify = (country) => {
    alert("i am getting clikced");
    toast.success(`Notify has been sent to ${country}`);
  };

  return (
    <div className="container mt-4" style={{ margin: "0 auto" }}>
      <div
        className="d-flex all approval-container "
        style={{
          width: 1200,
          margin: "0 auto",
        }}
      >
        <div
          className="status-badge-green"
          onClick={() => {
            setShowSLU(!showSLU);
            setShowDetailsCS(false);
            setShowSA(false);
          }} // Toggle details on click
          style={{
            cursor: "pointer",
            clipPath: "polygon(0,0, 95% 0, 100% 50%, 95% 100%, 0 100%)", // camelCased clip-path
          }}
        >
          <i className="fas fa-check"></i> State letter Parsing
        </div>

        <div
          className="status-badge-green"
          onClick={() => {
            setShowDetailsCS(!showDetailsCS);
            setShowSLU(false);
            setShowSA(false);
          }}
          style={{ cursor: "pointer" }}
        >
          <i className="fas fa-check"></i> State Comment analysis
        </div>

        <div
          className="status-badge-blue"
          onClick={() => {
            setShowDetailsCS(false);
            setShowSLU(false);
            setShowSA(!showSA);
          }}
          style={{ cursor: "pointer" }}
        >
          <i className="fas fa-history"></i>Secretriate Analysis
        </div>

        <div className="status-badge-gray">
          <i className="fas fa-lock"></i>ANC final Riview
        </div>
      </div>

      <div style={{ width: "1200px", margin: "50px auto" }}>
        {showSLU && (
          <>
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Created at: 19-10-2024
            </p>
            <div
              className="card shadow-lg"
              style={{
                height: "350px",
                margin: "0 auto",
                backgroundColor: "#f8f9fa",
                borderRadius: "15px",
                padding: "20px",
                maxWidth: "600px",
              }}
            >
              <div
                className="card-body"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <h5
                  style={{
                    fontSize: "1.5rem",
                    color: "#343a40",
                    fontWeight: "bold",
                  }}
                >
                  {title}
                </h5>
                <p style={{ fontSize: "1.1rem", color: "#6c757d" }}>
                  Document: {document}
                </p>
                <p style={{ fontSize: "1rem", color: "#6c757d" }}>
                  Created: {creationDate}
                </p>
                <p style={{ fontSize: "1rem", color: "#6c757d" }}>
                  Sent: {creationDate}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
      <div>
        {showDetailsCS && (
          <div
            style={{
              marginTop: "40px",
              margin: "60px auto",
              width: "90%",
              maxWidth: "1200px",
              backgroundColor: "#f9f9f9",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Created at: 19-10-2024
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "#555",
              }}
            >
              Date count down:{" "}
              <span style={{ color: "#d9534f" }}>
                {daysRemaining} days left
              </span>
            </p>
            <p
              style={{
                fontSize: "16px",
                marginBottom: "20px",
              }}
            >
              Total Provision: <span style={{ fontWeight: "bold" }}>15</span>
            </p>

            <table className="table table-bordered mt-3">
              <thead className="thead-light">
                <tr>
                  <th scope="col">Country ID</th>
                  <th scope="col">% Complete</th>
                  <th scope="col">Pending</th>
                  <th scope="col">Notify</th>
                </tr>
              </thead>
              <tbody>
                {countryData.map((elem) => (
                  <tr key={elem.name}>
                    <td>{elem.name}</td>
                    <td>
                      <div className="progress">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: `${elem.percentage}%` }}
                          aria-valuenow={elem.percentage}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          {elem.percentage}%
                        </div>
                      </div>
                    </td>
                    <td>
                      <div style={{ fontSize: "15px" }}>
                        <p>{`${elem.pending}/15`}</p>
                      </div>
                    </td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() => notify(elem.name)}
                        style={{ padding: "6px 12px", fontSize: "14px" }}
                      >
                        Notify
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div style={{ marginTop: "30px" }}>
              <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>
                State comment Progress
              </h3>
            </div>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                style={{ width: `${overallProgress}%` }}
              >
                {overallProgress}%
              </div>
            </div>
          </div>
        )}
      </div>

      {/* {showSA && (
        <div className="col-md-6" style={{ marginTop: 40, width: "100%" }}>
          <SLinputs
            trackView={true}
            commentToShow={commentToShow}
            remarkToShow={remarkToShow}
          />
        </div>
      )} */}

      {showSA && (
        <div
          style={{
            marginTop: "100px",
            width: "90%",
            maxWidth: "1200px",
            margin: "50px auto",
            backgroundColor: "#f5f5f5",
            padding: "30px",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#333",
              marginBottom: "20px",
            }}
          >
            Created at: 19-10-2024
          </p>

          <div
            style={{
              marginTop: "40px",
              width: "100%",
              padding: "20px",
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
            }}
          >
            <p
              style={{
                fontSize: "16px",
                color: "#555",
                marginBottom: "15px",
              }}
            >
              Date Count Down:{" "}
              <span style={{ color: "#e74c3c", fontWeight: "bold" }}>
                {daysRemaining} days left
              </span>
            </p>

            <p
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Total Provision: 15
            </p>

            <div style={{ marginBottom: "20px" }}>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                Secretariat Comment Progress
              </h3>
            </div>

            <div className="progress" style={{ height: "25px" }}>
              <div
                className="progress-bar progress-bar-striped progress-bar-animated bg-info"
                role="progressbar"
                style={{
                  width: `${overallProgress}%`,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
                aria-valuenow={overallProgress}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {overallProgress}%
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SLtrack;
