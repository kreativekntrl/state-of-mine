import React from 'react';
import { Document, Page } from 'react-pdf'
import { useState } from 'react';

const styles = {
  h1: {
    fontSize: "50px",
    textAlign: "center"
  },
}
export default function Resume() {
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
    return (
  <>
    <h1
      style={styles.h1}>RESUME.</h1>
      <div>
      <div>
      <Document file="/Users/avamaree/Desktop/GitHub-Assignments/state-of-mine/src/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
    </div>
          {/* <div >
            <a
            download="ava-steimle-resume.pdf"
            href="/Users/avamaree/Desktop/GitHub-Assignments/state-of-mine/src/resume.pdf"
            className="btn btn-outline-dark"
            >
            DOWNLOAD MY RESUME.
            </a>
            <iframe
            title="iFrameWidget"
            src={'/Users/avamaree/Desktop/GitHub-Assignments/state-of-mine/src/resume.pdf'}
            />
          </div> */}
          </>
    );
  }
  