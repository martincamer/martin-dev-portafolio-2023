import { RefsContext } from '../../Components/RefsProvider';
import './Experience.css';
import { forwardRef, useContext } from 'react';

function Experience() {
	const { experienceRef } = useContext(RefsContext);

	return (
		<section
			className="container"
			ref={experienceRef}
		>
			<h2 className="section-header">Work experience</h2>
			<article className="experience">
				<div className="experience-title">
					<h1>Junior Developer</h1>
					<p className="company">Erverie Design</p>
					<p className="time">2022 - Present</p>
				</div>
				<div className="experience-details">
					<p>
						Creation of web pages, mobile applications, website maintenance.
						Technologies used Next JS, Tailwind CSS, Chakra UI, Strapi, Figma,
						Node JS and Express, Mongo DB, PostgreSQL, Nest JS, Java and Spring
						Boot, agile methodologies.
					</p>
					<h3 className="experience-tech">Tech Stack</h3>
					<p>
						Next JS, Tailwind CSS, Chakra UI, Strapi, Figma, Node JS and
						Express, Mongo DB, PostgreSQL, Nest JS, Java and Spring Boot.
					</p>
					<hr />
				</div>
			</article>
		</section>
	);
}

export default forwardRef(Experience);
