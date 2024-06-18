import {
	Anchor,
	ButtonContainer,
	ContactContainer,
	Form,
	Input,
	Text,
	TextArea,
	Title,
} from './Contact.styles';
import Button from '../button/Button';
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { socials } from '../../data/socials';
import { toast } from 'react-hot-toast';
import {
	validateEmail,
	validateMessage,
	validateName,
	validateSubject,
} from '../../utils/validation';
import { ButtonType } from '../../types/enum';

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const [errors, setErrors] = useState({
		name: false,
		email: false,
		subject: false,
		message: false,
	});

	const handleChange = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setErrors({
			...errors,
			[name]: false,
		});
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const submit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!validateName(formData.name)) {
			setErrors({
				...errors,
				name: true,
			});
			return toast.error('Please enter a valid name (Minimum 2 characters)');
		}
		if (!validateEmail(formData.email)) {
			setErrors({
				...errors,
				email: true,
			});
			return toast.error('Please enter a valid email');
		}
		if (!validateSubject(formData.subject)) {
			setErrors({
				...errors,
				subject: true,
			});
			return toast.error('Please enter a subject (Minimum 4 characters)');
		}
		if (!validateMessage(formData.message)) {
			setErrors({
				...errors,
				message: true,
			});
			return toast.error('Please enter a message (Minimum 4 characters)');
		}

		toast.promise(
			fetch('/api/sendgrid', {
				body: JSON.stringify(formData),
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'POST',
			}),
			{
				loading: 'Sending...',
				success: () => {
					setFormData({
						name: '',
						email: '',
						subject: '',
						message: '',
					});
					return "Thanks for reaching out! I'll get back to you soon!";
				},
				error: () => {
					return 'Could not send message, please try again later or email me instead.';
				},
			},
		);
	};

	return (
		<ContactContainer id='contact'>
			<Fade triggerOnce direction='up' cascade damping={0.1}>
				<Title>/ contact me</Title>
				<Text>
					Want to discuss a project, an idea, or an opportunity? Just fill this
					form up or write me an email!
				</Text>
			</Fade>
			<Form onSubmit={submit} noValidate>
				<Fade triggerOnce direction='up' cascade damping={0.1}>
					<Input
						type='text'
						name='name'
						value={formData.name}
						error={errors.name.toString()}
						onChange={handleChange}
						placeholder='Enter your name'
					/>
					<Input
						type='email'
						name='email'
						value={formData.email}
						error={errors.email.toString()}
						onChange={handleChange}
						placeholder='Enter your email'
					/>
					<Input
						type='text'
						name='subject'
						value={formData.subject}
						error={errors.subject.toString()}
						onChange={handleChange}
						placeholder='Enter a subject'
					/>
					<TextArea
						name='message'
						value={formData.message}
						error={errors.message.toString()}
						onChange={handleChange}
						placeholder='Enter a message'
					/>
					<ButtonContainer>
						<Button type='submit' bType={ButtonType.Primary}>
							Send
						</Button>
						<Anchor href={socials.mail}>
							<Button type='button' bType={ButtonType.Secondary}>
								Send via mail
							</Button>
						</Anchor>
					</ButtonContainer>
				</Fade>
			</Form>
		</ContactContainer>
	);
};

export default Contact;
