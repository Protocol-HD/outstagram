import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Test from './components/pages/Test';
import Galleries from './components/pages/Galleries';



function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Sidebar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/test/" element={<Test />} />
					<Route path="/galleries/" element={<Galleries />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
