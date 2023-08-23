import React from 'react';
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import LoginPage from './components/LoginPage';
import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Navigate} from 'react-router';
import HomePage from './components/HomePage';
function App() {

  const theme = createTheme({
    typography: {
      fontFamily: ["sahel-regular"].join(',')
    },
    palette: {
      primary: {
        main: "rgba(0, 102, 255, 1)"
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route element={<HomePage />} path="/home" />
          <Route element={<LoginPage />} path="/login" />
          <Route path="/" element={<Navigate to="/login"/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
