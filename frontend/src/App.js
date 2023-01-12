import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { Container } from './components/Font';
import { COLORS } from './components/Colors';
import Navbar from './components/NavBar';
import SignInPage from './pages/SignInPage';
import Home from './pages';
import Footer from './components/Footer';
import SignUpPage from './pages/SignUpPage';
import InstructorRoute from './routes/InstructorRoutes';
import CoursesPage from './pages/CoursesPage';
import CreateCourse from './pages/CreateCourse';

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
            <Route
              path="/courses"
              exact
              element={<InstructorRoute Component={CoursesPage} to="/test" />}
            />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/create/course" element={<CreateCourse />} />
          </Routes>
          <Footer></Footer>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
