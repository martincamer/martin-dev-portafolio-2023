import './Contact.css';
import emailjs from '@emailjs/browser';
import { useContext, useRef, useState } from 'react';
import { RefsContext } from '../../Components/RefsProvider';

export default function Contact() {
	const [nombre, setNombre] = useState('');
	const [email, setEmail] = useState('');
	const [error, setError] = useState(false);

	const form = useRef();
	const { contactRef } = useContext(RefsContext);

	function handleSubmit(e) {
		e.preventDefault();

		if ([nombre, email].includes('')) {
			setNombre('');
			setEmail('');
			setError(true);
		} else {
			emailjs
				.sendForm(
					'service_g4z8jzo',
					'template_nukd3lj',
					form.current,
					'nNctAPcyYJvqDUxkT'
				)
				.then(
					result => {
						alert('Message sent');
						console.log('sent' + result.text);
					},
					error => {
						console.log('err' + error.text);
					}
				);

			setNombre(false);
			setEmail(false);
			setError(false);
		}
	}

	return (
		<section
			className="container contact-section"
			ref={contactRef}
		>
			<div className="contact-info">
				<h2>Contact me</h2>
				<p className="contact-text">
					Feel free to contact me any time. I will get back to you as soon as I
					can!
				</p>
				<div className="contact-info-info">
					<h3>Email</h3>
					<p>martincamer011@gmail.com</p>
					<h3>Phone</h3>
					<p>+54 3462 69 39 61</p>
				</div>
				<ul className="social-links">
					<li>
						<a
							href="https://github.com/martincamer/"
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
					<li>
						<a href="mailto:martincamer011@gmail.com">
							<i className="far fa-envelope" />
						</a>
					</li>
				</ul>
			</div>
			<form
				className="contact-form"
				onSubmit={handleSubmit}
				ref={form}
			>
				{error && (
					<p className="msg-error">{'Todos los campos son obligatorios'}</p>
				)}
				<div className="form-group">
					<input
						type="text"
						name="user_name"
						placeholder="Name"
						onChange={e => setNombre(e.target.value)}
					/>

					<input
						className="error"
						type="email"
						name="user_email"
						placeholder="Email"
						onChange={e => setEmail(e.target.value)}
					/>
				</div>
				<textarea
					name="message"
					placeholder="Message"
				/>
				<button type="submit">Send</button>
			</form>
		</section>
	);
}
