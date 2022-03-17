import React from 'react';

export default function Resume() {
    return (
      <div>
        <h1>RESUME.</h1>
          <div >
            <a
              download="ava-steimle-resume.pdf"
              href="/Users/avamaree/Desktop/GitHub-Assignments/state-of-mine/Ava Steimle (1).pdf"
              className="btn btn-outline-dark"
            >
              DOWNLOAD MY RESUME.
            </a>
            <iframe
            title="iFrameWidget"
            src={'/Users/avamaree/Desktop/GitHub-Assignments/state-of-mine/Ava Steimle (1).pdf'}
      
            />
          </div>
      </div>
    );
  }
  