import React from "react";

const SLTrackTable = () => {
  const countryData = [
    {
      name: "IND",
      complete: "50%",
      pending: 15,
    },
    {
      name: "UK",
      complete: "50%",
      pending: 15,
    },
    {
      name: "Australia",
      complete: "50%",
      pending: 15,
    },
  ];

  return (
    <div style={{ width: "100%", padding: "10px" }}>
      <div
        style={{
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
          <span style={{ color: "#d9534f" }}>30 days left</span>
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
                      style={{ width: elem.complete }}
                      aria-valuenow={parseInt(elem.complete)}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {elem.complete}
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
            style={{ width: `50%` }}
          >
            50%
          </div>
        </div>
      </div>
    </div>
  );
};

export default SLTrackTable;
