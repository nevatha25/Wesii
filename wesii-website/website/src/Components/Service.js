import React, { useEffect } from "react";
import './Service.scss'
import '../Components/common.scss'
import monitoring from '../images/monitoring.png'
import photogrammetry from '../images/photogrammetry.png'

const Service =()=>{
    return(
        <div className="third-component">
            <div className="service-section">
                <div className="service-content">
                    <h2>Services to help you get <span>on top of your business</span>, literally</h2>
                    <p>Using drones and airplanes we are able to capture data from an aerial view.. and then tell you what it actually means AND how it can help your business using our in-house developed software.</p>
                </div>
                <div className="service-cards">
                    <div  className="card">
                        <div className="fixed">
                        <img src = {monitoring} alt='monitoring'/>
                        </div>
                        <div className="card-content">
                            <h6>FOTOVOLTAICO</h6>
                            <h3>Monitoring</h3>
                            <p>Lorem ipsum dolor sit amet deatem instructa eas nequorum lorem ipsum dolor sit amet deatem instructa.</p>
                            <p>Lorem ipsum dolor sit amet deatem instructa eas nequorum lorem ipsum dolor sit amet deatem instructa.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="fixed">
                        <img src={photogrammetry} alt='photogrammetry'/>
                        </div>
                        <div className="card-content">
                            <h6>FOTOVOLTAICO</h6>
                            <h3>Photogrammetry</h3>
                            <p>Lorem ipsum dolor sit amet deatem instructa eas nequorum lorem ipsum dolor sit amet deatem instructa.</p>
                            <p>Lorem ipsum dolor sit amet deatem instructa eas nequorum lorem ipsum dolor sit amet deatem instructa.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service