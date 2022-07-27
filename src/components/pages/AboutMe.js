import React from 'react';
import NavTabs from '../NavTabs';

const styles = {
  h1: {
    fontSize: "50px",
    textAlign: "center",
  },
  div: {
    display: "flex",
    justifyContent: "end",
    margin: "20px",
    color: "white",
    padding: "10px",
    borderRadius: "10px",
  },
  photo: {
    width: "auto",
    height: "500px",
    padding: "1px",
    marginRight: "10px",
  },
}

export default function About() {
    return (
      <>
      <div className="container">
    <span className="text1">AVA.</span>
    <div className="nav-bar">
      FULL STACK WEB DEVELOPER.
    </div>
  </div>
      </>
    );
  }
  