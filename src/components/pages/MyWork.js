import React from 'react';
import { Image } from 'react-native';

const styles = {
  cards: {
      width: "18rem", 
  },
};

export default function Work() {
    return (
      <div>
          <h1>PROJECTS.</h1>

  <div className="card" style={styles.cards}>
  <Image className="card-img-top" src="..." alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">VIEW MORE.</a>
  </div>
  </div>

  <div className="card" style={styles.cards}>
  <Image className="card-img-top" src="..." alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">VIEW MORE.</a>
  </div>
  </div>

  <div className="card" style={styles.cards}>
  <Image className="card-img-top" src="..." alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">VIEW MORE.</a>
  </div>
  </div>

  <div className="card" style={styles.cards}>
  <Image className="card-img-top" src="..." alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">VIEW MORE.</a>
  </div>
  </div>
      </div>
    );
  }
  