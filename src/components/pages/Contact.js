import React from 'react';
import gmail from "../images/email-logo.png"
import gitHub from "../images/gitHub-logo.png"
import linkedIn from "../images/linkedin-logo.png"


const styles = {
  h1: {
    fontSize: "50px",
    textAlign: "center",
  },
  btn: {
    margin: "10px",
    borderRadius: "30px",
    backgroundColor: "white",
  }
}

export default function Contact() {
  const handleEmailClick = () => {
    window.open('mailto:avamsteimle@example.com?subject=Subject');
  }
    return (
      <div>
          <h1
          style={styles.h1}>
            CONTACT ME.</h1>
          <section id="contactMe" className="contactMe d-flex justify-content-center">
            <button 
              onClick={handleEmailClick}
              style={styles.btn}
              >
                <img src={gmail} alt="gmailLogo" />
            </button>
            <a
              href="https://github.com/kreativekntrl"
              style={styles.btn} 
              >
                <img src={gitHub} alt="gitHubLogo" />
            </a>
            <a 
              href="https://www.linkedin.com/in/avasteimle/"
              style={styles.btn} 
              >
                <img src={linkedIn} alt="linkedInLogo" />
            </a> 
        </section>

  <form className="contact-form bg-light">
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="JeffBezos@gmail.com" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>

  <div className="form-group">
    <label for="textInput">Note</label>
    <input type="text" className="form-control" id="textInput" placeholder="Hey Ava.." />
  </div>

  <button
    style={{margin: "10px"}} 
    type="submit" 
    className="btn btn-dark">Submit</button>
</form>
</div>
    );
  }
  
  