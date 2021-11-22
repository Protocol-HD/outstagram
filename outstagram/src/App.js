import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Galleries from './components/pages/Galleries';
import GoToTopButton from './components/GoToTopButton';
import SignUp from './components/pages/SignUp';
import AdminPage from './components/pages/AdminPage';
import AddPostPage from './components/pages/AddPostPage';
import EditPostPage from './components/pages/EditPostPage';

function App() {
	return (
		<BrowserRouter>
			<Sidebar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/galleries" element={<Galleries />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/adminpage" element={<AdminPage />} />
				<Route path="/addpost" element={<AddPostPage />} />
				<Route path="/editpost/:id" element={<EditPostPage />} />
			</Routes>

			<GoToTopButton />
			<Footer />
		</BrowserRouter>
	);
}

export default App;