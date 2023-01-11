import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import SignInPage from './pages/SignInPage';
import Home from './pages'
import CoursesPage from './pages/CoursesPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/courses' exact element={<CoursesPage/>} />
        <Route path='/sign-in' element={<SignInPage/>} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
