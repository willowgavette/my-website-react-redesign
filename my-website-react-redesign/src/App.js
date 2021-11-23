import './index.css';
import data from './info.json';

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

    <AboutMe />
    </>
    );
};

function AboutMe () {
  let {about: {firstDesc, secondDesc}} = data;
  return (
    <div>
      <h2>ABOUT ME</h2>
      <p>{firstDesc}</p>
      <p>{secondDesc}</p>

      <Links />
    </div>
    );
};

function Links () {
  let {links: {gitHub, djangoApp, linkedIn}} = data;
  return (
    {links.map(link, i) => (
      <h2><a key={i} href={link}>My {i}</a></h2>))
}

export default App;
