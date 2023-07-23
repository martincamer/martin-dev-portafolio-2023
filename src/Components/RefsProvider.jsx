import React, { useRef } from 'react';

export const RefsContext = React.createContext();

export default function RefsProvider({ children }) {
	const aboutMeRef = useRef();
	const experienceRef = useRef();
	const skillsRef = useRef();
	const worksRef = useRef();
	const contactRef = useRef();

	return (
		<RefsContext.Provider
			value={{ aboutMeRef, experienceRef, skillsRef, worksRef, contactRef }}
		>
			{children}
		</RefsContext.Provider>
	);
}
