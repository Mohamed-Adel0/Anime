import React from 'react';
import { Link } from 'react-router-dom';
import Css from "./ThreeHome.module.css"
import { FaRightLong } from "react-icons/fa6";
import { BsEye } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";
import popluar1 from "../Pictures/popular-1.jpg"
import popluar2 from "../Pictures/popular-2.jpg"
import popluar3 from "../Pictures/popular-3.jpg"
import popluar4 from "../Pictures/popular-4.jpg"
import popluar5 from "../Pictures/popular-5.jpg"
import popluar6 from "../Pictures/popular-6.jpg"
import comment1 from "../Pictures/comment-1.jpg"
import comment2 from "../Pictures/comment-2.jpg"
import comment3 from "../Pictures/comment-3.jpg"
import comment4 from "../Pictures/comment-4.jpg"


const ThreeHome = () => {


const RightData = [
    {
        id : 6,
        number : "18 / 18",
        renumber : "121",
        view : " 9141",
        title : "Sen to Chihiro no Kamikakushi",
        img : popluar1

    },
    {
        id : 1,
        number : "18 / 18",
        renumber : "121",
        view : " 9141",
        title : "Kizumonogatari III: Reiket su-hen",
        img : popluar2

    },
    {
        id : 2,
        number : "18 / 18",
        renumber : "121",
        view : " 9141",
        title : "Shirogane Tamashii hen Kouhan sen",
        img : popluar3

    },
    {
        id : 3,
        number : "18 / 18",
        renumber : "121",
        view : " 9141",
        title : "Rurouni Kenshin: Meiji Kenkaku Romantan",
        img : popluar4

    },
    {
        id : 4,
        number : "18 / 18",
        renumber : "121",
        view : " 9141",
        title : "Mushishi Zoku Shou 2nd Season",
        img : popluar5

    },
    {
        id : 5,
        number : "18 / 18",
        renumber : "121",
        view : " 9141",
        title : "Monogatari Series: Second Season",
        img : popluar6

    },
]


const LeftData =[
    {   id : 1,
        img : comment1,
        title : "The Seven Deadly Sins: Wrath of the Gods",
        views : "19.141 Viewes"
    },
    {   id : 2,
        img : comment2,
        title : "Shirogane Tamashii hen Kouhan sen",
        views : "12M Viewes"
    },
    {   id : 3,
        img : comment3,
        title : "Kizumonogatari III: Reiket su-hen",
        views : "874K Viewes"
    },
    {   id : 4,
        img : comment4,
        title : "Monogatari Series: Second Season",
        views : "37.874 Viewes"
    },
]

    return (
        <div>
        <div className={Css.parent}>
            <div className={Css.boxcontainer}>

                {/* --------Container Da 5as bely 3alla shamal ------------- */}
            <div className={Css.container}>
                <div className={Css.menu}>
                    <h5>POPULAR SHOWS</h5>
                    <Link to="">VIEW ALL  <FaRightLong/></Link>
                </div>
                {
                    RightData.map((item)=>
                    <div className={Css.cards} key={item.id} data-aos="zoom-in-down">
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

            <div className={Css.leftContainer}>
                    <div className={Css.Text}>
                        <h5>NEW COMMENT</h5>
                    </div>

                {
                    LeftData.map((item)=>

                    <div className={Css.cards} key={item.id} data-aos="flip-right">
                  <div className={Css.image}>
                    <img src={item.img} alt="" />
                  </div>
                  <div className={Css.textParagraph}>
                        <div className={Css.action}>
                            <p>Action</p>
                            <p>Movies</p>
                        </div>
                        <div className={Css.src}>
                        <h5>{item.title}</h5>
                        <p><BsEye/> {item.views}</p>
                        </div>
                    </div>
                </div>
                    )
                }
                


            </div>

            {/* -------------End Work in The leftContainer-------------- */}

            </div>
        </div>
    </div>
    );
}

export default ThreeHome;
