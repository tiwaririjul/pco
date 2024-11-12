import React, { useState, useEffect } from "react";
import ProvisionList from "./ProvisionList";
import SelectAnnexes from "./stages/SelectAnnexes";
import UploadStateLetter from "./stages/UploadStateLetter";
import Confirm from "./stages/Confirm";

const Stages = ({ stage }) => {
  const [slInfo, setSlInfo] = useState({
    selectedAnnexPan: "",
    selectedAnnex: "",
    selectedChapter: "",
    selectedProvision: "",
  });
  const [stateLetterInfo, setStateLetterInfo] = useState({
    title: "",
    document: "",
    language: "",
    stateLetterUploadDate: "",
    edition: "",
    filePath: "",
    stateLetterNo: "",
    awpNumber: "",
    contact: "",
    actionDeadline: "",
    attachment: "",
  });
  const [chapters, setChapters] = useState([]);
  const [proposeAmendment, setProposeAmbendment] = useState(null);

  const isDataComplete = () => {
    console.log(
      slInfo.selectedAnnex &&
        slInfo.selectedChapter &&
        slInfo.selectedProvision &&
        stateLetterInfo.title &&
        stateLetterInfo.language &&
        stateLetterInfo.stateLetterUploadDate &&
        stateLetterInfo.edition
    );
    return (
      slInfo.selectedAnnexPan &&
      slInfo.selectedAnnex &&
      slInfo.selectedChapter &&
      slInfo.selectedProvision &&
      stateLetterInfo.title &&
      stateLetterInfo.language &&
      stateLetterInfo.stateLetterUploadDate &&
      stateLetterInfo.edition
    );
  };

  useEffect(() => {
    // Store in localStorage only if data is complete
    if (isDataComplete()) {
      const storedData = {
        slInfo,
        stateLetterInfo,
        chapters,
      };
      localStorage.setItem("progressData", JSON.stringify(storedData));
    }
  }, [slInfo, stateLetterInfo, chapters]);

  console.log("sl info ", slInfo);
  console.log("stateletetr info  ", stateLetterInfo);

  switch (stage) {
    case 1:
      return (
        <SelectAnnexes
          selectedAnnexPan={slInfo.selectedAnnexPan}
          setSelectedAnnexPan={(value) =>
            setSlInfo((prev) => ({ ...prev, selectedAnnexPan: value }))
          }
        />
      );
    case 2:
      return (
        <ProvisionList
          type="Annex"
          selectedAnnex={slInfo.selectedAnnex}
          setSlInfo={setSlInfo}
          setProposeAmbendment={setProposeAmbendment}
        />
      );
    case 3:
      return (
        <UploadStateLetter
          setStateLetterInfo={setStateLetterInfo}
          stateLetterInfo={stateLetterInfo}
        />
      );
    case 4:
      return (
        <ProvisionList
          type="Chapter"
          selectedAnnexes={chapters}
          setSelectedAnnexes={setChapters}
          setSlInfo={setSlInfo}
        />
      );
    case 5:
      return <ProvisionList type="Provision" setSlInfo={setSlInfo} />;
    case 6:
      return <Confirm />;
    case 7:
      return <div>Final</div>;
    default:
      return (
        <div className="container">No content available for this stage</div>
      );
  }
};

export default Stages;
