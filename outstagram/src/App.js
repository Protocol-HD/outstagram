import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';



function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Sidebar />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
