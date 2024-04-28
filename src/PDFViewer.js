import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { StyleSheet } from '@react-pdf/renderer';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const styles = StyleSheet.create({
  toolbarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #ccc',
  },
  toolbarButton: {
    padding: '5px 10px',
    marginRight: 10,
  },
  pageCount: {
    marginRight: 10,
  },
  viewControls: {
    display: 'flex',
    alignItems: 'center',
  },
  viewControlButton: {
    padding: '5px 10px',
    marginLeft: 10,
    backgroundColor: '#f2f2f2',
    border: 'none',
    cursor: 'pointer',
  },
});

const PDFViewer = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [rotation, setRotation] = useState(0);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const handlePageChange = (newPageNumber) => {
    setPageNumber(newPageNumber);
  };

  const handleZoomIn = () => {
    setZoomLevel(zoomLevel + 0.2);
  };

  const handleZoomOut = () => {
    setZoomLevel(zoomLevel - 0.2);
  };

  const handleRotateClockwise = () => {
    setRotation(rotation + 90);
  };

  const handleRotateCounterClockwise = () => {
    setRotation(rotation - 90);
  };

  return (
    <div>
      <div style={styles.toolbarContainer}>
        <div>
          <button
            style={styles.toolbarButton}
            onClick={() => handlePageChange(pageNumber - 1)}
            disabled={pageNumber === 1}
          >
            Previous
          </button>
          <span style={styles.pageCount}>
            Page {pageNumber} of {numPages}
          </span>
          <button
            style={styles.toolbarButton}
            onClick={() => handlePageChange(pageNumber + 1)}
            disabled={pageNumber === numPages}
          >
            Next
          </button>
        </div>
        <div style={styles.viewControls}>
          <button
            style={styles.viewControlButton}
            onClick={handleZoomIn}
            title="Zoom In"
          >
            +
          </button>
          <button
            style={styles.viewControlButton}
            onClick={handleZoomOut}
            title="Zoom Out"
          >
            -
          </button>
          <button
            style={styles.viewControlButton}
            onClick={handleRotateClockwise}
            title="Rotate Clockwise"
          >
            &#8635;
          </button>
          <button
            style={styles.viewControlButton}
            onClick={handleRotateCounterClockwise}
            title="Rotate Counter-Clockwise"
          >
            &#8634;
          </button>
        </div>
      </div>
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        renderMode="canvas"
      >
        <Page
          pageNumber={pageNumber}
          renderTextLayer={false}
          scale={zoomLevel}
          rotate={rotation}
        />
      </Document>
    </div>
  );
};

export default PDFViewer;