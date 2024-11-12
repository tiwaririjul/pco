import React, { useState, useEffect } from "react";
import SLComment from "./SLcomment";
import { useParams } from "react-router-dom";
import SLtrack from "./SLtrack";
import { annexData } from "../utils/data";
import STable from "./STable";
import { DocumentData, StateLetters, comments } from "../utils/data";
import { Bar } from "react-chartjs-2";
import SLTrackTable from "./stages/SLTrackTable";

const SLinputs = ({ trackView, commentToShow, remarkToShow }) => {
  const { type } = useParams();
  const [daysLeft, setDaysLeft] = useState(null);
  const [stateLetterUploadDate, setStateLetterUploadDate] = useState(null);
  const [selectedAnnex, setSelectedAnnex] = useState(DocumentData[0]); // Start with first Annex
  const [selectedAnnexId, setSelectedAnnexId] = useState(DocumentData[0].docID);
  const [filteredStateLetters, setFilteredStateLetters] = useState(
    StateLetters.filter((sl) => sl.docID === DocumentData[0].docID)
  );
  const [selectedStateLetter, setSelectedStateLetter] = useState(
    filteredStateLetters[0]
  );
  const [selectedStateLetterId, setSelectedStateLetterId] = useState(
    filteredStateLetters[0].stateLetterId
  );
  const [filteredChapters, setFilteredChapters] = useState(
    filteredStateLetters[0]?.chapters || []
  );
  const [selectedChapter, setSelectedChapter] = useState(filteredChapters[0]);
  const [selectedChapterId, setSelectedChapterId] = useState(
    filteredChapters[0]?.chapterId
  );

  const [provisions, setProvisions] = useState(filteredChapters[0].provisions);
  const [selectedProvision, setSelectedProvision] = useState(
    StateLetters[0].chapters[0].provisions[0]
  );
  const [selectedProvisionId, setSelectedProvisionId] = useState(null);

  const handleAnnexChange = (event) => {
    const annexId = parseInt(event.target.value);
    const newAnnex = DocumentData.find((annex) => annex.docID === annexId);

    setSelectedAnnex(newAnnex);
    setSelectedAnnexId(annexId);

    // Filter State Letters based on the new Annex
    const newStateLetters = StateLetters.filter((sl) => sl.docID === annexId);
    setFilteredStateLetters(newStateLetters);

    // Set the first State Letter as selected by default
    const firstStateLetter = newStateLetters[0];
    setSelectedStateLetter(firstStateLetter);
    setSelectedStateLetterId(firstStateLetter.stateLetterId);

    // Set the chapters for the first State Letter as selected
    const firstChapter = firstStateLetter?.chapters?.[0] || {};
    setFilteredChapters(firstStateLetter?.chapters || []);
    setSelectedChapter(firstChapter);
    setSelectedChapterId(firstChapter.chapterId);

    // Set the provisions for the first Chapter as selected
    setProvisions(firstChapter?.provisions || []);
    setSelectedProvision(firstChapter?.provisions); // Reset selected provision
    setSelectedProvisionId(null); // Reset selected provision ID
  };
  const handleStateLetterChange = (event) => {
    const stateLetterId = parseInt(event.target.value);
    const newStateLetter = filteredStateLetters.find(
      (sl) => sl.stateLetterId === stateLetterId
    );

    setSelectedStateLetter(newStateLetter);
    setSelectedStateLetterId(stateLetterId);

    // Update chapters based on the selected state letter
    const firstChapter = newStateLetter?.chapters?.[0] || {};
    setFilteredChapters(newStateLetter?.chapters || []);
    setSelectedChapter(firstChapter);
    setSelectedChapterId(firstChapter.chapterId);

    // Update provisions for the first chapter
    setProvisions(firstChapter?.provisions || []);
    setSelectedProvision(firstChapter?.provisions); // Reset selected provision
    setSelectedProvisionId(null); // Reset selected provision ID
  };
  const handleChapterChange = (event) => {
    const chapterId = parseInt(event.target.value);
    const newChapter = filteredChapters.find(
      (chapter) => chapter.chapterId === chapterId
    );

    setSelectedChapter(newChapter);
    setSelectedChapterId(chapterId);

    // Update provisions based on the selected chapter
    setProvisions(newChapter?.provisions || []);
    setSelectedProvision(newChapter?.provisions); // Reset selected provision
    setSelectedProvisionId(null); // Reset selected provision ID
  };

  const handleProvisionChange = (event) => {
    const provisionId = parseInt(event.target.value);
    const newProvision = provisions.find(
      (provision) => provision.provisionId === provisionId
    );
    setSelectedProvision(newProvision);
    setSelectedProvisionId(provisionId);
  };
  const handleArrowClick = (direction) => {
    // const selectedChapter = annexData
    //   .find((annex) => annex.annexId === selectedAnnexId)
    //   .chapters.find((chapter) => chapter.chapterId === selectedChapterId);
    // const provisions = selectedChapter.provisions;
    // let newIndex = provisionIndex;
    // if (direction === "left" && provisionIndex > 0) {
    //   newIndex = provisionIndex - 1;
    // } else if (
    //   direction === "right" &&
    //   provisionIndex < provisions.length - 1
    // ) {
    //   newIndex = provisionIndex + 1;
    // }
    // setProvisionIndex(newIndex);
    // setSelectedProvision(provisions[newIndex]);
  };

  const handlePdfChange = (event) => {
    // const selectedProvisionId = parseInt(event.target.value);
    // const selectedChapter = annexData
    //   .find((annex) => annex.annexId === selectedAnnexId)
    //   .chapters.find((chapter) => chapter.chapterId === selectedChapterId);
    // const selectedProvision = selectedChapter.provisions.find(
    //   (provision) => provision.provisionId === selectedProvisionId
    // );
    // setSelectedProvision(selectedProvision);
    // setProvisionIndex(0);
    // localStorage.setItem("selectedProvision", selectedProvision.provisionId);
  };

  // useEffect(() => {
  //   const selectedChapter = annexData
  //     .find((annex) => annex.annexId === selectedAnnexId)
  //     .chapters.find((chapter) => chapter.chapterId === selectedChapterId);
  //   setSelectedProvision(selectedChapter.provisions[0]);
  // }, [selectedChapterId, selectedAnnexId]);

  const fetchProgressData = () => {
    const progressData = JSON.parse(localStorage.getItem("progressData"));
    if (progressData && progressData.stateLetterInfo) {
      setStateLetterUploadDate(
        progressData.stateLetterInfo.stateLetterUploadDate
      );
    }
  };

  useEffect(() => {
    if (stateLetterUploadDate) {
      const uploadDate = new Date(stateLetterUploadDate);
      const dueDate = new Date(uploadDate);
      dueDate.setDate(uploadDate.getDate() + 90);

      const currentDate = new Date();
      const timeDifference = dueDate - currentDate;
      const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

      setDaysLeft(daysRemaining);

      // alert("updating date");

      localStorage.setItem("daysRemaining", daysRemaining);
      localStorage.setItem("creationDate", stateLetterUploadDate);
    }
  }, [stateLetterUploadDate]);

  useEffect(() => {
    fetchProgressData();
  }, []);

  // chart ,

  const labels = [
    "january",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [100, 200, 300, 400, 500, 600, 700],
        backgroundColor: "rgba(255 , 99 , 132 , 0.5)",
      },
    ],
  };

  return (
    <>
      <div style={{ marginTop: "50px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <label htmlFor="documentType">Document Type</label>
              <select className="form-control" id="documentType">
                <option value="annex">Annex</option>
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="document">Annex</label>
              <select
                className="form-control"
                id="document"
                onChange={handleAnnexChange}
                value={selectedAnnex.docID}
              >
                {DocumentData.map((annex) => (
                  <option key={annex.docID} value={annex.docID}>
                    {annex.docTitle}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-md-3">
              <label htmlFor="documentVersion">State Letters</label>
              <select
                className="form-control"
                id="documentVersion"
                onChange={handleStateLetterChange}
                value={selectedStateLetter?.stateLetterId}
              >
                {filteredStateLetters.map((stateLetter) => (
                  <option
                    key={stateLetter.stateLetterId}
                    value={stateLetter.stateLetterId}
                  >
                    {stateLetter.stateLetterName}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="documentSection">Chapters</label>
              <select
                className="form-control"
                id="documentSection"
                onChange={handleChapterChange}
                value={selectedChapter?.chapterId}
              >
                {filteredChapters.map((chapter) => (
                  <option key={chapter.chapterId} value={chapter.chapterId}>
                    {chapter.chapterName}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-12 d-flex justify-content-center mt-4">
              <div
                style={{
                  backgroundColor: "#f5f5f5",
                  color: "#333",
                  padding: "10px 20px",
                  borderRadius: "5px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  fontSize: "16px",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {`ANWP Number: ${selectedStateLetter.anwpNumber} | State Letter No: ${selectedStateLetter.stateLetterNo} | State Letter Date: ${selectedStateLetter.stateLetterDate} | Proposed Amendment: ${selectedStateLetter.proposeAmendment}`}
              </div>
            </div>
            <div className="col-md-6 offset-md-4 d-flex justify-content-around mt-5">
              <div className="btn-group">
                <button
                  className="btn btn-light"
                  onClick={() => handleArrowClick("left")}
                >
                  <i className="fas fa-angle-double-left"></i>
                </button>
                <button
                  className="btn btn-light"
                  onClick={() => handleArrowClick("left")}
                >
                  <i className="fas fa-angle-left"></i>
                </button>
                <select
                  className="btn btn-light"
                  id="status"
                  onChange={handleProvisionChange}
                  value={selectedProvision?.provisionId || ""}
                >
                  {/* {annexData
                    .find((annex) => annex.annexId === selectedAnnexId)
                    .chapters.find(
                      (chapter) => chapter.chapterId === selectedChapterId
                    )
                    .provisions.map((provision) => (
                      <option
                        key={provision.provisionId}
                        value={provision.provisionId}
                      >
                        {provision.provisionId}
                      </option>
                    ))} */}
                  {provisions.map((provision) => (
                    <option
                      key={provision.provisionId}
                      value={provision.provisionId}
                    >
                      {provision.provisionName}
                    </option>
                  ))}
                </select>

                <button
                  className="btn btn-light"
                  onClick={() => handleArrowClick("right")}
                >
                  <i className="fas fa-angle-right"></i>
                </button>
                <button
                  className="btn btn-light"
                  onClick={() => handleArrowClick("right")}
                >
                  <i className="fas fa-angle-double-right"></i>
                </button>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      {console.log("currently selected proviison is ", selectedProvision)}
      {type === "secretriat" && type !== "slview" && (
        <div style={{ margin: "70px 50px" }}>
          <h3 style={{ marginBottom: "20px" }}>Summary of replies by states</h3>
          <STable provsionId={selectedProvision.provisionId} />
        </div>
      )}

      {
        // (console.log("selected provision ", selectedProvision),
        // console.log("selected annex ", selectedAnnex),
        // console.log("selected chapters ", selectedChapter),
        // console.log("selected stateletter ", selectedStateLetter))
      }

      {type === "reports" ? (
        <>
          <div
            className="chart-table-container"
            style={{ display: "flex", gap: "20px" }}
          >
            <div className="chart-width">
              <Bar data={data} />
            </div>
            <div className="table-width">
              <SLTrackTable />
            </div>
          </div>
        </>
      ) : (
        <SLComment
          selectedPdf={selectedProvision}
          selectedAnnexId={selectedAnnexId}
          selectedChapterId={selectedChapterId}
          selectedProvision={selectedProvision}
          userType={type}
          trackView={trackView}
          commentToShow={commentToShow}
          remarkToShow={remarkToShow}
        />
      )}
    </>
  );
};

export default SLinputs;
