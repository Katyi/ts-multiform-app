
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import { StepsProvider } from "react-step-builder";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./types/types.ts";
import App from './App.tsx';
import Success from './pages/success/Success.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <StepsProvider>
    <ThemeProvider theme={theme}>
        <Router basename={"/ts-multiform-app/"}>
          <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/success" element={<Success/>}/>
          </Routes>
        </Router>
      </ThemeProvider>
  </StepsProvider>
)