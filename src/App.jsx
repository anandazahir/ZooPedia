import React from "react";
import HomePage from "./pages/HomePage";
import { AnimalProvider } from "./api/Animal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import ContinentPage from "./pages/ContinentPage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import "./App.scss";
import { AuthContextProvider } from "./api/Auth";
import ProtectedRoutes from "./pages/Component/ProtectedRoutes";

const App = () => {
  return (
    <Router>
      <AuthContextProvider>
        <AnimalProvider>
          <Routes>
            <Route path="/login" element={<LoginPage />}></Route>

            <Route
              path="/"
              element={
                <ProtectedRoutes>
                  <HomePage />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/animal/:id"
              element={
                <ProtectedRoutes>
                  <DetailPage />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/Continent"
              element={
                <ProtectedRoutes>
                  <ContinentPage />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/about"
              element={
                <ProtectedRoutes>
                  <AboutPage />
                </ProtectedRoutes>
              }
            />
          </Routes>
        </AnimalProvider>
      </AuthContextProvider>
    </Router>
  );
};

export default App;
