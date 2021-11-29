import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Galleries from './components/pages/Galleries';
import GoToTopButton from './components/widgets/GoToTopButton';
import AdminPage from './components/pages/AdminPage';
import AddPostPage from './components/pages/AddPostPage';
import EditPostPage from './components/pages/EditPostPage';
import Sign from './components/pages/Sign';
import SinglePost from './components/pages/SinglePost';
import SearchPost from './components/pages/SearchPost';

function App() {
	return (
		<BrowserRouter>
			<Sidebar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/search:id" element={<SearchPost />} />
				<Route path="/galleries" element={<Galleries />} />
				<Route path="/sign" element={<Sign />} />
				<Route path="/adminpage" element={<AdminPage />} />
				<Route path="/addpost" element={<AddPostPage />} />
				<Route path="/editpost:id" element={<EditPostPage />} />
				<Route path="/singlepost:id" element={<SinglePost />} />
			</Routes>
			<GoToTopButton />
			<Footer />
		</BrowserRouter>
	);
}

export default App;