import { useNavigate } from 'react-router-dom';

export default function useScrollToRef() {
	const navigate = useNavigate();

	function goToRef(ref) {
		const scroll = () => ref.current?.scrollIntoView({ behavior: 'smooth' });

		if (location.pathname === '/') {
			scroll();
			return;
		}

		navigate('/');

		setTimeout(() => {
			if (ref.current.id === 'home') window.scrollTo(0, 0);
			else scroll();
		}, 500);
	}

	return { goToRef };
}
