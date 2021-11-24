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

    <Links />
    </>
    );
};

function AboutMe () {
  let {about: {firstDesc, secondDesc}} = data;
  return (
    <div className="bio">
    <h2>ABOUT ME</h2>
    <p>{firstDesc}</p>
    <p>{secondDesc}</p>
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

function Links () {
  let {links: {gitHub, djangoApp, linkedIn}} = data;
  return (
//     {links.map(link, i) => (
//       <h2><a key={i} href={link}>blah</a></h2>))
// }
<><h2><a href={gitHub}>My GitHub Portfolio</a></h2>
<h2><a href={djangoApp}>My Django Reading List app</a></h2>
<h2><a href={linkedIn}>My LinkedIn</a></h2>
</>
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

export default App;
