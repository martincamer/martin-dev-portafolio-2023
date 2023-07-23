import './Navbar.css';
import useNavbar from '../../Hooks/useNavbar';
import useScrollToRef from '../../Hooks/useScrollToRef';
import { useContext } from 'react';
import { RefsContext } from '../RefsProvider';

export default function Navbar() {
	const { contactRef, worksRef, aboutMeRef, experienceRef } =
		useContext(RefsContext);
	const { scrollDirection, isOpen, toggleMenu } = useNavbar();
	const { goToRef } = useScrollToRef();

	function handleClick(ref) {
		toggleMenu(true);
		goToRef(ref);
	}

	return (
		<header className="navbar-container">
			<nav
				className={`navbar ${
					scrollDirection === 'down' ? 'scroll-down' : 'scroll-up'
				}`}
			>
				<a
					className="navbar-logo"
					onClick={() => handleClick(aboutMeRef)}
				>
					&lt;martín.<span className="accent-color">dev </span>/&gt;
				</a>
				<ul className={`navbar-menu ${isOpen ? 'is-open' : ''}`}>
					<a
						className="navbar-link"
						onClick={() => handleClick(aboutMeRef)}
					>
						Home
					</a>
					<a
						className="navbar-link"
						onClick={() => handleClick(worksRef)}
					>
						Projects
					</a>
					<a
						className="navbar-link"
						onClick={() => handleClick(experienceRef)}
					>
						Experience
					</a>
					<a
						className="navbar-link"
						onClick={() => handleClick(contactRef)}
					>
						Contact
					</a>
				</ul>
				<div
					className="navbar-toggle"
					onClick={() => toggleMenu(isOpen)}
				>
					<i className={`fas fa-bars ${isOpen ? 'is-active' : ''}`}></i>
				</div>
			</nav>
		</header>
	);
}
