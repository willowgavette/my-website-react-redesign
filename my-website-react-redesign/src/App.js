import './index.css';

function App() {

  return (
    <div className="header">
    <header>
    <h1>WILLOW GAVETTE</h1>
    <h2>Full-Stack Software Engineer</h2>
    </header>

    <AboutMe />

    </div>
    );
};

function AboutMe () {
  const bio = {
    about: "about me",
    first: "Hi, I'm Willow! I'm a full-stack software engineer who is passionate about programming, code optimization, and algorithm design. I'm focused, driven, detail-oriented, and one of the hardest workers you'll ever meet. In my spare time, I enjoy going to the gym, reading, and converting an old Uhaul box truck into a camper!",
    second: "I am always learning new technologies as well as trying to improve my skills with the tech I already know. The process of designing software and then expanding and optimizing it is one of my strongest loves. When I'm not coding, I'm thinking about coding!",
  };
  return (
    <div>
      <h2>{bio.about.toUpperCase()}</h2>
      <p>{bio.first}</p>
      <p>{bio.second}</p>
    </div>
    );
};

export default App;
