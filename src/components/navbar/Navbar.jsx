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
          {/* <label htmlFor="close-btn" className="tn close-btn">
            <i className="fas fa-times" />
          </label> */}
          <li>
            <Link to="/courses" className="desktop-item">
              Courses
            </Link>
            <input type="checkbox" id="showDrop" />
            <label htmlFor="showDrop" className="mobile-item">
              Dropdown Menu
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
              Dropdown Menu
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
              Dropdown Menu
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
              Mega Menu
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
// import React, { useState } from 'react';
// import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import logo from '../../logo.svg';
// import './navbar.css';

// const Navbar = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);

//   return (
//     <div className="gpt3__navbar">
//       <div className="gpt3__navbar-links">
//         <div className="gpt3__navbar-links_logo">
//           <img src={logo} />
//         </div>
//         <div className="gpt3__navbar-links_container">
//           {/* <p><a href="#home">Courses</a></p> */}
//           <div className="row">
//             <div className="col-lg-6 mb-4">
//               <h6 className="font-weight-bold text-uppercase">MegaMenu heading</h6>
//               <ul className="list-unstyled">
//                 <li className="nav-item"><a href="/" className="nav-link text-small pb-0">Unique Features</a></li>
//                 <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Image Responsive</a></li>
//                 <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Auto Carousel</a></li>
//                 <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Newsletter Form</a></li>
//               </ul>
//             </div>
//             <div className="col-lg-6 mb-4">
//               <h6 className="font-weight-bold text-uppercase">MegaMenu heading</h6>
//               <ul className="list-unstyled">
//                 <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Unique Features</a></li>
//                 <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Image Responsive</a></li>
//                 <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Auto Carousel</a></li>
//                 <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Newsletter Form</a></li>
//               </ul>
//             </div>
//             <div className="col-lg-6 mb-4">
//               <h6 className="font-weight-bold text-uppercase">MegaMenu heading</h6>
//               <ul className="list-unstyled">
//                 <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Unique Features</a></li>
//                 <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Image Responsive</a></li>
//                 <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Auto Carousel</a></li>
//                 <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Newsletter Form</a></li>
//               </ul>
//             </div>
//             <div className="col-lg-6 mb-4">
//               <h6 className="font-weight-bold text-uppercase">MegaMenu heading</h6>
//               <ul className="list-unstyled">
//                 <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Unique Features</a></li>
//                 <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Image Responsive</a></li>
//                 <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Auto Carousel</a></li>
//                 <li className="nav-item"><a href="/" className="nav-link text-small pb-0 ">Newsletter Form</a></li>
//               </ul>
//             </div>
//           </div>
//           <p><a href="#wgpt3">Segment</a></p>
//           <p><a href="#possibility">Partners</a></p>
//           <p><a href="#features">About Us</a></p>
//           <p><a href="#blog">Support</a></p>
//         </div>
//       </div>

//       <div className="gpt3__navbar-sign">
//         <p>Sign in</p>
//         <button type="button">Sign up</button>
//       </div>
//       <div className="gpt3__navbar-menu">
//         {toggleMenu
//           ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
//           : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
//         {toggleMenu && (
//           <div className="gpt3__navbar-menu_container scale-up-center">
//             <div className="gpt3__navbar-menu_container-links">
//               <p><a href="#home">Courses</a></p>
//               <p><a href="#wgpt3">Segment</a></p>
//               <p><a href="#possibility">Partners</a></p>
//               <p><a href="#features">About Us</a></p>
//               <p><a href="#blog">Support</a></p>
//             </div>
//             <div className="gpt3__navbar-menu_container-links-sign">
//               <p>Sign in</p>
//               <button type="button">Sign up</button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
