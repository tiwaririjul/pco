import React, { useState } from "react";

const StateLetterForm = ({ setStateLetterInfo, stateLetterInfo }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  // Handle text and select input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setStateLetterInfo((prevInfo) => ({
      ...prevInfo,
      [id]: value,
    }));
  };

  // Handle single file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setStateLetterInfo((prevInfo) => ({
      ...prevInfo,
      filePath: file,
    }));
  };

  // Handle multiple file upload for attachments
  const handleMultipleUpload = (e) => {
    const files = Array.from(e.target.files);
    setUploadedFiles(files);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <div className="mb-3">
            <label htmlFor="stateLetterNo" className="form-label">
              State Letter No
            </label>
            <input
              type="text"
              className="form-control"
              id="stateLetterNo"
              value={stateLetterInfo.stateLetterNo}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="mb-3">
            <label htmlFor="awpNumber" className="form-label">
              AWP-NO
            </label>
            <select
              className="form-control"
              id="awpNumber"
              value={stateLetterInfo.awpNumber}
              onChange={handleInputChange}
            >
              <option value="">Select AWP-NO</option>
              <option value="AN-WP/8490">AN-WP/8490</option>
              <option value="AN-WP/8491">AN-WP/8491</option>
              <option value="AN-WP/8492">AN-WP/8492</option>
            </select>
          </div>
        </div>

        <div className="col-md-4">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={stateLetterInfo.title}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="mb-3">
            <label htmlFor="language" className="form-label">
              Language
            </label>
            <select
              className="form-control"
              id="language"
              value={stateLetterInfo.language}
              onChange={handleInputChange}
            >
              <option value="">Select Language</option>
              <option value="French">French</option>
              <option value="English">English</option>
              <option value="Espanol">Espanol</option>
            </select>
          </div>
        </div>

        <div className="col-md-4">
          <div className="mb-3">
            <label htmlFor="edition" className="form-label">
              Edition
            </label>
            <input
              type="text"
              className="form-control"
              id="edition"
              value={stateLetterInfo.edition}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="mb-3">
            <label htmlFor="document" className="form-label">
              Document
            </label>
            <select
              className="form-control"
              id="document"
              value={stateLetterInfo.document}
              onChange={handleInputChange}
            >
              <option value="">Select Document</option>
              <option value="version 178[178]">version 178[178]</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="mb-3">
            <label htmlFor="stateLetterUploadDate" className="form-label">
              State Letter Date
            </label>
            <input
              type="date"
              className="form-control"
              id="stateLetterUploadDate"
              value={stateLetterInfo.stateLetterUploadDate}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="mb-3">
            <label htmlFor="contact" className="form-label">
              Contact
            </label>
            <select
              className="form-control"
              id="contact"
              value={stateLetterInfo.contact}
              onChange={handleInputChange}
            >
              <option value="">Select Contact</option>
              <option value="Stephane">Stephane</option>
              <option value="Jerome">Jerome</option>
              <option value="Mincheol">Mincheol</option>
            </select>
          </div>
        </div>

        <div className="col-md-4">
          <div className="mb-3">
            <label htmlFor="actionDeadline" className="form-label">
              Action Deadline
            </label>
            <input
              type="date"
              className="form-control"
              id="actionDeadline"
              value={stateLetterInfo.actionDeadline}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="filePath" className="form-label">
              Upload file
            </label>
            <input
              type="file"
              className="form-control"
              id="filePath"
              onChange={handleFileChange}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="attachment" className="form-label">
              Upload Attachment
            </label>
            <input
              type="file"
              className="form-control"
              id="attachment"
              multiple
              onChange={handleMultipleUpload}
            />
          </div>
        </div>

        <div className="uploaded-files">
          <h5>Uploaded Files:</h5>
          {uploadedFiles.length > 0 ? (
            <ul>
              {uploadedFiles.map((file, index) => (
                <li key={index}>
                  {file.name} ({(file.size / 1024).toFixed(2)} KB)
                </li>
              ))}
            </ul>
          ) : (
            <p>No files uploaded yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StateLetterForm;
