import React from 'react';

export default function Contact() {
    return (
      <div>
          <h1>CONTACT ME.</h1>
          <section id="contactMe" class="contactMe">
            <button class="contactDiv gmail">
                <img src="./assets/gmail.png" alt="gmail icon link" class="contactImg" />
            </button>
            <button class="contactDiv gitHub">
                <img src="./assets/github.png" alt="GitHub icon link" class="contactImg" />
            </button>
            <button class="contactDiv linkedIn">
                <img src="./assets/linked.png" alt="LinkedIn icon link" class="contactImg" />
            </button>
        </section>
      </div>
    );
  }
  