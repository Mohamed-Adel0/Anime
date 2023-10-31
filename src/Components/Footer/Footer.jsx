import React from 'react';
import Css from "./Footer.module.css"
import Logo from "../Pictures/logo.png"
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
            <div className={Css.parent}>
                <div className={Css.container}>
                    <div className={Css.card}  data-aos="fade-right"> <img src={Logo} alt="" /> </div>
                    <div className={Css.card} data-aos="fade-zoom-in"  data-aos-easing="ease-in-back" data-aos-delay="0"  data-aos-offset="0">
                    <ul>
                        <li><Link to="">Homepage</Link></li>
                        <li><Link to="">Categories</Link></li>
                        <li><Link to="">Our Blog</Link></li>
                        <li><Link to="">Contacts</Link></li>
                    </ul>
                    </div>
                    <div className={Css.card}  data-aos="fade-left">
                    <h5>Copyright ©2023 All rights reserved | This template is made by <span>Mohamed-Adel</span></h5>
                    </div>
                   
                   
                </div>
            </div>
        </div>
    );
}

export default Footer;
