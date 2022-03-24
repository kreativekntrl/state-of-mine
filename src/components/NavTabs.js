import React from 'react';

const styles = {
  nav: {
    display: "block",
  },
  link: {
    color: "white",
    fontSize: "20px"
  },
}

function NavTabs({ currentPage, handlePageChange }) {
  return (
<nav 
  style={styles.nav}
  className="navbar">
<div className="jumbotron jumbotron-fluid">
</div>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          style={styles.link}
          href="#AboutMe"
          onClick={() => handlePageChange('AboutMe')}
          className="nav-link"
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          style={styles.link}
          href="#MyWork"
          onClick={() => handlePageChange('MyWork')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className="nav-link"
        >
          My Work
        </a>
      </li>
      <li className="nav-item">
        <a
          style={styles.link}
          href="#Contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className="nav-link"
        >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a
          style={styles.link}
          href="#Resume"
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className="nav-link"
        >
          Resume
        </a>
      </li>
    </ul>
    </nav>
  );
}



export default NavTabs;
