import './Works.css';
import Work from '../../Components/Work/Work';
import { worksData } from '../../WorksData';
import { forwardRef, useContext } from 'react';
import { RefsContext } from '../../Components/RefsProvider';

export default function Works() {
	const { worksRef } = useContext(RefsContext);

	return (
		<section
			className="works container"
			ref={worksRef}
		>
			<h2 className="section-header">Recent projects</h2>
			<div className="works-grid">
				{worksData.map(work => (
					<Work
						key={work.id}
						workData={work}
					/>
				))}
			</div>
		</section>
	);
}
