import React, { useEffect } from "react";
import Aos, { AOS } from "aos";
import "aos/dist/aos.css";
import banner from '../images/banner.png'
import plain from '../images/plain.png'
import rete from '../images/rete.png'
import reverse from '../images/reverse.png'
import navigator from '../images/navigator.png'
import downarrow from '../images/downarraw.png'
import location from '../images/location.png'
import './Banner.scss'
import '../Components/common.scss'
import Contatta from "./Contatta";
const Banner = ({clickEvent}) =>{
    useEffect(() => {
        Aos.init({ duration:1000});
    }, [7])
    return(
        <div className="second-component">
            <div className="banner-section">
                <div className="banner-img">
                    <img src = {banner} alt='banner'/>
                </div>
                <div className="banner-content">
                    <h1><span>Reduce</span> energy loss</h1>
                    <div className="row">
                    <div className="toggle-button-cover">
                    <div className="button-cover">
                        <div className="button b2" id="button-10">
                        <input type="checkbox" className="checkbox"/>
                        <div className="knobs">
                            <span>Cos’è</span>
                        </div>
                        <div className="layer"></div>
                        </div>
                    </div>
                    </div>
                    </div>
                    <p>Can aerial termography be painless? We think so!</p>
                    <p>WESII is flying on hundred plants everyday. Check if your plant was already flied to get a detailed inspection in few hours or discover our next flight schedule.</p>
                    <p>Huge benefits for complete portfolio management.<br/><span>Easier, faster, better, massive.</span></p>
                </div>
                <div  data-aos="fade-left" className="plain-img">
                    <img src={plain} alt='plain'/>
                </div>
                
                {/* location */}
                <div className="location">
                    <div className="location-para">
                        <img src={location}/>
                        <p>Selezion uno Stato e una regione</p>
                    </div>
                    {/* test */}
                    <div className="dropdown stato">
                        <div className="stato-box">
                            <h6>Stato</h6>
                            <input type="text" placeholder="Lombardia" className="dropbtn"/>
                            <div className="dropdown-content">
                                <a href="#link1">Link 1</a>
                                <a href="#link2">Link 2</a>
                                <a href="#link3">Link 3</a>
                            </div>
                        <div className="button">
                            <button><img src={downarrow}/></button>
                        </div>
                        </div>
                    </div>
                    <div className="dropdown stato">
                        <div className="stato-box">
                            <h6>Regione</h6>
                            <input type="text" placeholder="Lombardia" className="dropbtn"/>
                            <div className="dropdown-content">
                                <a href="#link1">Link 1</a>
                                <a href="#link2">Link 2</a>
                                <a href="#link3">Link 3</a>
                            </div>
                            <div className="button">
                                <button><img src={downarrow}/></button>
                            </div>
                        </div>
                    </div>
                    <div className="navigation">
                     <button onClick={clickEvent}><img src={navigator}/></button>
                    </div>
                </div>
            </div>
            <div className="rete-img">
                <img src ={rete} alt='rete'/>
            </div>
            <div className="rete1-img">
                <img src={reverse} alt='reverse'/>
            </div>
        </div>
    )
}
export default Banner