import './WorkDetails.css';
import { worksData } from '../../WorksData';
import { Link, useParams } from 'react-router-dom';
import NotFound from '../../Components/NotFound';
import useScrollToRef from '../../Hooks/useScrollToRef';

export default function WorkDetails({ worksRef, homeRef }) {
	const { path } = useParams();
	const workIndex = worksData.findIndex(work => work.path === path);
	const work = worksData[workIndex];
	const { goToRef } = useScrollToRef();

	if (workIndex === -1) {
		return <NotFound />;
	}

	const nextWorkIndex = (workIndex + 1) % worksData.length;
	const prevWorkIndex = (workIndex - 1 + worksData.length) % worksData.length;
	const nextWork = worksData[nextWorkIndex].path;
	const prevWork = worksData[prevWorkIndex].path;

	return (
		<div className="work-details container">
			<p className="work-details-category">{work.category}</p>
			<h1 className="work-details-name">
				<a
					href={work.live}
					target="_blank"
				>
					{work.name}
				</a>
			</h1>
			<div className="work-details-nav">
				<a onClick={() => goToRef(homeRef)}>Home &nbsp; </a>
				<span>
					&gt;
					<a onClick={() => goToRef(worksRef)}> &nbsp; Works &nbsp; </a>
					&gt; &nbsp; {work.name}
				</span>
			</div>
			<div className="work-details-description-container">
				<p dangerouslySetInnerHTML={{ __html: work.longDescription }} />
				<div className="work-details-description-tags">
					<h3>Tech Stack</h3>
					{work.tags.map((tag, index) => (
						<span key={index}>
							{tag}
							{index === work.tags.length - 1 ? '.' : ', '}
						</span>
					))}
					<div className="work-details-links">
						{work.github && (
							<a
								href={work.github}
								target="_blank"
							>
								<i className="fab fa-github"></i>GitHub
							</a>
						)}
						{work.live && (
							<a
								href={work.live}
								target="_blank"
							>
								<i className="fa-solid fa-eye"></i>Live
							</a>
						)}
					</div>
				</div>
			</div>
			{work.images &&
				work.images.map(image => (
					<img
						src={image}
						alt=""
						key={image}
					/>
				))}
			{work.video && (
				<video
					controls
					autoPlay
					loop
				>
					<source
						src={work.video}
						type="video/mp4"
					/>
				</video>
			)}
			<div className="work-details-controls">
				<Link to={`/work/${prevWork}`}>
					<i className="fa-solid fa-arrow-left"></i>
				</Link>
				<Link to={`/work/${nextWork}`}>
					<i className="fa-solid fa-arrow-right"></i>
				</Link>
			</div>
		</div>
	);
}
