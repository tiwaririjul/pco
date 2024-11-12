import "./App.css";
import NavBar from "./components/NavBar";
import PdfViewer from "./components/PdfViewer";
import Progress from "./components/Progress";
import SLinputs from "./components/SLinputs";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import ticketPdf from "./assests/SL.2024.31.en.pdf";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import SLComment from "./components/SLcomment";
import SLtrack from "./components/SLtrack";
import STable from "./components/STable";
import Confirm from "./components/stages/Confirm";

import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  plugins,
} from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

function App() {
  // const pdfUrl = "./assests/ticket.pdf";

  return (
    <>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/stateletter/:type" element={<SLinputs />} />
            <Route path="/parser" element={<Progress />} />
            <Route path="/track" element={<SLtrack />} />
            <Route path="/" element={<Confirm />} />
          </Routes>
        </Router>
        {/* <SLComment /> */}
        {/* <SLtrack/> */}
      </Worker>
    </>
  );
}

export default App;
