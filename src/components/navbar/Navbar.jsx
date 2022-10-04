import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <Link to="/">
            un<span style={{ color: '#6DDCFF' }}>bounce</span>{' '}
          </Link>
        </div>
        <input type="radio" name="slider" id="menu-btn" />
        <input type="radio" name="slider" id="close-btn" />
        <ul className="nav-links">
          <label htmlFor="close-btn" className="tn close-btn">
            <i className="fas fa-times" />
          </label>
          <li>
            <Link to="/courses" className="desktop-item">
              Courses
            </Link>
            <input type="checkbox" id="showDrop" />

            <label htmlFor="showDrop" className="mobile-item">
              <a href ="/courses"> Courses </a>
            </label>
            <ul className="drop-menu">
              <li>
                <a href="/">Blockchain</a>
              </li>
              <li>
                <a href="/">Metaverse</a>
              </li>
              <li>
                <a href="/">AR/VR</a>
              </li>
              <li>
                <a href="/">AI/ML</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/" className="desktop-item">
              Segment
            </a>
            <input type="checkbox" id="showDrop" />
            <label htmlFor="showDrop" className="mobile-item">
              <a href="/segment"> Segment </a>
            </label>
            <ul className="drop-menu">
              <li>
                <a href="/">University</a>
              </li>
              <li>
                <a href="/">Corporate</a>
              </li>
              <li>
                <a href="/">Fresher</a>
              </li>
              <li>
                <a href="/">Software E.</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/" className="desktop-item">
              Partners
            </a>
            <input type="checkbox" id="showDrop" />
            <label htmlFor="showDrop" className="mobile-item">
              <a href="/partenrs"> Partners </a>
            </label>
            <ul className="drop-menu">
              <li>
                <a href="/">Jobs</a>
              </li>
              <li>
                <a href="/">Projects</a>
              </li>
              <li>
                <a href="/">Intership</a>
              </li>
              <li>
                <a href="/">R&D</a>
              </li>
              <li>
                <a href="/">Incubation</a>
              </li>
              <li>
                <a href="/">Accelerator</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/" className="desktop-item">
              Mega Menu
            </a>
            <input type="checkbox" id="showMega" />
            <div htmlFor="showMega" className="mobile-item">
              <a href="/megamenu"> Mega Menu </a>
            </div>
            <div className="mega-box">
              <div className="content">
                <div className="row">
                  <img src="img.jpg" alt="" />
                </div>
                <div className="row">
                  <header>Courses</header>
                  <ul className="mega-links">
                    <li>
                      <a href="/">Blockchain</a>
                    </li>
                    <li>
                      <a href="/">Metaverse</a>
                    </li>
                    <li>
                      <a href="/">AR/VR</a>
                    </li>
                    <li>
                      <a href="/">AI/ML</a>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <header>Segment</header>
                  <ul className="mega-links">
                    <li>
                      <a href="/">University</a>
                    </li>
                    <li>
                      <a href="/">Corporate</a>
                    </li>
                    <li>
                      <a href="/">Fresher</a>
                    </li>
                    <li>
                      <a href="/">Software E.</a>
                    </li>
                  </ul>
                </div>
                <div className="row">
                  <header> Partners </header>
                  <ul className="mega-links">
                    <li>
                      <a href="/">Jobs</a>
                    </li>
                    <li>
                      <a href="/">Projects</a>
                    </li>
                    <li>
                      <a href="/">Intership</a>
                    </li>
                    <li>
                      <a href="/">R&D</a>
                    </li>
                    <li>
                      <a href="/">Incubation</a>
                    </li>
                    <li>
                      <a href="/">Accelerator</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Support</a>
          </li>
        </ul>
        <label htmlFor="menu-btn" className="btn menu-btn">
          <i className="fas fa-bars" />
        </label>
      </div>
    </nav>
  );
}
export default Navbar;
