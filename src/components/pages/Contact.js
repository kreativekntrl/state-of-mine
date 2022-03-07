import React from 'react';


export default function Contact() {
    return (
      <div>
          <h1>CONTACT ME.</h1>
          <section id="contactMe" className="contactMe d-flex justify-content-center">
            <button className="contactDiv gmail btn btn-dark">
                <img src="./src/images/github.png" alt="gmail icon link" className="contactImg" />
            </button>
            <button className="contactDiv gitHub btn btn-dark">
                <img src="./images/github.png" alt="GitHub icon link" className="contactImg" />
            </button>
            <button className="contactDiv linkedIn btn btn-dark">
                <img src="./images/linked.png" alt="LinkedIn icon link" className="contactImg" />
            </button> 

        </section>

    <button className="btn btn-dark">
        <a
          href="http://github.com/kreativekntrl"
          onClick={() => window.location.href('http://github.com/kreativekntrl')}
        >
          About Me
        </a>
      </button>

        <form className="contact-form bg-light">
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="JeffBezos@gmail.com" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  <div className="form-group">
    <label for="textInput">Note</label>
    <input type="text" className="form-control" id="textInput" placeholder="Howdy Ava, I would like to let you know I am putting you in my will ! ;-)" />
  </div>

  <button type="submit" className="btn btn-dark">Submit</button>
</form>

      </div>
    );
  }
  
  