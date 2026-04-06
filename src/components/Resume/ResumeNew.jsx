import React, { useState, useEffect } from "react";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Ritesh_MERN.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="resume-section relative z-10 pt-20 pb-8">
      <Particle />
      <div className="max-w-7xl mx-auto px-4">
        {/* Download Button - Top */}
        <div className="flex justify-center mb-8">
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            style={{
              backgroundColor: "#a855f7",
              maxWidth: "250px",
            }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </a>
        </div>

        {/* PDF Document */}
        <div className="resume flex justify-center py-8">
          <Document file={pdf}>
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </div>

        {/* Download Button - Bottom */}
        <div className="flex justify-center mt-8">
          <a
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            style={{
              backgroundColor: "#a855f7",
              maxWidth: "250px",
            }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default ResumeNew;
