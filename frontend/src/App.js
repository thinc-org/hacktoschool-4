import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import SignInPage from './pages/SignInPage';
import Home from './pages'

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/sign-in' element={<SignInPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
