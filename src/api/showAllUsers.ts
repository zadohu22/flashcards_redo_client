export const showAllUsers = async () => {
	try {
		const response = await fetch('http://localhost:3000/show-all-users');
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.log('Error fetching users:', error);
	}
};
