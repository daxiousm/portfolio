
import React from 'react'
import './App.css';
import img from './assets/img/Dax.JPG'
import { FaNode, FaNpm, FaHtml5, FaCss3, FaJs, FaReact } from 'react-icons/fa'


function App() {
  return (
    <div classNameName="App">
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">Daxious Wendemu</span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={img}
              alt="profile pic"
            />
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#education">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#interests">
                Interests
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#awards">
                Awards
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container-fluid p-0">
        <section className="resume-section" id="about">
          <div className="resume-section-content">
            <h1 className="mb-0">
              Daxious
              <span className="text-primary">Wendemu</span>
            </h1>
            <br />
            <div className="subheading mb-5">
              Høje gladsaxe 29 5tv
              <br />
              2860 Søborg·
              <br />
              <a href="mailto:daxiousm@gmail.com">daxiousm@gmail.com</a>
            </div>
            <p className="lead mb-5">
              My objective is to create and maintain o p t i m a l l y
              functional websites and applications as tools in achieving the
              company’s mission and vision. One of my goals includes constantly
              improving my expertise in web development. This being said, I look
              forward to becoming a useful part of the company.
            </p>
            <div className="social-icons">
              <a
                className="social-icon"
                href="https://www.linkedin.com/in/daxious-mengistu-297aa74a/"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a className="social-icon" href="https://github.com/daxiousm">
                <i className="fa fa-github"></i>
              </a>
              <a
                className="social-icon"
                href="https://www.instagram.com/daxiousm/"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                className="social-icon"
                href="https://www.facebook.com/daxious/"
              >
                <i className="fa fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </section>
        <hr className="m-0" />

        <section className="resume-section" id="experience">
          <div className="resume-section-content">
            <h2 className="mb-5">Experience</h2>

            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Junior Web Developer</h3>
                <div className="subheading mb-3">Freelance</div>
                <p>
                  Freelance Junior Web Developer in both frontend and backend
                  web development, can provide maintenance and features creation
                  using front-end web technologies such as HTML5,
                  CSS3,Javascript, React and other client side development
                  prcocesses. And on the server side using nodejs, knex and
                  Swagger. and MySql for databases. I am seeking a position
                  where I can continue to grow, both as a technician and
                  collaborator.
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">October 2020 - Present</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0"> Network Engineer</h3>
                <div className="subheading mb-3">
                  Ethiopian telecommunication Corporation
                </div>
                <p>
                  Network Engineer with 3+ Years of extensive experience in
                  network Design, Implementations, and Troubleshooting in the
                  areas of Routing and Switching protocol, including experience
                  in providing network support, installation and analysis for a
                  broad range of LAN / WAN/MAN communication systems. Expertise
                  in installing, configuring, and troubleshooting of Cisco
                  Routers (7200, 7600, 3800, 3600, 2800, 2600, 1800, 1700, 800)
                  and Cisco Switches (2900, 3500, 3700 series, 6500
                  series).Skills : Cisco Routers, Pool Load Balancing Methods,
                  LTM, NAT Server, LAN/WAN, LAN Hardware And Software,
                  Troubleshooting BGP/OSPF
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">
                  March 2005 - September 2008
                </span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">Junior Electrical Engineer</h3>
                <div className="subheading mb-3">EEPCO</div>
                <p>
                  Substation Commission Assembly of High Voltage Switchgear,
                  Transformers and LV Switchgear in an enclosure where the lower
                  voltage is 240/132V
                </p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">February 2004 - March 2005</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />

        <section className="resume-section" id="education">
          <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">HackYourFuture</h3>
                <div className="subheading mb-3">Diploma</div>
                <div>
                  Web Development.<br/> Project- HYF study group management(Developed
                  using React and CSS on the Frontend, NodeJS and KnexJS for the
                  Backend and MySQL for Databases.)
                </div>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">March 2020 - January 2021</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Blekinge Tekniska Högskola:BTH-sweden </h3>
                <div className="subheading mb-3">Master of Science</div>
                <div>
                  Msc in Electrical Engineering emphasis on telecommunication
                </div>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">August 2008 - August 2010</span>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">Arbaminch Institute of Technology</h3>
                <div className="subheading mb-3">
                  Bsc in Electrical Engineering
                </div>
              </div>
              <div className="flex-shrink-0">
                <span className="text-primary">september 1999 - June 2003</span>
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />

        <section className="resume-section" id="skills">
          <div className="resume-section-content">
            <h2 className="mb-5">Skills</h2>
            <div className="subheading mb-3">
              Programming Languages and Tools
            </div>

            <ul className="list-inline dev-icons">
              <FaHtml5 className="list-inline-item" />
              <FaCss3 className="list-inline-item" />
              <FaJs className="list-inline-item" />
              <FaReact className="list-inline-item" />
              <FaNode className="list-inline-item" />
              <FaNpm className="list-inline-item" />
            </ul>
            <div className="subheading mb-3">Workflow</div>
            <ul className="fa-ul mb-0">
              <li>
                <span className="fa-li">
                  <i className="fa fa-check"></i>
                </span>
                Mobile-First, Responsive Design
              </li>
              <li>
                <span className="fa-li">
                  <i className="fa fa-check"></i>
                </span>
                Cross Browser Testing & Debugging
              </li>
              <li>
                <span className="fa-li">
                  <i className="fa fa-check"></i>
                </span>
                Cross Functional Teams
              </li>
              <li>
                <span className="fa-li">
                  <i className="fa fa-check"></i>
                </span>
                Agile Development
              </li>
            </ul>
          </div>
        </section>
        <hr className="m-0" />

        <section className="resume-section" id="interests">
          <div className="resume-section-content">
            <h2 className="mb-5">Interests</h2>
            <p>
              Apart from being a new web developer, I enjoy taking pictures. I
              am an avid Photographer. During the warmer months here in
              copenhagen I enjoy running, playing football, and taking long
              walk.
            </p>
            <p className="mb-0">
              When forced indoors, I follow a number of spy genre movies and
              television shows, I am an aspiring chef, and I spend a large
              amount of my free time exploring the latest technology
              advancements in the front-end web development world.
            </p>
          </div>
        </section>
        <hr className="m-0" />

        <section className="resume-section" id="awards">
          <div className="resume-section-content">
            <h2 className="mb-5">Certifications</h2>
            <ul className="fa-ul mb-0">
              <li>
                <span className="fa-li">
                  <i className="fa fa-trophy text-warning"></i>
                </span>
                Cisco Certified Network Associate Cyber ops(CCNA)-2018
              </li>
              <li>
                <span className="fa-li">
                  <i className="fa fa-trophy text-warning"></i>
                </span>
                Cisco Certified Network Associate Routing and Switching(CCNA)
              </li>
              <li>
                <span className="fa-li">
                  <i className="fa fa-trophy text-warning"></i>
                </span>
                Cisco Certified Network Associate Wireless(CCNA)
              </li>
              <li>
                <span className="fa-li">
                  <i className="fa fa-trophy text-warning"></i>
                </span>
                1<sup>st</sup>
                HYF Corona-hackathon 2020
              </li>
              <li>
                <span className="fa-li">
                  <i className="fa fa-trophy text-warning"></i>
                </span>
                HackYourFuture(HYF)-web-Developer 2021
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
