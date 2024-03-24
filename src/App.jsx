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
import Profile from "./pages/Profile";
import RedefineEmail from "./pages/Profile/pages/RedefineEmail";
import DeleteAccount from "./pages/Profile/pages/DeleteAccount";
import RedefinePassword from "./pages/Profile/pages/RedefinePassword";

let messageLogged = false;

if (!messageLogged) {
  console.log(
    "%c Atenção! Caso haja alguma alteração não autorizada neste painel (DevTools), por segurança será feito o logout do usuário!",
    "background: rgba(248, 236, 26, 0.51); color: #fff; padding: 15px; font-weight: bold;"
  );
  messageLogged = true;
}

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
          <Route
            path="/profile"
            element={<PrivateRoute item={<Profile />} />}
          ></Route>
          <Route
            path="/profile/change_email"
            element={<PrivateRoute item={<RedefineEmail />} />}
          ></Route>
          <Route
            path="/profile/delete_acc"
            element={<PrivateRoute item={<DeleteAccount />} />}
          ></Route>
          <Route
            path="/profile/redefine_password"
            element={<PrivateRoute item={<RedefinePassword />} />}
          ></Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
