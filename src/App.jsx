import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import WorkDetails from './Containers/WorkDetails/WorkDetails';
import Navbar from './Components/Navbar/Navbar';
import AboutMe from './Containers/AboutMe/AboutMe';
import Experience from './Containers/Experience/Experience';
import Works from './Containers/Works/Works';
import { AnimatePresence } from 'framer-motion';
import AnimatedContainer from './Components/AnimatedContainer';
import Contact from './Containers/Contact/Contact';
import Footer from './Components/Footer';
import NotFound from './Components/NotFound';
import { Analytics } from '@vercel/analytics/react';
import RefsProvider from './Components/RefsProvider';

export default function App() {
	const location = useLocation();

	return (
		<RefsProvider>
			<Navbar />
			<AnimatePresence mode="wait">
				<Routes
					location={location}
					key={location.pathname}
				>
					<Route
						exact
						path="/"
						element={
							<>
								<AnimatedContainer>
									<AboutMe />
									<Works />
									<Experience />
									<Contact />
									<Footer />
								</AnimatedContainer>
							</>
						}
					/>
					<Route
						path="/work/:path"
						element={
							<>
								<AnimatedContainer>
									<WorkDetails />
									<Footer />
								</AnimatedContainer>
							</>
						}
					/>
					<Route
						path="*"
						element={<NotFound />}
					/>
				</Routes>
			</AnimatePresence>
			<Analytics />
		</RefsProvider>
	);
}
