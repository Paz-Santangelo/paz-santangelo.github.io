import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// Ruta al PDF en la carpeta public
const pdf = "/assets/CV_PazSantangelo_Backend.pdf";

const ResumeNew = () => {
    const [width, setWidth] = useState(1200);
    const [numPages, setNumPages] = useState(null);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

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

                <Row className="resume">
                    <Document
                        file={pdf}
                        className="d-flex justify-content-center"
                        onLoadSuccess={onDocumentLoadSuccess}
                    >
                        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                    </Document>
                </Row>

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
}

export default ResumeNew