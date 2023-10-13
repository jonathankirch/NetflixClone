import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'

import Home from './pages/Home'
import Entrar from './pages/Entrar'
import Cadastro from './pages/Cadastro'

import { UserProvider } from './components/UserContext'

function App() {
	return (
		<UserProvider>
			<Router>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/entrar" element={<Entrar />} />
					<Route path="/Cadastro" element={<Cadastro />} />
				</Routes>
			</Router>
		</UserProvider>
	)
}

export default App
