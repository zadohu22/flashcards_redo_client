import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { Login, Signup } from './components/Auth';

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path='/home' element={<Home />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</Router>
	);
}
