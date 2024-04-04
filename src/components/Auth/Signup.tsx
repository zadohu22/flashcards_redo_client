import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUpUsers } from '../../api/signUpUser';
import { showAllUsers } from '../../api/showAllUsers';

const Signup = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');
	const [errorMessage, setErrorMessage] = useState<string>('');
	// const [passwordsMatch, setPasswordsMatch] = useState<boolean>(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			await signUpUsers({ email, password, confirmPassword });
			// If sign up succeeds, you can navigate the user to another page
			navigate('/login'); // Replace '/success' with the desired success page
		} catch (error) {
			if (error instanceof Error) {
				console.log(error, 'error from signup component');
				setErrorMessage(error.message);
			} else {
				setErrorMessage('An unknown error occurred');
			}
		}
		console.log(errorMessage, 'error message state');
	};

	return (
		<div className='w-full h-full flex flex-col justify-center items-center text-black relative'>
			<h1 className='absolute top-8 text-2xl'>Sign up for an account</h1>
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
				<input
					className='input input-bordered'
					type='password'
					placeholder='Confirm Password'
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
				/>
				<button className='btn' type='submit'>
					Signup
				</button>
			</form>
			<div className='flex flex-col justify-center items-center'>
				<p>Already have an account?</p>
				<p
					className='cursor-pointer text-blue-800'
					onClick={() => navigate('/login')}
				>
					Login
				</p>
				{errorMessage && (
					<div>
						<p className='text-red-500'>{errorMessage}</p>
					</div>
				)}
			</div>
			<button onClick={showAllUsers}>Show all users</button>
		</div>
	);
};

export default Signup;
