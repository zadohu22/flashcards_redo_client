// type Props = import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { login } from '../../api/login';

// type Props = {}

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault();
			await login({ email, password });
			setErrorMessage('');
			setEmail('');
			setPassword('');
			navigate('/home');
		} catch (error) {
			if (error instanceof Error) {
				console.log(error, 'error from login component');
				setErrorMessage(error.message);
				console.log(errorMessage);
			} else {
				setErrorMessage('An unknown error occurred');
			}
		}
	};

	return (
		<div className='w-full h-full flex flex-col justify-center items-center text-black relative'>
			<h1 className='absolute top-8 text-2xl'>Log in</h1>
			<form className='flex flex-col gap-4' onSubmit={handleSubmit}>
				<input
					className='input input-bordered'
					type='email'
					placeholder='Email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					className='input input-bordered'
					type='password'
					placeholder='Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button className='btn' type='submit'>
					Login
				</button>
			</form>
			{errorMessage && (
				<div>
					<p className='text-red-500'>{errorMessage}</p>
				</div>
			)}
			<div className='flex flex-col justify-center items-center'>
				<p>Don't have an account?</p>
				<p
					className='cursor-pointer text-blue-800'
					onClick={() => navigate('/signup')}
				>
					Sign Up
				</p>
			</div>
		</div>
	);
};

export default Login;
