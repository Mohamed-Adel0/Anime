import Css from "./TwoHome.module.css";
import { Link, Outlet } from "react-router-dom";
import { FaRightLong } from "react-icons/fa6";
import { BsEye } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";
import trend1 from "../Pictures/trend-1.jpg";
import trend2 from "../Pictures/trend-2.png";
import trend3 from "../Pictures/trend-3.jpg";
import trend4 from "../Pictures/trend-4.jpg";
import trend5 from "../Pictures/trend-5.jpg";
import trend6 from "../Pictures/trend-6.jpg";

const TwoHome = () => {
  // here for Data Api to right card's

  // End the data Api

  const RightData = [
    {
      id: 1,
      number: "18 / 18",
      renumber: "11",
      view: " 9141",
      title: "The Seven Deadly Sins: Wrath of the Gods",
      img: trend1,
    },
    {
      id: 2,
      number: "18 / 18",
      renumber: "11",
      view: " 1997",
      title: "Gintama Movie 2: Kanketsu-hen - Yorozuya yo Eien",
      img: trend2,
    },
    {
      id: 3,
      number: "18 / 18",
      renumber: "11",
      view: " 5714",
      title: "Shingeki no Kyojin Season 3 Part 2",
      img: trend3,
    },
    {
      id: 4,
      number: "18 / 18",
      renumber: "11",
      view: " 9141",
      title: "Fullmetal Alchemist: Brotherhood",
      img: trend4,
    },
    {
      id: 5,
      number: "18 / 18",
      renumber: "11",
      view: " 20157",
      title: "Shiratorizawa Gakuen Koukou",
      img: trend5,
    },
    {
      id: 6,
      number: "18 / 18",
      renumber: "11",
      view: "1178",
      title: "Code Geass: Hangyaku no Lelouch R2",
      img: trend6,
    },
  ];
  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.boxcontainer}>
          {/* Frest Line */}
          <div className={Css.container}>
            <div className={Css.menu}>
              <h5>TRENDING NOW</h5>
              <Link to="">
                VIEW ALL <FaRightLong />
              </Link>
            </div>

            {/* Da elly ana sh8al 3leh dlw2ty ! */}

            {RightData.map((item) => (
              <div className={Css.cards} key={item.id} data-aos="fade-right">
                <div className={Css.card}>
                  <img src={item.img} alt="" />

                  <div className={Css.dataCard}>
                    <div className={Css.topCard}>
                      <p>{item.number}</p>
                    </div>
                    <div className={Css.bottomCard}>
                      <p>
                        {" "}
                        <BiMessageRounded /> {item.renumber}
                      </p>
                      <p>
                        {" "}
                        <BsEye /> {item.view}
                      </p>
                    </div>
                  </div>
                  <div className={Css.paragraph}>
                    <div className={Css.border}>
                      <p>Active</p>
                      <p>Movie</p>
                    </div>
                    <h5>{item.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* New Line */}
          <div className={Css.leftContainer}>
            <div className={Css.leftCards}>
              <div className={Css.Text}>
                <h5>TOP VIEWS</h5>
                <ul>
                  <li>
                    <Link to="/">Day</Link>
                  </li>
                  <li>
                    <Link to="week">Week</Link>
                  </li>
                  <li>
                    <Link to="Month">Month</Link>
                  </li>
                  <li>
                    <Link to="years">Years</Link>
                  </li>
                </ul>
              </div>
              <div className={Css.bgConainer}>
                <Outlet></Outlet>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoHome;
