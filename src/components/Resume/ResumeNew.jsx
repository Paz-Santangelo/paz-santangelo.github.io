/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// Ruta al PDF en la carpeta public
const pdf = "/assets/CV-PazSantangelo-Backend.pdf";

const ResumeNew = () => {
  const [width, setWidth] = useState(() => window.innerWidth);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const goToPrevPage = () => {
    setPageNumber((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prevPage) => Math.min(prevPage + 1, numPages));
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            className="download-cv-btn"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Descargar CV
          </Button>
        </Row>

        {/* Contenedor del PDF con flechas de navegación */}
        <div style={{ 
          display: "flex", 
          flexDirection: "row", 
          alignItems: "center", 
          justifyContent: "center", 
          padding: "50px 20px",
          gap: "30px",
          maxWidth: "100%",
          overflow: "hidden"
        }}>
          {/* Flecha izquierda */}
          {numPages > 1 && (
            <Button
              variant="link"
              onClick={goToPrevPage}
              disabled={pageNumber <= 1}
              className="pdf-nav-arrow"
              style={{
                fontSize: "1.3rem",
                color: "#fff",
                cursor: pageNumber <= 1 ? "not-allowed" : "pointer",
                border: "none",
                background: pageNumber <= 1 ? "#666" : "var(--color-accent-lavender)",
                opacity: pageNumber <= 1 ? 0.3 : 1,
                padding: "0",
                flexShrink: 0,
                borderRadius: "50%",
                width: "45px",
                height: "45px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
              }}
            >
              <AiOutlineLeft style={{ fontSize: "1.5rem" }} />
            </Button>
          )}

          {/* Contenedor del PDF */}
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center",
            maxWidth: "60%",
            overflow: "hidden" 
          }}>
            <Document
              file={pdf}
              className="d-flex justify-content-center"
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page
                pageNumber={pageNumber}
                scale={width > 786 ? 1.2 : 0.45}
                className="pdf-page"
              />
            </Document>
          </div>

          {/* Flecha derecha */}
          {numPages > 1 && (
            <Button
              variant="link"
              onClick={goToNextPage}
              disabled={pageNumber >= numPages}
              className="pdf-nav-arrow"
              style={{
                fontSize: "1.3rem",
                color: "#fff",
                cursor: pageNumber >= numPages ? "not-allowed" : "pointer",
                border: "none",
                background: pageNumber >= numPages ? "#666" : "var(--color-accent-lavender)",
                opacity: pageNumber >= numPages ? 0.3 : 1,
                padding: "0",
                flexShrink: 0,
                borderRadius: "50%",
                width: "45px",
                height: "45px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
              }}
            >
              <AiOutlineRight style={{ fontSize: "1.5rem" }} />
            </Button>
          )}
        </div>

        {/* Indicador de página */}
        {numPages > 1 && (
          <Row style={{ justifyContent: "center", marginBottom: "20px" }}>
            <p style={{ color: "var(--text-primary)", fontSize: "1.1rem" }}>
              Página {pageNumber} de {numPages}
            </p>
          </Row>
        )}

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            className="download-cv-btn"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Descargar CV
          </Button>
        </Row>
      </Container>
    </div>
  );
};

export default ResumeNew;
