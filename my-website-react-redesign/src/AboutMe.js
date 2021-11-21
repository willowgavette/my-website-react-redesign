import React from 'react';
import bio from './Bio.js';

function AboutMe({ bio }) {
	return (
		<>
			<section id="about">
				<h2>ABOUT ME</h2>
				{sections.map((section, i) => (
					<p key={i}>{section}</p>
				))}
			</section>
		</>
		);
	};

export default AboutMe;
