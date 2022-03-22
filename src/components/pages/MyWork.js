import React from 'react';
import { Image } from 'react-native';

const styles = {
  h1: {
    fontSize: "50px",
    textAlign: "center",
  },
  title: {
    fontWeight: "bold"
  },
  cards: {
      width: "20rem", 
      margin: "10px",
      borderRadius: "8px",
      color: "black",
      lineHeight: "1",
  },
  div: {
    display: "flex",
    justifyContent: "center",
  }
};

export default function Work() {
    return (
    <>
  <h1
  style={styles.h1}>PROJECTS.</h1>
  <div
  style={styles.div}>

  <div className="card" style={styles.cards}>
  <Image className="card-img-top" src="..." alt="Card image cap" />
  <div className="card-body">
    <h5
      style={styles.title}
      className="card-title">The Attic</h5>
    <p className="card-text">A MERN stack web app for developers to keep the code they can't forget</p>
    <a href="https://the-attic.herokuapp.com/" className="btn btn-dark">VIEW MORE.</a>
  </div>
  </div>

  <div className="card" style={styles.cards}>
  <Image className="card-img-top" src="..." alt="Card image cap" />
  <div className="card-body">
    <h5 
      style={styles.title}
      className="card-title">Recipe Roulette</h5>
    <p className="card-text">A fun web app that allows anyone to generate a random recipe and shopping list!</p>
    <a href="https://kreativekntrl.github.io/project-01/" className="btn btn-dark">VIEW MORE.</a>
  </div>
  </div>

  <div className="card" style={styles.cards}>
  <Image className="card-img-top" src="..." alt="Card image cap" />
  <div className="card-body">
    <h5
      style={styles.title} 
      className="card-title">Flix Factory</h5>
    <p className="card-text">A social platform for anyone to comment on and share they excitement about popular tv series</p>
    <a href="https://flix-factory.herokuapp.com/" className="btn btn-dark">VIEW MORE.</a>
  </div>
  </div>

  <div className="card" style={styles.cards}>
  <Image className="card-img-top" src="..." alt="Card image cap" />
  <div className="card-body">
    <h5
      style={styles.title} 
      className="card-title">When it rains..</h5>
    <p className="card-text">Weather app that implements server side API's for current weather conditions in the city near you</p>
    <a href="https://kreativekntrl.github.io/weather-app/" className="btn btn-dark">VIEW MORE.</a>
  </div>
  </div>
      </div>
    </>
    );
  }
  