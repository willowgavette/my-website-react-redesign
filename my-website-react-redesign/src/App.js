import './index.css';
import data from './info.json';
import AboutMe from './AboutMe.js';
import Header from './Header.js';
import Contact from './Contact.js';
import Quals from './Quals.js';

function App () {
  let { name, title } = data;
  return (
    <>
    <div className="container">
      <Header />
      <SideBySide />
      <Quals />
      <Footer />
    </div>
    </>
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
