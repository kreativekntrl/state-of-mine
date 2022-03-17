import React from 'react';
import resume from '/Users/avamaree/Desktop/GitHub-Assignments/state-of-mine/src/components/images/resume.png'
import resumePdf from "/Users/avamaree/Desktop/GitHub-Assignments/state-of-mine/src/resume.pdf"

const styles = {
  h1: {
    fontSize: "50px",
    textAlign: "center"
  },
  photo: {
    width: "75vh",
    margin: "auto"
  }
}
export default function Resume() {
    return (
      <>
      <h1
      style={styles.h1}>RESUME.</h1>
      <div
        style={styles.photo}>
          <h6>click to download</h6>
      <a href={resumePdf} download>
      <img src={resume} className="img-thumbnail shadow" alt="Profile" />
      </a>
      </div>
      </>
);
}



  