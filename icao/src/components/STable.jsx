import React, { useEffect, useState } from "react";
import { comments } from "../utils/data";

const STable = ({ provsionId }) => {
  const [commentsData, setCommentsData] = useState([]);

  console.log("provision_id ", provsionId);

  const countryMap = {
    IN: "India",
    CA: "Canada",
    RU: "Russia",
    CN: "China",
    US: "United States",
  };

  useEffect(() => {
    // if (!provsionId) return; // Only run if a valid provsionId is selected

    // const storedDataForInd = JSON.parse(
    //   localStorage.getItem(`IND's'${provsionId}`)
    // ); // For India
    // const storedDataForAus = JSON.parse(
    //   localStorage.getItem(`Aus's'${provsionId}`)
    // ); // For Australia
    // const storedDataForUK = JSON.parse(
    //   localStorage.getItem(`UK's'${provsionId}`)
    // ); // For the UK

    // setData([storedDataForInd, storedDataForAus, storedDataForUK]);
    {
      console.log("currently selected proviison is  in stable", provsionId);
      console.log("Comments ", comments);
    }

    const commentsD = comments?.filter(
      (item) => item.provisionId === provsionId
    );

    console.log("COmments data ", commentsD);

    if (commentsD) {
      setCommentsData(commentsD[0]?.StateComments);
    }
  }, [provsionId]); // Add provsionId as a dependency

  // console.log("data ", data);

  return (
    <div>
      {console.log("comments under jsx ", commentsData)}
      <table className="table table-hover table-bordered table-sm text-center">
        <thead>
          <tr>
            <th scope="col">Country</th>
            <th scope="col">State Response</th>
            <th scope="col">Comments</th>
            <th scope="col">Proposed Text</th>
          </tr>
        </thead>
        <tbody>
          {commentsData && commentsData.length > 0 ? (
            commentsData.map((entry, index) => {
              const countryCode = entry?.StateId?.split(":")[1]; // Extract ISO code from StateId
              const countryName = countryMap[countryCode] || "Unknown"; // Default to "Unknown" if not in map

              return (
                <tr key={index}>
                  <td>{countryName}</td>
                  <td>{entry?.StateResponse}</td>
                  <td>{entry?.comments}</td>
                  <td>{entry?.Proposal}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="4">No data available for the selected provision.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default STable;
