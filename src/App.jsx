import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";

import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Ourblog from "./Components/Ourblog/Ourblog";
import Login from "./Components/Login/Login";
import TwoHome from "./Components/TwoHome/TwoHome";
import Day from "./Components/Day/Day";
import Month from "./Components/Month/Month";
import Week from "./Components/Week/Week";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Ourblog" element={<Ourblog />} />
        <Route path="Login" element={<Login />} />
        <Route
          path="/"
          element={<TwoHome />}
          children={<Route path="years" element={<Day />} />}
        />
        <Route
          path="/"
          element={<TwoHome />}
          children={<Route path="Month" element={<Month />} />}
        />
        <Route
          path="/"
          element={<TwoHome />}
          children={<Route path="Week" element={<Week />} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
