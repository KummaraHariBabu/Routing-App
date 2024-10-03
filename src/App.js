import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Personnel from "./pages/Personnel";
import PersonnelDetails from "./pages/PersonnelDetails";
import Paths from "./pages/Paths";
import Frontend from "./pages/Frontend";
import Backend from "./pages/Backend";
const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="sectionWrapper">
                <Home />
              </div>
            }
          />
          <Route
            path="/personnel"
            element={
              <div className="sectionWrapper">
                <Personnel />
              </div>
            }
          />
          <Route
            path="/personnel/:id"
            element={
              <div className="sectionWrapper">
                <PersonnelDetails />
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div className="sectionWrapper">
                <Contact />
              </div>
            }
          />
          <Route
            path="/paths"
            element={
              <div className="sectionWrapper">
                <Paths />
              </div>
            }
          >
            <Route
              index
              element={
                <div className="sectionWrapper">
                  <Frontend />
                </div>
              }
            />
            <Route
              path="frontend"
              element={
                <div className="sectionWrapper">
                  <Frontend />
                </div>
              }
            />
            <Route
              path="backend"
              element={
                <div className="sectionWrapper">
                  <Backend />
                </div>
              }
            />
          </Route>
          <Route
            path="*"
            element={
              <div className="sectionWrapper">
                <NotFound />
              </div>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
