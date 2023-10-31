import React from 'react';
import Css from "./Week.module.css"
import tv1 from "../Pictures/tv-1.jpg";
import tv2 from "../Pictures/tv-2.jpg";
import tv3 from "../Pictures/tv-3.jpg";
import tv5 from "../Pictures/tv-5.jpg";
import tv4 from "../Pictures/tv-4.jpg";
import { BsEye } from "react-icons/bs";

const Week = () => {
    const Data = [
        {
          id: 1,
          number: "18 / ?",
          view: " 9141",
          img: tv1,
          title: "Boruto: Naruto next generations",
        },
        {
          id: 2,
          number: "18 / ?",
          view: " 4571",
          title: "The Seven Deadly Sins: Wrath of the Gods",
          img: tv2,
        },
        {
          id: 3,
          number: "18 / ?",
          view: " 9524",
          title: "Fate stay night unlimited blade works",
          img: tv5,
        },
        {
          id: 4,
          number: "18 / ?",
          view: " 8457",
          title: "Sword art online alicization war of underworld",
          img: tv3,
        },
        {
          id: 5,
          number: "18 / ?",
          view: " 2781",
          title: "Fate/stay night: Heaven's Feel I. presage flower",
          img: tv4,
        },
      ];


    return (
        <div>
              <div className={Css.parent}>
              {Data?.map((item) => (
                <div className={Css.card} key={item.id}>
                  <img src={item.img} alt="" />
                  <div className={Css.cardText}>
                    <div className={Css.header}>
                      <p> {item.number}</p>
                      <p>
                        <span>
                          <BsEye /> {item.view}
                        </span>
                      </p>
                    </div>
                    <div className={Css.footer}>
                      <h4>{item.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
              </div>
        </div>
    );
}

export default Week;
