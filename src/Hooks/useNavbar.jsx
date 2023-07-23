import { useEffect, useState } from 'react';

export default function useNavbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [lastScrollTop, setLastScrollTop] = useState(0);
	const [scrollDirection, setScrollDirection] = useState('none');

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [lastScrollTop]);

	function handleScroll() {
		const currentScrollTop = window.scrollY;

		if (currentScrollTop > lastScrollTop) setScrollDirection('down');
		else setScrollDirection('up');

		setLastScrollTop(currentScrollTop);
	}

	function toggleMenu(isOpenCheck) {
		if (!isOpenCheck) document.body.classList.add('no-scroll');
		else document.body.classList.remove('no-scroll');

		setIsOpen(!isOpenCheck);
	}

	return { scrollDirection, isOpen, toggleMenu };
}
