import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Login from "./components/Login";
import NavBar from "./layout/NavBar/NavBar";
import Register from "./components/Register";
import { AuthProvider } from "./contexts/AuthContext";
import { UnauthenticatedRoute } from "./contexts/UnauthenticatedRoute";
import { PrivateRoute } from "./contexts/PrivateRoute";
import Home from "./pages/Home";
import NewTask from "./pages/NewTask";
import Task from "./pages/Task";

function App() {
  return (
    <Router>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route
            path="/login"
            element={<UnauthenticatedRoute item={<Login />} />}
          ></Route>
          <Route
            path="/register"
            element={<UnauthenticatedRoute item={<Register />} />}
          ></Route>
          <Route path="/" element={<PrivateRoute item={<Home />} />}></Route>
          <Route
            path="/create_task"
            element={<PrivateRoute item={<NewTask />} />}
          ></Route>
          <Route
            path="/see_details/:id"
            element={<PrivateRoute item={<Task />} />}
          ></Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
