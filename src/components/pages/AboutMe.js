import React from 'react';
import { Image } from 'react-native';

const styles = {
  h1: {
    fontSize: "50px",
    textAlign: "center",
  },
  div: {
    display: "flex",
    justifyContent: "center",
    margin: "20px",
    color: "black",
    background: "white",
    padding: "10px",
    borderRadius: "10px",
  }
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
        <p>
            My name is Ava! I am a recent graduate of UCSD's coding bootcamp and actively seeking career opportunities as an entry level
            backend developer. Constantly evolving my knowledge in JavaScript, React, jQuery, CSS, HTML5, Node.js, and SQL/noSQL database structures.
            Leveraging a background in mathematics and computer science to approach problems head on. 
            Completed an AS in Mathematics and went on to transfer to UCSD as an undergrad student. Recently completed a full stack 
            development certificate from UCSD’s Extension. I have focused the last few months on gaining technical skills and working on my 
            craft as a developer. I am known to be a problem solver and approach problems holistically in both my personal life and 
            in my work as a developer. I am available for relocation and actively looking for work!
        </p>
      </div>
      </>
    );
  }
  