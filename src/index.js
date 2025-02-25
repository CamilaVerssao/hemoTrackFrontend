import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./assets/fontawesome/css/fontawesome.css";
import "./assets/fontawesome/css/brands.css";
import "./assets/fontawesome/css/solid.css";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "./axios"; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
