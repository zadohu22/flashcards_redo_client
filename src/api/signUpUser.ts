interface signUpUsersProps {
	email: string;
	password: string;
	confirmPassword: string;
}

export const signUpUsers = async ({
	email,
	password,
	confirmPassword,
}: signUpUsersProps) => {
	try {
		if (password !== confirmPassword) {
			throw new Error('Passwords do not match');
		}

		const response = await fetch('http://localhost:3000/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password, confirmPassword }),
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.error || 'Failed to sign up');
		}

		const userData = await response.json();
		console.log('User signed up successfully:', userData);
	} catch (error) {
		if (error instanceof Error) {
			console.error('Error signing up:', error.message);
			throw error;
		} else {
			// Handle the case where the error is not an instance of Error
			console.error('Error signing up:', error);
			throw error;
		}
	}
};
