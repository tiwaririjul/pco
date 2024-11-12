import React, { useState, useEffect } from "react";
import { DocumentData, StateLetters } from "../utils/data";
import OpenPdf from "./OpenPdf";

const ProvisionList = ({
  type,
  selectedAnnexes,
  setSelectedAnnexes,
  selectedAnnex,
  setSlInfo,
  setProposeAmbendment,
}) => {
  const [arrayType, setArrayType] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [openPdf, setOpenPdf] = useState(false);
  const [selectedProvisions, setSelectedProvisions] = useState([]);

  const handleRadioChange = (elem, itemType) => {
    if (itemType === "Annex") {
      setSlInfo((prev) => ({ ...prev, selectedAnnex: elem }));
      setProposeAmbendment(elem);
      localStorage.setItem("selectedAnnex", elem?.docID);
      setSelectedChapter(null);
    } else if (itemType === "Chapter") {
      setSelectedChapter(elem);
      setSelectedAnnexes(elem);
      setSlInfo((prev) => ({ ...prev, selectedChapter: elem }));
      localStorage.setItem("selectChapter", elem?.chapterId);

      const provisions = elem?.provisions || [];
      setSelectedProvisions(provisions);

      setSlInfo((prev) => ({
        ...prev,
        selectedProvision: provisions,
      }));
    } else if (itemType === "Provision") {
      setSlInfo((prev) => ({ ...prev, selectedProvision: elem }));
    }
  };

  useEffect(() => {
    if (type === "Annex") {
      setArrayType(DocumentData.filter((doc) => doc.DocType === "Annex"));
    } else if (type === "Chapter") {
      const selectedAnnexID = Number(localStorage.getItem("selectedAnnex"));
      const selectedAnnex = StateLetters.find(
        (stateLetter) => stateLetter.docID === selectedAnnexID
      );
      const chaptersForAnnex = selectedAnnex?.chapters || [];
      setSelectedAnnexes(chaptersForAnnex.chapterName);
      setArrayType(chaptersForAnnex);
    } else if (type === "Provision") {
      const provisionsForChapter = selectedChapter?.provisions || [];
      setArrayType(provisionsForChapter);
    }
  }, [type, selectedAnnex, selectedChapter, selectedProvisions]);

  return (
    <div className="container mt-4">
      <h3>
        {type === "Annex" ? "Select Proposed Amendment" : `List of ${type}`}
      </h3>

      {type === "Annex" &&
        arrayType.map((elem, index) => (
          <div key={index} className="form-check mb-3">
            <input
              type="radio"
              className="form-check-input"
              id={`annex-${index}`}
              name="annex"
              checked={selectedAnnex === elem}
              onChange={() => handleRadioChange(elem, "Annex")}
            />
            <label className="form-check-label" htmlFor={`annex-${index}`}>
              {elem.docTitle}
            </label>
            <hr />
          </div>
        ))}

      {type === "Chapter" &&
        arrayType.map((elem, index) => (
          <div key={index} className="form-check mb-3">
            <input
              type="radio"
              className="form-check-input"
              id={`chapter-${index}`}
              name="chapter"
              checked={selectedChapter === elem}
              onChange={() => handleRadioChange(elem, "Chapter")}
            />
            <label className="form-check-label" htmlFor={`chapter-${index}`}>
              {elem.chapterName}
            </label>
            <hr />
          </div>
        ))}

      {type === "Provision" &&
        arrayType.map((elem, index) => (
          <div key={index} className="form-check mb-3">
            <label className="form-check-label" htmlFor={`provision-${index}`}>
              {elem.provisionName}
            </label>
            <hr />
          </div>
        ))}

      {openPdf && <OpenPdf openPdf={openPdf} setOpenPdf={setOpenPdf} />}
    </div>
  );
};

export default ProvisionList;
