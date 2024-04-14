import { Routes, Route } from "react-router-dom";
import MainPage from './pages/mainPage/MainPage';
import { StepsProvider } from "react-step-builder";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./types/types.ts";
import Success from './pages/success/Success.tsx';
import Failure from "./pages/failure/Failure.tsx";

const App = () => {
  return (
    <div className='App'>
      <StepsProvider>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/success" element={<Success/>}/>
            <Route path="/failure" element={<Failure/>}/>
          </Routes>
        </ThemeProvider>
      </StepsProvider>
    </div>
  )
}

export default App;