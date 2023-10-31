import React from "react";
import Carousel from "react-bootstrap/Carousel";
import logo from "../Pictures/hero-1.jpg";
import hero2 from "../Pictures/hero-2.jpg";
import hero3 from "../Pictures/hero-3.jpg";
import Css from "./Home.module.css";
import { Link, Route, Routes } from "react-router-dom";
import { FaRightLong } from "react-icons/fa6";
import TwoHome from "../TwoHome/TwoHome";
import ThreeHome from "../ThreeHome/ThreeHome";
import FourHome from "../FourHome/FourHome";
import FiveHome from "../FiveHome/FiveHome";
import Week from "../Week/Week";
// import Day from "../Day/Day";
import Login from "../Login/Login";

const Home = () => {
  return (
    <div>
      <Carousel fade className={Css.parent}>
        <Carousel.Item className={Css.card} interval={2000}>
          <img src={logo} alt="" />
          <Carousel.Caption className={Css.cards}>
            <div className={Css.anmation} data-aos="zoom-out-down">
              <p>
                <span>Adventure</span>
              </p>
              <h1>Fate / Stay Night: Unlimited</h1>
              <h1>Blade Works</h1>
              <p>After 30 days of travel across the world...</p>
              <div className={Css.text}>
                <Link to="/">WATCH NOW </Link>
                <button>
                  <FaRightLong />{" "}
                </button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className={Css.card} interval={1800}>
          <img src={hero2} alt="" />
          <Carousel.Caption className={Css.cards}>
            <div className={Css.anmation} data-aos="zoom-out-down">
              <p>
                <span>Adventure</span>
              </p>
              <h1>Fate / Stay Night: Unlimited</h1>
              <h1>Blade Works</h1>
              <p>After 30 days of travel across the world...</p>
              <div className={Css.text}>
                <Link to="/">WATCH NOW </Link>
                <button>
                  <FaRightLong />{" "}
                </button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className={Css.card} interval={1500}>
          <img src={hero3} alt="" />
          <Carousel.Caption className={Css.cards}>
            <div className={Css.anmation} data-aos="zoom-out-down">
              <p>
                <span>Adventure</span>
              </p>
              <h1>Fate / Stay Night: Unlimited</h1>
              <h1>Blade Works</h1>
              <p>After 30 days of travel across the world...</p>
              <div className={Css.text}>
                <Link to="/">WATCH NOW </Link>
                <button>
                  <FaRightLong />{" "}
                </button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* <TwoHome/> */}
      <Routes>
        <Route path="Login" element={<Login/>} />
        <Route
          path="/"
          element={<TwoHome />}
          children={<Route path="/" element={<Week />} />}
        />
       
      </Routes>
      <ThreeHome />
      <FourHome />
      <FiveHome />
    </div>
  );
};

export default Home;
