import { Route, BrowserRouter, Routes } from "react-router-dom";
import {Toaster} from "react-hot-toast"
import { UserContextProvider } from "../context/userContext.jsx";
import React from 'react';
import './styles/app.css';

import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Home from "./pages/Home.jsx";
import axios from 'axios'
import DashBoard from "./pages/DashBoard.jsx";


axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true


const App = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <header>
          <Header/>
        </header>
        <Toaster position="bottom-right" toastOptions={{duration:20000}}/>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
          <Route element={<DashBoard />} path="/dashboard" />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </UserContextProvider>
  );
};



export default App;
