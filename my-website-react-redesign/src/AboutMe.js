import React from 'react';
import data from './info.json';

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

export default AboutMe;
