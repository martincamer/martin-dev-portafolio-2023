import useScrollToRef from '../../Hooks/useScrollToRef';
import { forwardRef, useContext } from 'react';
import { RefsContext } from '../../Components/RefsProvider';
import './AboutMe.css';

function AboutMe() {
	const { goToRef } = useScrollToRef();
	const { contactRef, aboutMeRef } = useContext(RefsContext);

	return (
		<section
			className="aboutme-container container"
			ref={aboutMeRef}
			id="home"
		>
			<div className="aboutme-content">
				<img
					src="me.jpg"
					alt="martin-dev-image"
				/>
				<div className="aboutme-info">
					<h1>
						Hi, I'm <span>Martín</span>
					</h1>
					<h2 className="aboutme-title">Software Developer / Front End</h2>
					<p className="aboutme-description">
						Deeply passionate about creating user experiences and web
						applications. Dedicated to delivering exceptional results and
						committed to maintaining meticulous attention to detail in all my
						works.
					</p>
					<ul className="social-links">
						<li>
							<a
								href="https://github.com/martincamer"
								target="_blank"
							>
								<i className="fab fa-github" />
							</a>
						</li>
						<li>
							<a
								href="https://www.linkedin.com/in/martin-camer-115651201/"
								target="_blank"
							>
								<i className="fab fa-linkedin" />
							</a>
						</li>
					</ul>
					<footer className="aboutme-buttons">
						<a
							href="#"
							target="_blank"
							type="button"
							className="btn btn-primary"
						>
							View resume
						</a>
						<button
							className="btn btn-secondary"
							onClick={() => goToRef(contactRef)}
						>
							Contact
						</button>
					</footer>
				</div>
			</div>
		</section>
	);
}

export default forwardRef(AboutMe);
