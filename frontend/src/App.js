import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { Container } from './components/Font';
import { COLORS } from './components/Colors';
import Navbar from './components/NavBar';
import SignInPage from './pages/SignInPage';
import Home from './pages';
import CoursesPage from './pages/CoursesPage';
import Footer from './components/Footer';
import SignUpPage from './pages/SignUpPage';

const theme = {
  colors: COLORS,
};

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Container>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/courses" exact element={<CoursesPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
          </Routes>
          <Footer></Footer>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
