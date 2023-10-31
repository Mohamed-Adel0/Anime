import React from 'react';
import { Link } from 'react-router-dom';
import Css from "./FourHome.module.css"
import { FaRightLong } from "react-icons/fa6";
import { BsEye } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";
import popluar1 from "../Pictures/recent-1.jpg"
import popluar2 from "../Pictures/recent-2.jpg"
import popluar3 from "../Pictures/recent-3.jpg"
import popluar4 from "../Pictures/recent-4.jpg"
import popluar5 from "../Pictures/recent-5.jpg"
import popluar6 from "../Pictures/recent-6.jpg"



const FourHome = () => {


const RightData = [
    {
        id : 1,
        number : "18 / 18",
        renumber : "121",
        view : " 9141",
        title : "Great Teacher Onizuka",
        img : popluar1

    },
    {
        id : 2,
        number : "18 / 18",
        renumber : "121",
        view : " 9141",
        title : "Fate/stay night Movie: Heaven's Feel - II. Lost",
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
        title : "Fate/Zero 2nd Season",
        img : popluar4

    },
    {
        id : 5,
        number : "18 / 18",
        renumber : "121",
        view : " 9141",
        title : "Kizumonogatari II: Nekket su-hen",
        img : popluar5

    },
    {
        id : 6,
        number : "18 / 18",
        renumber : "121",
        view : " 9141",
        title : "The Seven Deadly Sins: Wrath of the Gods",
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
                    <h5>RECENTLY ADDED SHOWS</h5>
                    <Link to="">VIEW ALL  <FaRightLong/></Link>
                </div>
                {
                    RightData.map((item)=>
                    <div className={Css.cards} key={item.id} data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="50"
                    data-aos-offset="0">
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

export default FourHome;
