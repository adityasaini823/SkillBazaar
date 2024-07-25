import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Landing from './components/Landing';
import CreateCourse from './components/CreateCourse';
import Register from './components/Register';
import ShowCourses from './components/ShowCourses';
import AppBar from './components/AppBar.jsx';
import CourseDetails from './components/CourseDetails.jsx'

// This file shows how you can do routing in React.
// Try going to /login, /register, /about, /courses on the website and see how the HTML changes
// based on the route.
// You can also try going to /random and see what happens (a route that doesn't exist).
function App() {
    return (
        <div>
        <Router>
            <AppBar />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/createCourse" element={<CreateCourse />} />
                <Route path="/courses" element={<ShowCourses />} />
                <Route path='/course/:id'element={<CourseDetails/>}/>
            </Routes>
        </Router>
        </div>
    );
}

export default App;
