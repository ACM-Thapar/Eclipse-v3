import * as React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home/Home";
import { Route, Router, Routes } from "react-router-dom";
import About from "./pages/About/About";
import AuthModal from "./components/AuthModal/AuthModal";
import Header from "./components/Header/Header";
import Events from "./pages/Events/Events";
import Hacklipse from "./components/Hacklipse/Hacklipse";
import Flamingo from "./components/Flamingo/Flamingo";
import Engima from "./components/Engima/Engima";
import Sponsors from "./pages/Sponsors/Sponsors";
import Tracks from "./pages/Tracks/Tracks";
import Timeline from "./pages/Timeline/Timeline";

function App() {
  return (
    <>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events" element={<Sponsors />} />
        <Route path="/event/hacklipse" element={<Hacklipse />} />
        <Route path="/event/flamingo" element={<Flamingo />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/tracks" element={<Tracks />} />
        <Route path="/timeline" element={<Timeline />} />

        <Route
          path="/"
          element={
            <div>
              <Header />
              <Home />
              <About />
              <Events />
              <Timeline />
              <Sponsors />
            </div>
          }
        />
        <Route path="/login" element={<AuthModal />} />
      </Routes>
    </>
  );
}

export default App;
