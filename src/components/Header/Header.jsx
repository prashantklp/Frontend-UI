import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (section) => {
    setActive(section);
    setMenuOpen(false);
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="logo-container">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAgCAYAAACCcSF5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF/SURBVHgB7ZfhUcMwDIUVjgGyAWYCsgFhg25AR+gGpBPABk03gAkaJqAbkA1gg/J0UZv+aSPlsKMf+e50Tt3X5ll2HIsOOioaAX5XKv//jkZwSyPAzXI0S8QjIpfuD8R7lmUtpUKZmepMXyC+L+h+EM9n2qiZv7GIcZOAZocIFyQ8CzWbpgSYzIMN9ctkSBcdtXnJeqmUhxTZt2Q+kI2SIhPTfHQs5huysafIqM3L/t0o5az1Y15YK3XbFC8rk3kYamh4AGvoKkqANfMkxu4RW8SvdHPbIJ5SGWdGnW1kSSxpYsyZ98Rsfipm81Ph0rwUMTspbg5S/GzkZHvCnXk2SV3BU1JfOwTqtuYvfL84al2Zh7EXuv7+4MHwDBT8wY15WRKVQsoDeOULT5lfGLT8TOSezBdGfZi3yn/CVLzgcLj3ZL6m/oit0frJPDLJxjWVWnvUuVrzGMAbXR9AS13Bw+24YiQmXIlhG6xxuUI8SDfPyqcM7oQ784xkdjWk+wPzti/u7axdPwAAAABJRU5ErkJggg=="
            alt="logo"
          />
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <nav className={`nav-wrapper ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <button
                  className={`nav-button ${active === item ? 'active' : ''}`}
                  onClick={() => handleClick(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>

          {/* Move Hire button inside nav-wrapper */}
          <button
            className={`hire-button ${active === 'hire' ? 'active' : ''}`}
            onClick={() => handleClick('hire')}
          >
            Hire Me
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
