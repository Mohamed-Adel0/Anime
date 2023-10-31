import React from 'react';
import { Link } from 'react-router-dom';
import Css from "./FiveHome.module.css"
import { FaRightLong } from "react-icons/fa6";
import { BsEye } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";
import popluar1 from "../Pictures/live-1.jpg"
import popluar2 from "../Pictures/live-2.jpg"
import popluar3 from "../Pictures/live-3.jpg"
import popluar4 from "../Pictures/live-4.jpg"
import popluar5 from "../Pictures/live-5.jpg"
import popluar6 from "../Pictures/live-6.jpg"



const FiveHome = () => {


const RightData = [
    {
        id : 1,
        number : "18 / 18",
        renumber : "121",
        view : " 9141",
        title : "Shouwa Genroku Rakugo Shinjuu",
        img : popluar1

    },
    {
        id : 2,
        number : "18 / 18",
        renumber : "121",
        view : " 9141",
        title : "Mushishi Zoku Shou 2nd Season",
        img : popluar2

    },
    {
        id : 3,
        number : "18 / 18",
        renumber : "121",
        view : " 9141",
        title : "Mushishi Zoku Shou: Suzu no Shizuku",
        img : popluar3

    },
    {
        id : 4,
        number : "18 / 18",
        renumber : "121",
        view : " 9141",
        title : "The Seven Deadly Sins: Wrath of the Gods",
        img : popluar4

    },
    {
        id : 5,
        number : "18 / 18",
        renumber : "121",
        view : " 9141",
        title : "Fate/stay night Movie: Heaven's Feel - II. Lost",
        img : popluar5

    },
    {
        id : 6,
        number : "18 / 18",
        renumber : "121",
        view : " 9141",
        title : "Kizumonogatari II: Nekketsu-hen",
        img : popluar6

    },
]



    return (
        <div>
        <div className={Css.parent}>
            <div className={Css.boxcontainer}>

                {/* --------Container Da 5as bely 3alla shamal ------------- */}
            <div className={Css.container}>
                <div className={Css.menu}>
                    <h5>LIVE ACTION</h5>
                    <Link to="">VIEW ALL  <FaRightLong/></Link>
                </div>
                {
                    RightData.map((item)=>
                    <div className={Css.cards} key={item.id}  data-aos="fade-right"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-sine">
                    <div className={Css.image}>
                        <img src={item.img} alt="" />

                        <div className={Css.insidePicture}>
                            <div className={Css.header}>
                            <p>{item.number}</p>
                            </div>

                            <div className={Css.footer}>
                            <p> <BiMessageRounded/> {item.renumber}</p>
                            <p> <BsEye/> {item.view}</p>
                        </div>
                        </div>
                    </div>
                    <div className={Css.textParagraph}>
                        <div className={Css.action}>
                            <p>Action</p>
                            <p>Movies</p>
                        </div>
                        <h5>{item.title}</h5>
                    </div>
                </div>
                    )
                }  
            </div>
                {/* --------End Work in Container ------------- */}

            
            {/* -------------leftContainer da 5as bely 3ala el yamin--------------*/}


            {/* -------------End Work in The leftContainer-------------- */}

            </div>
        </div>
    </div>
    );
}

export default FiveHome;
