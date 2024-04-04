interface loginI {
	email: string;
	password: string;
}

export const login = async ({ email, password }: loginI) => {
	console.log(email, password);
	try {
		const response = await fetch('http://localhost:3000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password }),
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.error || 'Failed to sign up');
		}
		const data = await response.json();
		console.log(data);
	} catch (error) {
		if (error instanceof Error) {
			console.error('Error logging in:', error.message);
			throw error;
		} else {
			// Handle the case where the error is not an instance of Error
			console.error('Error logging in two:', error);
			throw error;
		}
	}
};
