import Css from "./Ourblog.module.css"
import logo from "../Pictures/hero-1.jpg"
import right1 from "../Pictures/blog/blog-1.jpg"
import right2 from "../Pictures/blog/blog-4.jpg"
import right3 from "../Pictures/blog/blog-5.jpg"
import right4 from "../Pictures/blog/blog-7.jpg"
import right5 from "../Pictures/blog/blog-11.jpg"
import right6 from "../Pictures/blog/blog-10.jpg"
import left11 from "../Pictures/blog/blog-2.jpg"
import left22 from "../Pictures/blog/blog-3.jpg"
import hight1 from "../Pictures/blog/blog-6.jpg"
import left3 from "../Pictures/blog/blog-8.jpg"
import left4 from "../Pictures/blog/blog-9.jpg"
import hight2 from "../Pictures/blog/blog-12.jpg"
const Ourblog = () => {

    const small =[
       
        {   id : 2,
            img : right2,
        },
        
        {   id : 3,
            img : right3,
        },
    
        {   id : 5,
            img : right5,
        },
        {   id : 6,
            img : right6,
        },
        
    ]
    let large = [
        {   id : 1,
            fullimage : right1,
        }, {   id : 4,
            fullimage : right4,
        },
    ]
    const left1 =[
       
        {   id : 2,
            img : left11 ,
        },
        
        {   id : 3,
            img : left22,
        },
    
        {   id : 5,
            img : left3,
        },
        {   id : 6,
            img : left4,
            
        },
        
    ]
let left2 = [
    {   id : 1,
        fullimage : hight1,
    },
     {   id : 4,
        fullimage : hight2,
    },
    ]

    return (
        <div>
            <div className={Css.parent}>
                <div className={Css.logo} >
                    <img src={logo} alt="" />
                    <div className={Css.bg}>
                        <h1>Our Blog</h1>
                        <p>Welcome to the official Anime blog.</p>
                    </div>
                </div>
                <div className={Css.container}>
                {/* da bta3 el yamin---------------- */}
                <div className={Css.cards}>
                {
                    small.map((item)=> 
                <div key={item.id}>

                <div className={Css.card} key={item.id}  data-aos="fade-right">
                    <img src={item.img} alt="" />
                </div>
                </div>
                )
            }
            {
                large.map((item)=>
                <div key={item.id}>
                <div className={Css.hightCard}  data-aos="fade-right">
                    <img src={item.fullimage} alt="" />
                </div>
                </div>
                )
            }
            </div>


                {/* Da cards bta3 el shamal---------------------  */}
                <div className={Css.cards}>
                {
                left2.map((item)=>
                <div key={item.id}>
                <div className={Css.hightCard}  data-aos="fade-left">
                    <img src={item.fullimage} alt="" />
                </div>
                </div>
                )
                }
                {/* ----------NewLine-------------- */}
                {
                    left1.map((item)=> 
                <div key={item.id}>

                <div className={Css.card} key={item.id}  data-aos="fade-left">
                    <img src={item.img} alt="" />
                </div>
                </div>
               
            
                )
                }
                </div>


              


                </div>
            </div>
        </div>
    );
}

export default Ourblog;
