import { Viewer } from "@react-pdf-viewer/core";
import React from "react";

const PdfViewer = ({ pdfUrl }) => {
  return (
    <div style={{ height: "600px", width: "600px ", margin: "auto" }}>
      <Viewer fileUrl={pdfUrl} />
    </div>
  );
};

export default PdfViewer;
