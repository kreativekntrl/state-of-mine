import React from 'react';

const styles = {
  nav: {
    display: "block",
  },
  link: {
    color: "white",
    fontSize: "22px"
  },
}

function NavTabs({ currentPage, handlePageChange }) {
  return (
<nav 
  style={styles.nav}
  className="navbar">
<div>
</div>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          style={styles.link}
          href="#AboutMe"
          onClick={() => handlePageChange('AboutMe')}
          className="nav-link"
        >
          home
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
          work
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
          contact
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
          resume
        </a>
      </li>
    </ul>
    </nav>
  );
}



export default NavTabs;
