import React, { useState } from 'react';


function Footer() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    if (darkMode) {
      document.body.classList.remove('dark')
      setDarkMode(false)
    } else {
      document.body.classList.add('dark')
      setDarkMode(true)
    }
  }

  return (
    <div className="Footer fixed-bottom bg-light py-2">
      <span role="img" aria-label="heart">Made with 💙 by the Travel App © 2020</span>
      <button onClick={handleDarkModeToggle} class="theme-toggle-button bottom-right">
        Swap Themes
      </button>
    </div>
  );
}


export default Footer;
