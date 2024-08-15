import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import MentorRegister from "./pages/Register/MentorRegister";

import "./App.css";
import { Toaster } from "./components/ui/toaster";
import Dashboard from "./pages/Dashboard";
import CareerOptions from "./pages/Dashboard/CareerOptions";
import CareerAssessments from "./pages/Dashboard/CareerAssessment";
import Mentors from "./pages/Dashboard/Mentors";
import Mentor from "./pages/Dashboard/Mentors/Mentor";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={Login} path="/login" />
          <Route Component={Register} path="/register" />
          <Route Component={MentorRegister} path="/register/mentor" />
          <Route Component={Home} path="/" />
          <Route Component={Dashboard} path="/dashboard" />
          <Route Component={CareerOptions} path="/dashboard/career-options" />
          <Route
            Component={CareerAssessments}
            path="/dashboard/career-assessment"
          />
          <Route Component={Mentors} path="/dashboard/mentors" />
          <Route Component={Mentor} path="/dashboard/mentors/:id" />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
