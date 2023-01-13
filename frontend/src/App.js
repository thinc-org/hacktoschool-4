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
import CourseDetail from './pages/CourseDetail';
import Dashboard from './pages/Dashboard';
import DashboardDetail from './pages/DashboardDetail';

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
            <Route
              path="/courses/create"
              exact
              element={
                <InstructorRoute Component={CreateCourse} to="/courses" />
              }
            />
            <Route
              path="/dashboard"
              exact
              element={<InstructorRoute Component={Dashboard} to="/" />}
            />
            <Route
              path="/dashboard/:title"
              exact
              element={<InstructorRoute Component={DashboardDetail} to="/" />}
            />
            <Route path="courses/:title" element={<CourseDetail />} />
          </Routes>
          <Footer></Footer>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
