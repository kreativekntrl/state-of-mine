import React from 'react';
import ProfilePic from '../images/profile.jpg';

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
      <h1
      style={styles.h1}>
        ABOUT ME.
      </h1>
        <div
        style={styles.div}>
          <img
        src={ProfilePic}
        className=" card border-light mb-3 bg-transparent col-sm-8 mt-2 rounded img-thumbnail shadow mt-2"
        style={styles.photo}
        alt="Profile"
      />
        <p
          style={{margin: "auto", fontSize: "18px", textShadow: ".5px 1px grey" }}>
            My name is Ava! I am actively seeking career opportunities as an entry level
            developer. Constantly evolving my knowledge in JavaScript, React, jQuery, CSS, HTML5, Node.js, and SQL/noSQL database structures.
            Leveraging a background in mathematics and computer science to approach problems head on with experience working in an agile environment. <br /><br />
            Completed an AS in Mathematics and went on to transfer to UCSD as an undergrad student. Recently completed a full stack 
            development certificate from UCSD’s Extension. I have focused the last few months on gaining technical skills and working on my 
            craft as a developer. I am known to be a problem solver and approach problems holistically in both my personal life and 
            in my work as a developer. I am available for relocation and actively looking for work!
        </p>
      </div>
      </>
    );
  }
  