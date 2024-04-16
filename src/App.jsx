import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext';
import Home from "./components/Home";
import Projects from "./components/Projects";
import AddProject from "./components/AddProject";
import Schedule from "./components/Schedule";
import Login from './components/Login';
import FacultyLogin from './components/FacultyLogin';
import StudLogin from './components/StudentLogin';
import PrivateRoute from './components/PrivateRoute';
import FacultyDashboard from './components/FacultyDashboard';
import StudentDashboard from "./components/Student";
import ErrorPage from "./components/ErrorPage";
import AcademicCoordinatorPage from "./components/ACPage";
import EvaluatorPage from "./components/EvaluatorPage";
import MentorPage from "./components/MentorPage";
function App() {
  
  return (
    <AuthProvider>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/add-project" element={<AddProject />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login-faculty" element={<FacultyLogin />} />
          <Route path="/login-student" element={<StudLogin />} />
          {/* <Route path="/Students" element={
            <PrivateRoute element={<StudentDashboard />}/>}>
            </Route>
          <Route path="/faculty" element={
            <PrivateRoute element={<FacultyDashboard />} />
          }></Route> */}
          <Route path ="/faculty/academic-coordinator" element={<AcademicCoordinatorPage/>}/>
          <Route path ="/faculty/evaluator" element={<EvaluatorPage/>}/>
          <Route path ="/faculty/mentor" element={<MentorPage/>}/>
          <Route path="/Students" element ={<StudentDashboard/>}/>
          <Route path="/faculty" element ={<FacultyDashboard/>}/>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
