import './index.css';
import data from './info.json';
import self from './self.jpg';

function App () {
  let { name, title } = data;
  return (
    <>
    <div className="header">
    <header>
    <h1>{name}</h1>
    <h2>{title}</h2>
    </header>
    </div>

    <SideBySide />

    <Quals />

    <Footer />
    </>
    );
};

function AboutMe () {
  let {
    about: {firstDesc, secondDesc},
    links: {gitHub, djangoApp, linkedIn}
  } = data;
  return (
    <div className="bio">
    <h2>ABOUT ME</h2>
    <p>{firstDesc}</p>
    <p>{secondDesc}</p>
    <h2><a href={gitHub}>My GitHub Portfolio</a></h2>
<h2><a href={djangoApp}>My Django Reading List app</a></h2>
<h2><a href={linkedIn}>My LinkedIn</a></h2>
    </div>
    );
};

function SideBySide () {
  return (
    <div className="sides">
    <AboutMe />
    <Contact />
    </div>
    );
};

function Contact () {
  let {contact: { tel, email }} = data;
  return (
    <div className="contact">
        <img src={self}></img>
        <h4>Contact Information</h4>
        <a href={email}><p align="center">&#128231; Email: zoey.m.gavette@gmail.com</p></a>
        <a href={tel}><p align="center">&#9742;&#65039; Phone: (503) 820-9509</p></a>
      </div>
      );
};

function Quals () {
  return (
    <div class="quals">
        <h2>QUALIFICATIONS</h2>
        <h3>Programming Languages</h3>
        <p><b>- Python</b></p>
        <p><b>- JavaScript</b></p>
        <p><b>- C++</b></p>
        <h3>Web Frameworks</h3>
        <p><b>- Django</b></p>
        <h3>Markup Languages</h3>
        <p><b>- HTML5</b></p>
        <p><b>- CSS3</b></p>
        <h3>Operating System Environments</h3>
        <p><b>- Linux OSes with PyCharm and Sublime Text</b></p>
        <p><b>- Windows OSes with Visual Studio and Spyder</b></p>
        <h2>EDUCATION</h2>
        <p><b>- Graduated from Portland Community College in 2014 with an Associate's Degree in Computer Science</b></p>
        <p><b>- Graduated University of Oregon in 2020 with a Bachelor's of Science in Psychology</b></p>
      </div>
      );
};

function Footer () {
  let { thanks, cred } = data;
  return (
      <footer>
      <h2>{thanks}</h2>
      <small><center>{cred}</center></small>
      </footer>
    );
};

export default App;
